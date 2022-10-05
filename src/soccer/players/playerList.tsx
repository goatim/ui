import { MouseEvent, ReactElement } from 'react';
import { Player } from '@fridaygame/client';
import { To } from 'react-router';
import PlayerThumbnail, { PlayerThumbnailSize } from './playerThumbnail';

export interface Props {
  players?: Player[];
  size?: PlayerThumbnailSize;
  playerOnClick?: (player: Player, event: MouseEvent<HTMLButtonElement>) => unknown;
  playerTo?: (player: Player) => To;
}

export default function PlayerList({
  players,
  size,
  playerOnClick,
  playerTo,
}: Props): ReactElement {
  if (!players?.length) {
    return <span>Aucun joueur</span>;
  }

  return (
    <div className="friday-ui-player-list">
      {players.map((player) => (
        <div className="player" key={player.id}>
          <PlayerThumbnail
            player={player}
            size={size}
            onClick={playerOnClick ? (event) => playerOnClick(player, event) : undefined}
            to={playerTo ? playerTo(player) : undefined}
          />
        </div>
      ))}
    </div>
  );
}
