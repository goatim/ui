import { ReactElement } from 'react';
import { Composition, Match } from '@fridaygame/client';
import DateTimeThumbnail from '../../general/dateTimeThumbnail';
import MatchLive from './matchLive';
import MatchParticipants from './matchParticipants';
import MatchAction, { Props as MatchActionProps } from './matchAction';
import MatchHeader from './matchHeader';

export interface Props extends Omit<MatchActionProps, 'status'> {
  match: Match;
  podium?: Composition[];
}

export default function MatchThumbnail({
  match,
  podium,
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
        <MatchHeader match={match} />
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
