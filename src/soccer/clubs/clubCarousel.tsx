import { MouseEvent, ReactElement, useEffect, useState } from 'react';
import { Club } from '@fridaygame/client';
import { To } from 'react-router';
import ClubList from './clubList';
import { ClubThumbnailShape, ClubThumbnailSize } from './clubThumbnail';

export interface Props {
  getClubs?: (page: number) => Promise<Club[]> | Club[];
  clubOnClick?: (club: Club, event: MouseEvent<HTMLButtonElement>) => unknown;
  clubTo?: (club: Club) => To;
  size?: ClubThumbnailSize;
  shape?: ClubThumbnailShape;
  columns?: number;
}

export default function ClubCarousel({
  getClubs,
  size,
  shape,
  columns,
  clubTo,
  clubOnClick,
}: Props): ReactElement {
  const [page, setPage] = useState<number>(0);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined | null>();
  const [clubs, setClubs] = useState<Club[] | undefined>();

  useEffect(() => {
    if (getClubs) {
      setError(null);
      const res = getClubs(page);

      if ('then' in res && res.then && typeof res.then === 'function') {
        (async () => {
          setPending(true);
          try {
            setClubs(await res);
          } catch (e) {
            setError(e as Error);
          } finally {
            setPending(false);
          }
        })();
      } else {
        setClubs(res as Club[]);
      }
    }
  }, [getClubs, page]);

  return (
    <div className="friday-ui-club-carousel">
      <ClubList
        clubs={clubs}
        shape={shape}
        columns={columns}
        size={size}
        clubTo={clubTo}
        clubOnClick={clubOnClick}
      />
    </div>
  );
}
