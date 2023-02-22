import { MouseEvent, ReactElement } from 'react';
import { Composition } from '@fridaygame/client';
import { To } from 'react-router';
import { CompositionThumbnail } from './compositionThumbnail';
import { Icon } from '../../general';

export type CompositionRankingTheme = 'dark' | 'light';

export interface CompositionRankingProps {
  compositions?: Composition[];
  toComposition?: To;
  onClickComposition?: (composition: Composition, event: MouseEvent<HTMLButtonElement>) => unknown;
  pinned?: Composition;
  theme?: CompositionRankingTheme;
}

export function CompositionRanking({
  compositions,
  toComposition,
  onClickComposition,
  pinned,
  theme = 'dark',
}: CompositionRankingProps): ReactElement {
  if (!compositions?.length) {
    return (
      <div className={`friday-ui-composition-ranking-empty ${theme}`}>
        <Icon name="meh" size={25} />
        <span>Aucun participant</span>
      </div>
    );
  }

  return (
    <div className={`friday-ui-composition-ranking ${theme}`}>
      <div className="compositions">
        {compositions.map((composition) => (
          <div className="composition" key={composition.id}>
            <CompositionThumbnail
              composition={composition}
              theme={theme}
              to={toComposition}
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
            to={toComposition}
            onClick={onClickComposition ? (event) => onClickComposition(pinned, event) : undefined}
            showScore
            showDividendsGains
          />
        </div>
      ) : null}
    </div>
  );
}
