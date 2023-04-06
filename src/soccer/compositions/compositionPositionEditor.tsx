import { ReactElement, useCallback, useEffect, useState } from 'react';
import {
  BoosterFactory,
  CompositionSetting,
  CompositionSettingPosition,
  Player,
  PlayerPosition,
} from '@goatim/client';
import { Field, Form, FormContext, FormFields, FormProps, FormState } from '@cezembre/forms';
import { Button, Radio, Select } from '../../general';
import { PlayerThumbnail } from '../players';
import { BoosterFactoryThumbnail } from '../../trading';

interface PlayerSelectorOptionProps {
  value?: Player;
}

function PlayerSelectorOption({ value }: PlayerSelectorOptionProps): ReactElement | null {
  if (!value) {
    return null;
  }
  return <PlayerThumbnail player={value} size="medium" />;
}

export interface CompositionPositionEditorFields extends FormFields {
  id: string;
  player?: Player;
  booster_factory?: BoosterFactory | string;
}

export type GetPositionPlayersFunction = (
  position?: PlayerPosition[] | PlayerPosition,
) => Promise<Player[] | undefined> | Player[] | undefined;

export interface PositionPlayerSelectorProps extends FormProps<CompositionPositionEditorFields> {
  getPositionPlayers?: GetPositionPlayersFunction;
  compositionSetting?: CompositionSetting;
  compositionSettingPosition?: CompositionSettingPosition;
  initialValues?: CompositionPositionEditorFields;
  boosterFactories?: BoosterFactory[];
  onCancel?: () => unknown;
}

export function CompositionPositionEditor({
  getPositionPlayers,
  compositionSetting,
  compositionSettingPosition,
  onChange,
  onSubmit,
  initialValues,
  boosterFactories,
  onCancel,
}: PositionPlayerSelectorProps): ReactElement {
  const [formState, setFormState] = useState<
    FormState<CompositionPositionEditorFields> | undefined
  >();

  const form = useCallback((formContext: FormContext<CompositionPositionEditorFields> | null) => {
    if (formContext) {
      setFormState(formContext.formState);
    }
  }, []);

  const [players, setPlayers] = useState<Player[] | undefined>();

  useEffect(() => {
    (async () => {
      if (getPositionPlayers) {
        let res = getPositionPlayers(compositionSettingPosition?.only);
        if (
          res &&
          typeof res === 'object' &&
          'then' in res &&
          res.then &&
          typeof res.then === 'function'
        ) {
          res = await res;
        }
        setPlayers(res as Player[]);
      }
    })();
  }, [getPositionPlayers, compositionSettingPosition?.only]);

  const boosterFactoriesComparisonFn = useCallback(
    (a: BoosterFactory | string | undefined, b: BoosterFactory | string | undefined) => {
      if (!a || !b) {
        return false;
      }
      const aId = typeof a === 'object' ? a.id : a;
      const bId = typeof b === 'object' ? b.id : b;
      return aId === bId;
    },
    [],
  );

  return (
    <Form<CompositionPositionEditorFields>
      className="goatim-ui-composition-position-editor"
      onChange={onChange}
      onSubmit={onSubmit}
      ref={form}>
      <div className="header">
        <div className="icon" />
        <div className="body">
          <span className="composition-setting">{compositionSetting?.name || 'Joueur'}</span>
          <span className="position">
            {compositionSettingPosition?.name || 'Sélectionne un joueur'}
          </span>
        </div>
      </div>

      <Field name="id" initialValue={initialValues?.id} type="hidden" />

      <div className="player">
        <Field<Player | undefined>
          name="player"
          initialValue={initialValues?.player}
          options={players?.map((player: Player) => ({
            value: player,
          }))}
          DefaultComponent={PlayerSelectorOption}
          component={Select}
          canCancel
          fullWidth
          type="flat"
        />
      </div>

      {formState?.values?.player && boosterFactories?.length ? (
        <div className="boosters">
          <h2>Booste tes chances !</h2>
          <span>Multiplie tes gains de points et de coins.</span>

          <div className="select-booster">
            <Field<BoosterFactory | string | undefined>
              name="booster_factory"
              component={Radio<BoosterFactory | string | undefined>}
              options={boosterFactories.map((boosterFactory) => ({
                value: boosterFactory,
                element: <BoosterFactoryThumbnail boosterFactory={boosterFactory} />,
              }))}
              initialValue={initialValues?.booster_factory}
              orientation="vertical"
              comparisonFn={boosterFactoriesComparisonFn}
            />
          </div>
        </div>
      ) : null}

      <div className="actions">
        {onCancel ? (
          <Button type="submit" shape="text" theme="transparent-dark" onClick={onCancel}>
            Annuler
          </Button>
        ) : null}
        <Button type="submit">Valider</Button>
      </div>
    </Form>
  );
}
