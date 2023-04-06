import { ReactElement, useCallback } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import {
  BoosterFactory,
  CompositionSetting,
  CompositionSettingPosition,
  Player,
} from '@goatim/client';
import { CompositionPositionList, CompositionPositionListTheme } from './compositionPositionList';
import {
  CompositionPositionEditor,
  CompositionPositionEditorFields,
  GetPositionPlayersFunction,
} from './compositionPositionEditor';
import { CompositionPositionMapFieldValuePosition } from './compositionPositionMapField';
import { useModals } from '../../general';

export interface CompositionPositionListFieldValuePosition extends CompositionPositionEditorFields {
  player: Player;
}

export interface CompositionPositionListFieldProps
  extends FieldComponentProps<CompositionPositionListFieldValuePosition[]> {
  compositionSetting?: CompositionSetting;
  getPositionPlayers?: GetPositionPlayersFunction;
  boosterFactories?: BoosterFactory[];
  theme?: CompositionPositionListTheme;
  readonly?: boolean;
}

export function CompositionPositionListField({
  compositionSetting,
  getPositionPlayers,
  boosterFactories,
  onChange,
  value,
  theme,
  readonly = false,
}: CompositionPositionListFieldProps): ReactElement {
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

  const onPositionDelete = useCallback(
    (position: CompositionSettingPosition) => {
      changePosition({ id: position.id });
    },
    [changePosition],
  );

  return (
    <div className="goatim-ui-composition-positions-list-field">
      <CompositionPositionList
        positions={value}
        onPositionClick={!readonly ? onPositionClick : undefined}
        onPositionDelete={!readonly ? onPositionDelete : undefined}
        theme={theme}
      />
    </div>
  );
}
