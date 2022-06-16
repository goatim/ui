import { ChangeEvent, ReactElement, useCallback } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import {
  CompositionPosition,
  Player,
  CompositionSetting,
  CompositionSettingPosition,
} from '@fridaygame/client';
import { useModals } from '@cezembre/fronts';
import CompositionPositionList, { CompositionPositionListTheme } from './compositionPositionList';
import PositionPlayerSelector from './positionPlayerSelector';
import { GetPositionPlayersFunction } from './compositionPositionMapField';

export interface CompositionPositionListFieldValuePosition {
  id: string;
  player: Player;
}

export interface CompositionPositionListFieldValue {
  goalkeeper?: Player;
  positions?: CompositionPositionListFieldValuePosition[];
}

export interface Props extends FieldComponentProps<CompositionPositionListFieldValue> {
  compositionSetting?: CompositionSetting;
  getPositionPlayers?: GetPositionPlayersFunction;
  theme?: CompositionPositionListTheme;
}

export default function CompositionPositionListField({
  compositionSetting,
  getPositionPlayers,
  form,
  onChange,
  value,
  theme,
}: Props): ReactElement {
  const { pushModal } = useModals();

  const changePositionPlayer = useCallback(
    (
      position: CompositionSettingPosition | string,
      player?: ChangeEvent<{ value: Player | undefined }> | Player,
    ) => {
      const resolvedPlayer: Player | undefined =
        typeof player === 'object' && player?.target
          ? (player as ChangeEvent<{ value: Player | undefined }>).target.value
          : (player as Player | undefined);

      const resolvedPosition: string = typeof position === 'object' ? position.id : position;

      const nextValue: CompositionPositionListFieldValue = value
        ? JSON.parse(JSON.stringify(value))
        : {};

      if (position === 'goalkeeper') {
        nextValue.goalkeeper = resolvedPlayer;
      } else if (!nextValue.positions && resolvedPlayer) {
        nextValue.positions = [{ id: resolvedPosition, player: resolvedPlayer }];
      } else if (nextValue.positions) {
        const index = nextValue.positions.findIndex(
          (_position: CompositionPosition) => _position.id === resolvedPosition,
        );

        if (index !== -1) {
          if (resolvedPlayer) {
            nextValue.positions[index] = { id: resolvedPosition, player: resolvedPlayer };
          } else {
            nextValue.positions.splice(index, 1);
          }
        } else if (resolvedPlayer) {
          nextValue.positions.push({ id: resolvedPosition, player: resolvedPlayer });
        }
      }

      onChange(nextValue);
    },
    [onChange, value],
  );

  const onPositionClick = useCallback(
    async (position: CompositionSettingPosition | string) => {
      let players: Player[] | undefined;

      if (getPositionPlayers) {
        const res = getPositionPlayers(typeof position === 'object' ? position.id : position);
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

      let playerValue: Player | undefined;

      const resolvedPosition: string = typeof position === 'object' ? position.id : position;

      if (resolvedPosition === 'goalkeeper') {
        playerValue = value?.goalkeeper;
      } else {
        playerValue = value?.positions?.find(
          (_position) => _position.id === resolvedPosition,
        )?.player;
      }

      pushModal({
        component: ({ dismissModal }) => (
          <div className="friday-ui-composition-positions-list-field-position-player-selector">
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
          </div>
        ),
      });
    },
    [
      changePositionPlayer,
      compositionSetting?.name,
      form,
      getPositionPlayers,
      pushModal,
      value?.goalkeeper,
      value?.positions,
    ],
  );

  return (
    <div className="friday-ui-composition-positions-list-field">
      <CompositionPositionList
        composition={value}
        onPositionClick={onPositionClick}
        theme={theme}
      />
    </div>
  );
}
