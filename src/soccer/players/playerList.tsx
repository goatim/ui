import { MouseEvent, ReactElement } from 'react';
import { Player } from '@goatim/client';
import { UrlObject } from 'url';
import { SoccerPlayerThumbnail, SoccerPlayerThumbnailSize } from './playerThumbnail';

export interface SoccerPlayerListProps {
  players?: Player[];
  size?: SoccerPlayerThumbnailSize;
  playerOnClick?: (player: Player, event: MouseEvent<HTMLButtonElement>) => unknown;
  playerHref?: (player: Player) => string | UrlObject;
}

export function SoccerPlayerList({
  players,
  size,
  playerOnClick,
  playerHref,
}: SoccerPlayerListProps): ReactElement {
  if (!players?.length) {
    return <span>Aucun joueur</span>;
  }

  return (
    <div className="goatim-ui-player-list">
      {players.map((player) => (
        <div className="player" key={player.id}>
          <SoccerPlayerThumbnail
            player={player}
            size={size}
            onClick={playerOnClick ? (event) => playerOnClick(player, event) : undefined}
            href={playerHref ? playerHref(player) : undefined}
          />
        </div>
      ))}
    </div>
  );
}
