import { MouseEvent, ReactElement } from 'react';
import { Composition } from '@fridaygame/client';
import { To } from 'react-router';
import CompositionThumbnail from './compositionThumbnail';
import Icon from '../../general/icon';

export type CompositionRankingTheme = 'dark' | 'light';

export interface Props {
  compositions?: Composition[];
  toComposition?: To;
  onClickComposition?: (
    composition: Composition,
    event: MouseEvent<HTMLButtonElement>,
  ) => Promise<void> | void;
  pinned?: Composition;
  theme?: CompositionRankingTheme;
}

export default function CompositionRanking({
  compositions,
  toComposition,
  onClickComposition,
  pinned,
  theme = 'dark',
}: Props): ReactElement {
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
          />
        </div>
      ) : null}
    </div>
  );
}
