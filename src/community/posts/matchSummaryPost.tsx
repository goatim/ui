import { ReactElement } from 'react';
import { Composition, Post } from '@fridaygame/client';
import MatchSummary from '../../soccer/matches/matchSummary';

export interface Props {
  post: Post<'match_summary'>;
}

export default function MatchSummaryPost({ post }: Props): ReactElement {
  return (
    <div className="friday-ui-match-summary-post">
      {post.payload?.match && typeof post.payload.match === 'object' ? (
        <div className="match-summary">
          <MatchSummary
            match={post.payload.match}
            podium={
              post.payload.podium && typeof post.payload.podium[0] === 'object'
                ? (post.payload.podium as Composition[])
                : undefined
            }
            self={typeof post.payload.self === 'object' ? post.payload.self : undefined}
          />
        </div>
      ) : null}
    </div>
  );
}
