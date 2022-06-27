import { MouseEvent, ReactElement } from 'react';
import { Match, PhysicalEvent } from '@fridaygame/client';
import { To } from 'react-router';
import MatchStatusThumbnail, { useMatchLiveStatus } from './matchStatusThumbnail';
import PhysicalEventList from '../physicalEvents/physicalEventList';
import Button from '../../general/button';
import CompositionRanking from '../compositions/compositionRanking';

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
          <CompositionRanking compositions={match.compositions?.compositions} theme={theme} />
        </div>
        {(toComposition || onClickComposition) && liveStatus === 'planned' ? (
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
