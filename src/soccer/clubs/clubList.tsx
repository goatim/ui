import { ReactElement, MouseEvent, useMemo } from 'react';
import { To } from 'react-router';
import { Club } from '@fridaygame/client';
import { Property } from 'csstype';
import ClubThumbnail, {
  ClubThumbnailDisposition,
  ClubThumbnailShape,
  ClubThumbnailSize,
} from './clubThumbnail';

export interface Props {
  clubs?: Club[];
  columns?: number;
  clubOnClick?: (club: Club, event: MouseEvent<HTMLButtonElement>) => unknown;
  clubTo?: (club: Club) => To;
  size?: ClubThumbnailSize;
  disposition?: ClubThumbnailDisposition;
  shape?: ClubThumbnailShape;
  showLeagues?: boolean;
}

export default function ClubList({
  clubs,
  columns = 3,
  clubOnClick,
  clubTo,
  size = 'medium',
  disposition = 'inline',
  shape = 'text',
  showLeagues = false,
}: Props): ReactElement {
  const justifyItems = useMemo<Property.JustifyItems>(() => {
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
