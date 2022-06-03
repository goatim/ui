import { ReactElement } from 'react';
import { Match, Wallet } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import Date from '../general/date';
import MatchCreator from './matchCreator';
import WalletList from '../market/walletList';
import MatchStatusThumbnail from './matchStatusThumbnail';
import MatchIcon from './matchIcon';

export interface Props extends WrapperProps {
  match: Match;
}

export default function MatchThumbnail({ match, to, onClick, href, target }: Props): ReactElement {
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
            <Date label="Début" date={match.beginning} theme="light" />

            <div className="infos">
              <span className="title">{match.title}</span>
              {match.creator && typeof match.creator === 'object' ? (
                <div className="creator">
                  <MatchCreator
                    creator={match.creator}
                    total_compositions={match.compositions?.total}
                    theme="light"
                  />
                </div>
              ) : null}
            </div>

            <Date label="Fin" align="right" date={match.end} theme="light" />
          </div>

          {match.compositions?.compositions?.length ? (
            <div className="compositions">
              <WalletList
                wallets={
                  match.compositions.compositions
                    ?.map((composition) => composition.wallet)
                    .filter((wallet) => wallet && typeof wallet === 'object') as Wallet[]
                }
                total={match.compositions.total}
                theme="light"
              />
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
