import { ReactElement, useCallback, useEffect, useState } from 'react';
import {
  BoosterFactory,
  CompositionSetting,
  CompositionSettingPosition,
  Player,
  PlayerPosition,
} from '@goatim/client';
import { Field, Form, FormContext, FormProps, FormState } from '@cezembre/forms';
import isPromise from 'is-promise';
import { Button, Radio, RadioProps, Select, SelectProps } from '@src/general';
import { SoccerPlayerThumbnail } from '@src/soccer/players';
import { BoosterFactoryThumbnail } from '@src/trading';

interface PlayerSelectorOptionProps {
  value?: Player;
}

function PlayerSelectorOption({ value }: PlayerSelectorOptionProps): ReactElement | null {
  if (!value) {
    return null;
  }
  return <SoccerPlayerThumbnail player={value} size="medium" />;
}

export interface CompositionPositionEditorFields {
  id: string;
  player?: Player;
  booster_factory?: BoosterFactory;
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
        if (isPromise(res)) {
          res = await res;
        }
        setPlayers(res as Player[]);
      }
    })();
  }, [getPositionPlayers, compositionSettingPosition?.only]);

  const boosterFactoriesComparisonFn = useCallback(
    (a?: BoosterFactory | string, b?: BoosterFactory | string) => {
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
        <Field<Player, SelectProps<Player>>
          name="player"
          initialValue={initialValues?.player}
          options={players?.map((player: Player) => ({
            value: player,
          }))}
          optionComponent={PlayerSelectorOption}
          component={Select}
          canReset
          fullWidth
          type="flat"
        />
      </div>

      {formState?.values?.player && boosterFactories?.length ? (
        <div className="boosters">
          <h2>Booste tes chances !</h2>
          <span>Multiplie tes gains de GTCoins.</span>

          <div className="select-booster">
            <Field<BoosterFactory, RadioProps<BoosterFactory>>
              name="booster_factory"
              component={Radio<BoosterFactory>}
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
