import { ReactElement } from 'react';
import { Composition } from '@fridaygame/client';
import CompositionThumbnail from './compositionThumbnail';
import Icon from '../../general/icon';

export type CompositionRankingTheme = 'dark' | 'light';

export interface Props {
  compositions?: Composition[];
  pinned?: Composition;
  theme?: CompositionRankingTheme;
}

export default function CompositionRanking({
  compositions,
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
            <CompositionThumbnail composition={composition} theme={theme} />
          </div>
        ))}
      </div>
      {pinned ? (
        <div className="pinned">
          <CompositionThumbnail composition={pinned} theme={theme} />
        </div>
      ) : null}
    </div>
  );
}
