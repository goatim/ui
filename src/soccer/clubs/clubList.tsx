import { ReactElement, MouseEvent, useMemo } from 'react';
import { To } from 'react-router';
import { Club } from '@fridaygame/client';
import { Property } from 'csstype';
import ClubThumbnail, { ClubThumbnailDisposition, ClubThumbnailSize } from './clubThumbnail';
import JustifyItems = Property.JustifyItems;

export interface Props {
  clubs?: Club[];
  columns?: number;
  clubOnClick?: (club: Club, event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  clubTo?: (club: Club) => To;
  size?: ClubThumbnailSize;
  disposition?: ClubThumbnailDisposition;
  showLeagues?: boolean;
}

export default function ClubList({
  clubs,
  columns = 3,
  clubOnClick,
  clubTo,
  size = 'medium',
  disposition = 'inline',
  showLeagues = false,
}: Props): ReactElement {
  const justifyItems = useMemo<JustifyItems>(() => {
    if (disposition === 'logo') {
      return 'center';
    }
    return 'normal';
  }, [disposition]);
  return (
    <div
      className="friday-ui-club-list"
      style={{ gridTemplateColumns: `repeat(${columns}, auto)`, justifyItems }}>
      {clubs ? (
        clubs.map((club) => (
          <div key={club.id} className="club">
            <ClubThumbnail
              club={club}
              onClick={clubOnClick ? (event) => clubOnClick(club, event) : undefined}
              to={clubTo ? clubTo(club) : undefined}
              size={size}
              disposition={disposition}
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
