import { ReactElement, useMemo } from 'react';
import { Portfolio, formatPlayerName } from '@goatim/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { ClubIcon } from '../../soccer/clubs';

export interface PlayerCardProps extends WrapperProps {
  item: Portfolio;
}

export function PlayerCard({ item, onClick, href, target }: PlayerCardProps): ReactElement {
  const asset = useMemo(() => (typeof item?.asset === 'object' ? item.asset : null), [item]);
  const player = useMemo(() => (typeof asset?.player === 'object' ? asset.player : null), [asset]);
  const club = useMemo(() => (typeof player?.club === 'object' ? player.club : null), [player]);

  return (
    <Wrapper className="goatim-ui-player-card card" onClick={onClick} href={href} target={target}>
      <div className="club-logo">{club && <ClubIcon icon={club.icon} />}</div>
      <div className="player-name">
        {player?.first_name || player?.last_name
          ? formatPlayerName(player?.first_name, player?.last_name, 'full')
          : null}
      </div>
      <div className="club-name">{club?.name}</div>
      <div className="player-position">{player?.resolved_short_position}</div>
      <div className="player-price">{item?.buy_price} GTC</div>
      <div className="player-xpg">?? XPg</div>
      <div className="player-evol">??</div>
      <div className="nb-share">x{item.nb_shares}</div>
    </Wrapper>
  );
}
