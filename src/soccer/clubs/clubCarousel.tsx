import { MouseEvent, ReactElement, useEffect, useState } from 'react';
import { Club } from '@goatim/client';
import { UrlObject } from 'url';
import isPromise from 'is-promise';
import { ClubList } from './clubList';
import { ClubThumbnailShape, ClubThumbnailSize } from './clubThumbnail';

export interface ClubCarouselProps {
  getClubs?: (page: number) => Promise<Club[]> | Club[];
  clubOnClick?: (club: Club, event: MouseEvent<HTMLButtonElement>) => unknown;
  clubHref?: (club: Club) => string | UrlObject;
  size?: ClubThumbnailSize;
  shape?: ClubThumbnailShape;
  columns?: number;
}

export function ClubCarousel({
  getClubs,
  size,
  shape,
  columns,
  clubHref,
  clubOnClick,
}: ClubCarouselProps): ReactElement {
  const [page, setPage] = useState<number>(1);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined | null>();
  const [clubs, setClubs] = useState<Club[] | undefined>();

  useEffect(() => {
    if (getClubs) {
      setError(null);
      const res = getClubs(page);

      if (isPromise(res)) {
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
    <div className="goatim-ui-club-carousel">
      <ClubList
        clubs={clubs}
        shape={shape}
        columns={columns}
        size={size}
        clubHref={clubHref}
        clubOnClick={clubOnClick}
      />
    </div>
  );
}
