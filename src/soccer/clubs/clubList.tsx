import { MouseEvent, ReactElement, useMemo } from 'react';
import { Club } from '@goatim/client';
import { Property } from 'csstype';
import { UrlObject } from 'url';
import { ClubThumbnail, ClubThumbnailShape, ClubThumbnailSize } from './clubThumbnail';

export interface ClubListProps {
  clubs?: Club[];
  columns?: number;
  clubOnClick?: (club: Club, event: MouseEvent<HTMLButtonElement>) => unknown;
  clubHref?: (club: Club) => string | UrlObject;
  size?: ClubThumbnailSize;
  shape?: ClubThumbnailShape;
  showLeagues?: boolean;
}

export function ClubList({
  clubs,
  columns = 3,
  clubOnClick,
  clubHref,
  size = 'medium',
  shape = 'line',
  showLeagues = false,
}: ClubListProps): ReactElement {
  const justifyItems = useMemo<Property.JustifyItems>(() => {
    if (shape === 'logo') {
      return 'center';
    }
    return 'normal';
  }, [shape]);

  return (
    <div
      className="goatim-ui-club-list"
      style={{ gridTemplateColumns: `repeat(${columns}, auto)`, justifyItems }}>
      {clubs ? (
        clubs.map((club) => (
          <div key={club.id} className="club">
            <ClubThumbnail
              club={club}
              onClick={clubOnClick ? (event) => clubOnClick(club, event) : undefined}
              href={clubHref ? clubHref(club) : undefined}
              size={size}
              shape={shape}
              showLeague={showLeagues}
            />
          </div>
        ))
      ) : (
        <span>Aucun club</span>
      )}
    </div>
  );
}
