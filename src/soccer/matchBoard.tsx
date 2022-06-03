import { MouseEvent, ReactElement } from 'react';
import { Match, PhysicalEvent, Wallet } from '@fridaygame/client';
import { To } from 'react-router';
import WalletRanking from '../market/walletRanking';
import MatchStatusThumbnail, { useMatchLiveStatus } from './matchStatusThumbnail';
import PhysicalEventList from './physicalEventList';
import Button from '../general/button';

export type MatchBoardTheme = 'default' | 'light';

export interface Props {
  match: Match;
  theme?: MatchBoardTheme;
  toComposition?: To;
  onClickComposition?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  physicalEvents?: PhysicalEvent[];
}

export default function MatchBoard({
  match,
  theme = 'default',
  toComposition,
  onClickComposition,
  physicalEvents,
}: Props): ReactElement {
  const liveStatus = useMatchLiveStatus(match.beginning, match.end, match.status);

  return (
    <div className={`friday-ui-match-board ${theme} ${liveStatus}`}>
      <div className="participants">
        <div className="header">
          <span className="title">Participants</span>
        </div>
        <div className="ranking">
          <WalletRanking
            wallets={match.participants?.wallets}
            theme={theme}
            positionExtractor={({ position }) => position || 0}
            variationExtractor={({ total_gains }) => total_gains || 0}
          />
        </div>
        {toComposition || onClickComposition ? (
          <div className="action">
            <Button to={toComposition} onClick={onClickComposition} shape="filled">
              Faire ma composition
            </Button>
          </div>
        ) : null}
      </div>

      <div className="game">
        {liveStatus === 'planned' || liveStatus === 'cancelled' ? (
          <div className="beginning">
            <MatchStatusThumbnail
              status={match.status}
              beginning={match.beginning}
              end={match.end}
              theme={theme}
            />
          </div>
        ) : null}

        <div className="feed">
          {physicalEvents?.length ? (
            <div className="physical-events">
              <PhysicalEventList physicalEvents={physicalEvents} theme={theme} />
            </div>
          ) : null}
        </div>

        {liveStatus === 'ongoing' || liveStatus === 'passed' ? (
          <div className="beginning">
            <MatchStatusThumbnail
              status={match.status}
              beginning={match.beginning}
              end={match.end}
              theme={theme}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
