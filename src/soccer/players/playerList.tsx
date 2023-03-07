import { MouseEvent, ReactElement } from 'react';
import { Player } from '@goatim/client';
import { To } from 'react-router';
import { PlayerThumbnail, PlayerThumbnailSize } from './playerThumbnail';

export interface PlayerListProps {
  players?: Player[];
  size?: PlayerThumbnailSize;
  playerOnClick?: (player: Player, event: MouseEvent<HTMLButtonElement>) => unknown;
  playerTo?: (player: Player) => To;
}

export function PlayerList({
  players,
  size,
  playerOnClick,
  playerTo,
}: PlayerListProps): ReactElement {
  if (!players?.length) {
    return <span>Aucun joueur</span>;
  }

  return (
    <div className="goatim-ui-player-list">
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
