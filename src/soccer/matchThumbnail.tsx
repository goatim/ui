import { MouseEvent, ReactElement } from 'react';
import { Match, Wallet } from '@fridaygame/client';
import { To } from 'react-router';
import Date from '../general/date';
import MatchCreator from './matchCreator';
import WalletList from '../market/walletList';
import MatchStatusThumbnail from './matchStatusThumbnail';
import MatchIcon from './matchIcon';

export interface Props {
  match: Match;
  toComposition?: To;
  onClickComposition?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  toMatch?: To;
  onClickMatch?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
}

export default function MatchThumbnail({
  match,
  toComposition,
  onClickComposition,
  toMatch,
  onClickMatch,
}: Props): ReactElement {
  return (
    <div className="friday-ui-match-thumbnail">
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
          toComposition={toComposition}
          onClickComposition={onClickComposition}
          toMatch={toMatch}
          onClickMatch={onClickMatch}
          theme="light"
        />
      </div>
    </div>
  );
}
