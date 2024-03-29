import { ReactElement } from 'react';
import { Composition, Match } from '@goatim/client';
import { DateTimeThumbnail } from '../../general/dateTimeThumbnail';
import { MatchLive } from './matchLive';
import { MatchParticipants } from './matchParticipants';
import { MatchAction, MatchActionProps } from './matchAction';

export interface MatchThumbnailProps extends Omit<MatchActionProps, 'status'> {
  match: Match;
  podium?: Composition[];
}

export function MatchThumbnail({
  match,
  podium,
  onCompositionClick,
  compositionHref,
  compositionTarget,
  onFeedClick,
  feedHref,
  feedTarget,
}: MatchThumbnailProps): ReactElement {
  return (
    <div className="goatim-ui-match-thumbnail">
      <div className="header">
        {/* <MatchHeader match={match} /> */}
        <div className="period">
          <DateTimeThumbnail label="Début" dateTime={match.beginning} theme="transparent-dark" />
          <DateTimeThumbnail
            label="Fin"
            align="right"
            dateTime={match.end}
            theme="transparent-dark"
          />
        </div>
      </div>

      <div className="live">
        <MatchLive match={match} />
      </div>

      <div className="tags">
        <MatchParticipants nb_participants={match.nb_participants} />
      </div>

      <div className="action">
        <MatchAction
          status={match.status}
          onCompositionClick={onCompositionClick}
          compositionHref={compositionHref}
          compositionTarget={compositionTarget}
          onFeedClick={onFeedClick}
          feedHref={feedHref}
          feedTarget={feedTarget}
        />
      </div>
    </div>
  );
}
