import { Composition, CompositionList, GetCompositionsQuery } from '@goatim/client';
import { useElementInfiniteScroll } from '@cezembre/fronts';
import isPromise from 'is-promise';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { UrlObject } from 'url';
import { CompositionRanking } from '../../soccer';

export interface GameParticipantListProps {
  firstCompositions?: CompositionList;
  compositionPending?: boolean;
  getCompositions?: (query?: GetCompositionsQuery) => CompositionList | Promise<CompositionList>;
  compositionHref?: string | UrlObject;
  onClickComposition?: (composition: Composition, event: MouseEvent<HTMLButtonElement>) => unknown;
}

export function GameParticipantList({
  firstCompositions,
  compositionPending = false,
  getCompositions,
  compositionHref,
  onClickComposition, // TODO handle on click participant
}: GameParticipantListProps): ReactElement {
  const [loadedCompositions, setLoadedCompositions] = useState<CompositionList[]>([]);
  const [loadingCompositions, setLoadingCompositions] = useState<boolean>(compositionPending);

  const compositions = useMemo<CompositionList[]>(() => {
    return firstCompositions ? [firstCompositions, ...loadedCompositions] : loadedCompositions;
  }, [firstCompositions, loadedCompositions]);

  const loadNextCompositionsPage = useCallback(async () => {
    if (compositions.length && getCompositions) {
      const { next_page: nextPage } = compositions[compositions.length - 1];
      if (nextPage) {
        const res = getCompositions({ page: nextPage });
        if (isPromise(res)) {
          try {
            setLoadingCompositions(true);
            const nextCompositions = await res;
            setLoadedCompositions((c) => [...c, nextCompositions]);
          } catch (error) {
            // TODO : Handle
          } finally {
            setLoadingCompositions(false);
          }
        } else {
          setLoadedCompositions((c) => [...c, res as CompositionList]);
        }
      }
    }
  }, [compositions, getCompositions]);

  const { ref: rankingContainer } = useElementInfiniteScroll<HTMLDivElement>({
    loadNextPage: loadNextCompositionsPage,
  });

  return (
    <div className="goatim-ui-game-participants-list">
      <div className="header">
        <span className="title">Participants</span>
      </div>

      {compositions.length ? (
        <div className="ranking" ref={rankingContainer}>
          {compositions.map((compositionList) => (
            <div key={compositionList.page} className="composition-list">
              <CompositionRanking
                compositions={compositionList.compositions}
                compositionHref={compositionHref}
                onClickComposition={onClickComposition}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
