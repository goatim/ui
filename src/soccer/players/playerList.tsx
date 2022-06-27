import { MouseEvent, ReactElement } from 'react';
import { Player } from '@fridaygame/client';
import { To } from 'react-router';
import PlayerThumbnail from './playerThumbnail';

export interface Props {
  players?: Player[];
  playerOnClick?: (player: Player, event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  playerTo?: (player: Player) => To;
}

export default function PlayerList({ players, playerOnClick, playerTo }: Props): ReactElement {
  if (!players?.length) {
    return <span>Aucun joueur</span>;
  }

  return (
    <div className="friday-ui-player-list">
      {players.map((player) => (
        <div className="player" key={player.id}>
          <PlayerThumbnail
            player={player}
            onClick={playerOnClick ? (event) => playerOnClick(player, event) : undefined}
            to={playerTo ? playerTo(player) : undefined}
          />
        </div>
      ))}
    </div>
  );
}
