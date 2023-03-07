import { ChangeEvent, ReactElement, useCallback } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import {
  CompositionPosition,
  CompositionSetting,
  CompositionSettingPosition,
  Player,
  PlayerPosition,
} from '@goatim/client';
import { CompositionPositionMap, CompositionPositionMapTheme } from './compositionPositionMap';
import { PositionPlayerSelector } from './positionPlayerSelector';
import { useModals } from '../../general';

export interface CompositionPositionMapFieldValuePosition {
  id: string;
  player: Player;
}

export type GetPositionPlayersFunction = (
  position?: PlayerPosition[] | PlayerPosition,
) => Promise<Player[] | undefined> | Player[] | undefined;

export interface CompositionPositionMapFieldProps
  extends FieldComponentProps<CompositionPositionMapFieldValuePosition[]> {
  compositionSetting?: CompositionSetting;
  getPositionPlayers?: GetPositionPlayersFunction;
  theme?: CompositionPositionMapTheme;
  readonly?: boolean;
}

export function CompositionPositionMapField({
  compositionSetting,
  getPositionPlayers,
  form,
  onChange,
  value,
  theme,
  readonly = false,
}: CompositionPositionMapFieldProps): ReactElement {
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

      let nextValue: CompositionPositionMapFieldValuePosition[] = value
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
    async (position: CompositionSettingPosition | 'goalkeeper') => {
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
            position={typeof position === 'object' ? position.name : 'Gardien'}
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
