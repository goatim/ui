import { ReactElement } from 'react';
import { Wrapper } from '@cezembre/fronts';
import { Score } from '../../general';
import {
  GoatimCoinsAmount,
  GoatimCoinsGains,
  WalletPicture,
  WalletThumbnailProps,
} from '../../market';

export interface GameParticipantListItemProps extends WalletThumbnailProps {
  position?: number;
  score?: number;
  coins?: number;
  gains?: number;
}

export function GameParticipantListItem({
  wallet,
  onClick,
  href,
  target,
  position,
  score,
  coins,
  gains,
}: GameParticipantListItemProps): ReactElement {
  if (!wallet || typeof wallet !== 'object') {
    return <div className="goatim-ui-game-participant-list-item" />;
  }
  return (
    <Wrapper
      className="goatim-ui-game-participant-list-item"
      onClick={onClick}
      href={href}
      target={target}>
      <div className="body">
        <WalletPicture wallet={wallet} size="small" />
        <span className="name">{wallet.name || wallet.slug}</span>
        {position ? <span className="position">{position}</span> : null}
        <div className="metrics">
          {typeof score === 'number' ? <Score score={score} /> : null}
          {typeof coins === 'number' ? <GoatimCoinsAmount amount={coins} /> : null}
          {typeof gains === 'number' ? <GoatimCoinsGains gains={gains} /> : null}
        </div>
      </div>
    </Wrapper>
  );
}
