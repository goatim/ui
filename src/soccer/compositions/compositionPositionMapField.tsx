import { ReactElement, useCallback } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import {
  BoosterFactory,
  CompositionSetting,
  CompositionSettingPosition,
  Player,
} from '@goatim/client';
import { CompositionPositionMap, CompositionPositionMapTheme } from './compositionPositionMap';
import {
  CompositionPositionEditor,
  CompositionPositionEditorFields,
  GetPositionPlayersFunction,
} from './compositionPositionEditor';
import { useModals } from '../../general';

export interface CompositionPositionMapFieldValuePosition extends CompositionPositionEditorFields {
  player: Player;
}

export interface CompositionPositionMapFieldProps
  extends FieldComponentProps<CompositionPositionMapFieldValuePosition[]> {
  compositionSetting?: CompositionSetting;
  getPositionPlayers?: GetPositionPlayersFunction;
  boosterFactories?: BoosterFactory[];
  theme?: CompositionPositionMapTheme;
  readonly?: boolean;
}

export function CompositionPositionMapField({
  compositionSetting,
  getPositionPlayers,
  boosterFactories,
  onChange,
  value,
  theme,
  readonly = false,
}: CompositionPositionMapFieldProps): ReactElement {
  const { pushModal } = useModals();

  const changePosition = useCallback(
    (position: CompositionPositionEditorFields) => {
      let nextValue: CompositionPositionMapFieldValuePosition[] = value
        ? JSON.parse(JSON.stringify(value))
        : [];

      if (!nextValue && position.player) {
        nextValue = [position as CompositionPositionMapFieldValuePosition];
      } else if (nextValue) {
        const index = nextValue.findIndex(
          (_position: CompositionPositionMapFieldValuePosition) => _position.id === position.id,
        );

        if (index !== -1) {
          if (position.player) {
            nextValue[index] = position as CompositionPositionMapFieldValuePosition;
          } else {
            nextValue.splice(index, 1);
          }
        } else if (position.player) {
          nextValue.push(position as CompositionPositionMapFieldValuePosition);
        }
      }

      onChange(nextValue);
    },
    [onChange, value],
  );

  const onPositionClick = useCallback(
    async (position: CompositionSettingPosition) => {
      const positionValue = value?.find((_position) => _position.id === position.id);

      pushModal({
        type: 'overlay',
        component: ({ dismissModal }) => (
          <CompositionPositionEditor
            initialValues={{ id: position.id, ...positionValue }}
            getPositionPlayers={getPositionPlayers}
            compositionSettingPosition={position}
            compositionSetting={compositionSetting}
            boosterFactories={boosterFactories}
            onSubmit={(_position) => {
              changePosition(_position);
              dismissModal();
            }}
          />
        ),
      });
    },
    [boosterFactories, changePosition, compositionSetting, getPositionPlayers, pushModal, value],
  );

  return (
    <div className="goatim-ui-composition-positions-map-field">
      <CompositionPositionMap
        compositionSetting={compositionSetting}
        positions={value}
        onPositionClick={!readonly ? onPositionClick : undefined}
        theme={theme}
      />
    </div>
  );
}
