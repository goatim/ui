import { ReactElement } from 'react';
import { Match, Wallet } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import DateTimeThumbnail from '../../general/dateTimeThumbnail';
import MatchCreator from './matchCreator';
import WalletList from '../../market/wallets/walletList';
import MatchStatusThumbnail from './matchStatusThumbnail';
import MatchIcon from './matchIcon';

export interface Props extends WrapperProps {
  match: Match;
  participants?: Wallet[];
}

export default function MatchThumbnail({
  match,
  participants,
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  return (
    <Wrapper
      className="friday-ui-match-thumbnail"
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      <div className="icon">
        <MatchIcon icon={match.icon} size="big" />
      </div>

      <div className="container">
        <div className="body">
          <div className="header">
            <DateTimeThumbnail label="Début" dateTime={match.beginning} theme="transparent-light" />

            <div className="infos">
              <span className="title">{match.title}</span>
              {match.creator && typeof match.creator === 'object' ? (
                <div className="creator">
                  <MatchCreator
                    creator={match.creator}
                    total_participants={total_participants}
                    theme="light"
                  />
                </div>
              ) : null}
            </div>

            <DateTimeThumbnail
              label="Fin"
              align="right"
              dateTime={match.end}
              theme="transparent-light"
            />
          </div>

          {participants?.length ? (
            <div className="participants">
              <WalletList wallets={participants} total={total_participants} theme="light" />
            </div>
          ) : null}
        </div>

        <MatchStatusThumbnail
          status={match.status}
          beginning={match.beginning}
          end={match.end}
          theme="light"
        />
      </div>
    </Wrapper>
  );
}
