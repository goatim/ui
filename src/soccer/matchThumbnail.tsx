import { MouseEvent, ReactElement } from 'react';
import { Match } from '@fridaygame/client';
import Date from '../general/date';
import MatchCreatorThumbnail from './matchCreatorThumbnail';
import Icon from '../general/icon';
import WalletList from '../market/walletList';
import Button from '../general/button';
import MatchStatusThumbnail from './matchStatusThumbnail';

export interface Props {
  match: Match;
  onClickAction?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  actionLabel?: string;
}

export default function MatchThumbnail({ match, onClickAction, actionLabel }: Props): ReactElement {
  return (
    <div className="friday-ui-match-thumbnail">
      <div className="icon">
        {match.icon ? (
          <img src={match.icon.medium_url} alt={`${match.name}`} />
        ) : (
          <Icon name="award" size={50} />
        )}
      </div>

      <div className="body">
        <div className="header">
          <Date label="Début" date={match.start} />

          <div className="infos">
            <span className="title">{match.title}</span>
            {match.creator && typeof match.creator === 'object' ? (
              <div className="creator">
                <MatchCreatorThumbnail
                  creator={match.creator}
                  nb_participants={match.nb_participants}
                />
              </div>
            ) : null}
          </div>

          <Date label="Fin" align="right" date={match.end} />
        </div>

        {match.participants?.length ? (
          <div className="participants">
            <WalletList wallets={match.participants} total={match.nb_participants} />
          </div>
        ) : null}

        {onClickAction ? (
          <div className="action">
            <Button onClick={onClickAction} shape="filled">
              {actionLabel || 'Voir le match'}
            </Button>
          </div>
        ) : null}
      </div>
      <div className="status">
        <MatchStatusThumbnail status={match.status} start={match.start} end={match.end} />
      </div>
    </div>
  );
}
