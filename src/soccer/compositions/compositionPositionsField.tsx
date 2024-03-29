import { ReactElement, useCallback } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import {
  BoosterFactory,
  CompositionSetting,
  CompositionSettingPosition,
  Player,
} from '@goatim/client';
import { CompositionPositionMap } from '@src/soccer/compositions/compositionPositionMap';
import {
  CompositionPositionEditor,
  CompositionPositionEditorFields,
  GetPositionPlayersFunction,
} from '@src/soccer/compositions/compositionPositionEditor';
import { useModals } from '@src/general';
import { CompositionPositionList } from '@src/soccer/compositions/compositionPositionList';
import { UIDefaultThemes } from '@src/utils';

export interface CompositionPositionValue extends CompositionPositionEditorFields {
  player: Player;
}

export type CompositionPositionsFieldType = 'map' | 'list';

export interface CompositionPositionsFieldProps
  extends FieldComponentProps<CompositionPositionValue[]> {
  type?: CompositionPositionsFieldType;
  compositionSetting?: CompositionSetting;
  getPositionPlayers?: GetPositionPlayersFunction;
  boosterFactories?: BoosterFactory[];
  theme?: UIDefaultThemes;
  readonly?: boolean;
}

export function CompositionPositionsField({
  type = 'map',
  compositionSetting,
  getPositionPlayers,
  boosterFactories,
  onChange,
  value,
  theme,
  readonly = false,
}: CompositionPositionsFieldProps): ReactElement {
  const { pushModal } = useModals();

  const changePosition = useCallback(
    (compositionPosition: CompositionPositionEditorFields) => {
      let nextValue: CompositionPositionValue[] = value ? JSON.parse(JSON.stringify(value)) : [];

      if (!nextValue && compositionPosition.player) {
        nextValue = [compositionPosition as CompositionPositionValue];
      } else if (nextValue) {
        const index = nextValue.findIndex(
          (_position: CompositionPositionValue) => _position.id === compositionPosition.id,
        );

        if (index !== -1) {
          if (compositionPosition.player) {
            nextValue[index] = {
              ...nextValue[index],
              ...compositionPosition,
            } as CompositionPositionValue;
          } else {
            nextValue.splice(index, 1);
          }
        } else if (compositionPosition.player) {
          nextValue.push(compositionPosition as CompositionPositionValue);
        }
      }

      onChange(nextValue);
    },
    [onChange, value],
  );

  const onPositionClick = useCallback(
    async (compositionSettingPosition: CompositionSettingPosition) => {
      const compositionPosition = value?.find(
        (position) => position.id === compositionSettingPosition.id,
      );

      pushModal({
        type: 'overlay',
        component: ({ dismissModal }) => (
          <CompositionPositionEditor
            initialValues={{ id: compositionSettingPosition.id, ...compositionPosition }}
            getPositionPlayers={getPositionPlayers}
            compositionSettingPosition={compositionSettingPosition}
            compositionSetting={compositionSetting}
            boosterFactories={boosterFactories}
            onChange={(position, updates) => {
              if (updates) {
                changePosition(position);
              }
            }}
            onSubmit={dismissModal}
          />
        ),
      });
    },
    [boosterFactories, changePosition, compositionSetting, getPositionPlayers, pushModal, value],
  );

  const onPositionDelete = useCallback(
    (position: CompositionSettingPosition) => {
      changePosition({ id: position.id });
    },
    [changePosition],
  );

  switch (type) {
    case 'list':
      return (
        <div className="goatim-ui-composition-positions-list-field">
          <CompositionPositionList
            compositionPositions={value}
            onPositionClick={!readonly ? onPositionClick : undefined}
            onPositionDelete={!readonly ? onPositionDelete : undefined}
            theme={theme}
          />
        </div>
      );
    case 'map':
    default:
      return (
        <CompositionPositionMap
          compositionSetting={compositionSetting}
          positions={value}
          onPositionClick={!readonly ? onPositionClick : undefined}
          theme={theme}
        />
      );
  }
}
