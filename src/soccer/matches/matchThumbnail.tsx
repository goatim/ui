import { ReactElement } from 'react';
import { Match } from '@fridaygame/client';
import DateTimeThumbnail from '../../general/dateTimeThumbnail';
import MatchCreator from './matchCreator';
import MatchStatusThumbnail from './matchStatusThumbnail';
import MatchLive from './matchLive';
import MatchParticipants from './matchParticipants';
import MatchAction, { Props as MatchActionProps } from './matchAction';

export interface Props extends Omit<MatchActionProps, 'status'> {
  match: Match;
}

export default function MatchThumbnail({
  match,
  toComposition,
  onCompositionClick,
  compositionHref,
  compositionTarget,
  toFeed,
  onFeedClick,
  feedHref,
  feedTarget,
}: Props): ReactElement {
  return (
    <div className="friday-ui-match-thumbnail">
      <div className="header">
        <div className="status">
          <MatchStatusThumbnail status={match.status} />
        </div>
        <span className="title">{match.title}</span>
        {match.creator && typeof match.creator === 'object' ? (
          <div className="creator">
            <MatchCreator creator={match.creator} />
          </div>
        ) : null}
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
          toComposition={toComposition}
          onCompositionClick={onCompositionClick}
          compositionHref={compositionHref}
          compositionTarget={compositionTarget}
          toFeed={toFeed}
          onFeedClick={onFeedClick}
          feedHref={feedHref}
          feedTarget={feedTarget}
        />
      </div>
    </div>
  );
}
