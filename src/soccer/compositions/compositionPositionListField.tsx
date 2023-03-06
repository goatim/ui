import { ChangeEvent, ReactElement, useCallback } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import {
  CompositionPosition,
  CompositionSetting,
  CompositionSettingPosition,
  Player,
} from '@fridaygame/client';
import { CompositionPositionList, CompositionPositionListTheme } from './compositionPositionList';
import { PositionPlayerSelector } from './positionPlayerSelector';
import { GetPositionPlayersFunction } from './compositionPositionMapField';
import { useModals } from '../../general';

export interface CompositionPositionListFieldValuePosition {
  id: string;
  player: Player;
}

export interface CompositionPositionListFieldProps
  extends FieldComponentProps<CompositionPositionListFieldValuePosition[]> {
  compositionSetting?: CompositionSetting;
  getPositionPlayers?: GetPositionPlayersFunction;
  theme?: CompositionPositionListTheme;
  readonly?: boolean;
}

export function CompositionPositionListField({
  compositionSetting,
  getPositionPlayers,
  form,
  onChange,
  value,
  theme,
  readonly = false,
}: CompositionPositionListFieldProps): ReactElement {
  const { pushModal } = useModals();

  const changePositionPlayer = useCallback(
    (
      position: CompositionSettingPosition | string,
      player?: ChangeEvent<{ value: Player | undefined }> | Player,
    ) => {
      const resolvedPlayer: Player | undefined =
        typeof player === 'object' && 'target' in player && player?.target
          ? (player as ChangeEvent<{ value: Player | undefined }>).target.value
          : (player as Player | undefined);

      const resolvedPosition: string = typeof position === 'object' ? position.id : position;

      let nextValue: CompositionPositionListFieldValuePosition[] = value
        ? JSON.parse(JSON.stringify(value))
        : [];

      if (!nextValue && resolvedPlayer) {
        nextValue = [{ id: resolvedPosition, player: resolvedPlayer }];
      } else if (nextValue) {
        const index = nextValue.findIndex(
          (_position: CompositionPosition) => _position.id === resolvedPosition,
        );

        if (index !== -1) {
          if (resolvedPlayer) {
            nextValue[index] = { id: resolvedPosition, player: resolvedPlayer };
          } else {
            nextValue.splice(index, 1);
          }
        } else if (resolvedPlayer) {
          nextValue.push({ id: resolvedPosition, player: resolvedPlayer });
        }
      }

      onChange(nextValue);
    },
    [onChange, value],
  );

  const onPositionClick = useCallback(
    async (position: CompositionSettingPosition) => {
      let players: Player[] | undefined;

      if (getPositionPlayers) {
        const res = getPositionPlayers(typeof position === 'object' ? position.only : position);
        if (
          res &&
          typeof res === 'object' &&
          'then' in res &&
          res.then &&
          typeof res.then === 'function'
        ) {
          players = await res;
        } else {
          players = res as Player[];
        }
      }

      const resolvedPosition: string = typeof position === 'object' ? position.id : position;

      const playerValue = value?.find((_position) => _position.id === resolvedPosition)?.player;

      pushModal({
        type: 'overlay',
        component: ({ dismissModal }) => (
          <PositionPlayerSelector
            players={players}
            value={playerValue}
            position={position.name}
            compositionSetting={compositionSetting?.name}
            onChange={(player) => {
              changePositionPlayer(position, player);
              dismissModal();
            }}
            onFocus={() => undefined}
            onBlur={() => undefined}
            form={form}
          />
        ),
      });
    },
    [changePositionPlayer, compositionSetting?.name, form, getPositionPlayers, pushModal, value],
  );

  const onPositionDelete = useCallback(
    (position: CompositionSettingPosition | string) => {
      changePositionPlayer(position);
    },
    [changePositionPlayer],
  );

  return (
    <div className="friday-ui-composition-positions-list-field">
      <CompositionPositionList
        positions={value}
        onPositionClick={!readonly ? onPositionClick : undefined}
        onPositionDelete={!readonly ? onPositionDelete : undefined}
        theme={theme}
      />
    </div>
  );
}
