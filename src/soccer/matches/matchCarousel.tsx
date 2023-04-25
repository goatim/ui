import { ReactElement } from 'react';
import { Match } from '@goatim/client';
import { UrlObject } from 'url';
import { MatchThumbnail } from './matchThumbnail';

export type MatchCarouselSize = 'small' | 'medium' | 'big';

export interface MatchCarouselProps {
  matches?: Match[];
  size?: MatchCarouselSize;
  matchCompositionHref?: (match: Match) => string | UrlObject;
  matchFeedHref?: (match: Match) => string | UrlObject;
}

export function MatchCarousel({
  matches,
  size = 'big',
  matchCompositionHref,
  matchFeedHref,
}: MatchCarouselProps): ReactElement {
  return (
    <div className={`goatim-ui-match-carousel ${size}`}>
      <div className="background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 721.41 721.41">
          <path
            fill="#fff"
            d="M360.71,67.67c39.56,0,77.94,7.75,114.06,23.03,34.89,14.76,66.23,35.89,93.15,62.8,26.91,26.91,48.04,58.25,62.8,93.15,15.28,36.13,23.03,74.5,23.03,114.06s-7.75,77.94-23.03,114.06c-14.76,34.89-35.89,66.23-62.8,93.15-26.91,26.91-58.25,48.04-93.15,62.8-36.13,15.28-74.5,23.03-114.06,23.03s-77.94-7.75-114.06-23.03c-34.89-14.76-66.23-35.89-93.15-62.8-26.91-26.91-48.04-58.25-62.8-93.15-15.28-36.13-23.03-74.5-23.03-114.06s7.75-77.94,23.03-114.06c14.76-34.89,35.89-66.23,62.8-93.15,26.91-26.91,58.25-48.04,93.15-62.8,36.13-15.28,74.5-23.03,114.06-23.03m0-2c-162.95,0-295.04,132.09-295.04,295.04s132.09,295.04,295.04,295.04,295.04-132.09,295.04-295.04S523.65,65.67,360.71,65.67h0Z"
          />
          <line x1=".71" y1="720.71" x2="720.71" y2=".71" strokeWidth={2} stroke="#fff" />
        </svg>
      </div>
      <div className="matches">
        {matches?.slice(0, 3).map((match) => (
          <div className="match" key={match.id}>
            <MatchThumbnail
              match={match}
              compositionHref={matchCompositionHref ? matchCompositionHref(match) : undefined}
              feedHref={matchFeedHref ? matchFeedHref(match) : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
