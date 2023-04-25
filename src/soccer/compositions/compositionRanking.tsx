import { MouseEvent, ReactElement } from 'react';
import { Composition } from '@goatim/client';
import { UrlObject } from 'url';
import { CompositionThumbnail } from './compositionThumbnail';
import { Icon } from '../../general';

export type CompositionRankingTheme = 'dark' | 'light';

export interface CompositionRankingProps {
  compositions?: Composition[];
  compositionHref?: string | UrlObject;
  onClickComposition?: (composition: Composition, event: MouseEvent<HTMLButtonElement>) => unknown;
  pinned?: Composition;
  theme?: CompositionRankingTheme;
}

export function CompositionRanking({
  compositions,
  compositionHref,
  onClickComposition,
  pinned,
  theme = 'dark',
}: CompositionRankingProps): ReactElement {
  if (!compositions?.length) {
    return (
      <div className={`goatim-ui-composition-ranking-empty ${theme}`}>
        <Icon name="meh" size={25} />
        <span>Aucun participant</span>
      </div>
    );
  }

  return (
    <div className={`goatim-ui-composition-ranking ${theme}`}>
      <div className="compositions">
        {compositions.map((composition) => (
          <div className="composition" key={composition.id}>
            <CompositionThumbnail
              composition={composition}
              theme={theme}
              href={compositionHref}
              onClick={
                onClickComposition ? (event) => onClickComposition(composition, event) : undefined
              }
              showScore
            />
          </div>
        ))}
      </div>
      {pinned ? (
        <div className="pinned">
          <CompositionThumbnail
            composition={pinned}
            theme={theme}
            href={compositionHref}
            onClick={onClickComposition ? (event) => onClickComposition(pinned, event) : undefined}
            showScore
            showGains
          />
        </div>
      ) : null}
    </div>
  );
}
