import { ReactElement } from 'react';
import { Composition, Post } from '@goatim/client';
import { MatchSummary } from '../../soccer';

export interface MatchSummaryPostProps {
  post: Post<'match_summary'>;
}

export function MatchSummaryPost({ post }: MatchSummaryPostProps): ReactElement {
  return (
    <div className="goatim-ui-match-summary-post">
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
