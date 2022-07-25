import { ReactElement, MouseEvent } from 'react';
import { To } from 'react-router';
import { Club } from '@fridaygame/client';
import ClubThumbnail from './clubThumbnail';

export interface Props {
  clubs?: Club[];
  columns?: number;
  clubOnClick?: (club: Club, event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  clubTo?: (club: Club) => To;
}

export default function ClubList({ clubs, columns = 3, clubOnClick, clubTo }: Props): ReactElement {
  return (
    <div
      className="friday-ui-club-list"
      style={{ gridTemplateColumns: `repeat(${columns}, auto)` }}>
      {clubs ? (
        clubs.map((club) => (
          <div key={club.id} className="club">
            <ClubThumbnail
              club={club}
              onClick={clubOnClick ? (event) => clubOnClick(club, event) : undefined}
              to={clubTo ? clubTo(club) : undefined}
            />
          </div>
        ))
      ) : (
        <span>Aucun club</span>
      )}
    </div>
  );
}
