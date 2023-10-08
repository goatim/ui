import { ReactElement, useMemo } from 'react';
import { formatPercentage, formatPlayerName, Player } from '@goatim/client';

export type PlayerProfileSize = 'small' | 'big';

export interface PlayerProfileProps {
  player?: Player;
  size?: PlayerProfileSize;
}

export function PlayerProfile({ player, size = 'big' }: PlayerProfileProps): ReactElement {
  const backgroundColor = useMemo<string | undefined>(() => {
    if (player?.club && typeof player.club === 'object') {
      return player.club.primary_color;
    }
    return undefined;
  }, [player?.club]);

  return (
    <div className={`goatim-ui-player-profile ${size}`} style={{ backgroundColor }}>
      <div className="body">
        <h2>Fiche joueur</h2>
        <h1>{formatPlayerName(player?.first_name, player?.last_name, 'full')}</h1>

        <div className="metrics">
          {player?.performance_index !== undefined ? (
            <div className="metric">
              <span className="label">Indice de performance</span>
              <span className="data">{formatPercentage(player.performance_index, 0)}</span>
            </div>
          ) : null}
          {player?.tenure_rate !== undefined ? (
            <div className="metric">
              <span className="label">Taux de titularisation</span>
              <span className="data">{formatPercentage(player.tenure_rate, 0)}</span>
            </div>
          ) : null}
        </div>

        {player?.description ? (
          <div className="description">
            <span className="label">Palmarès</span>
            <p>{player.description}</p>
          </div>
        ) : null}
      </div>
      {typeof player?.club === 'object' && player.club.icon?.large_url ? (
        <img src={player.club.icon.large_url} alt={player.club.name} />
      ) : null}
    </div>
  );
}
