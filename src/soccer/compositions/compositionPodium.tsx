import { ReactElement, useMemo } from 'react';
import { Composition } from '@goatim/client';
import { WalletThumbnail } from '../../market';
import { Score } from '../../general';

export type CompositionPodiumTheme = 'dark' | 'light';

export interface CompositionPodiumProps {
  compositions?: Composition[];
  theme?: CompositionPodiumTheme;
}

export function CompositionPodium({
  compositions,
  theme = 'dark',
}: CompositionPodiumProps): ReactElement {
  const sortedCompositions = useMemo<Composition[]>(() => {
    const nextCompositions: Composition[] = [];

    if (!compositions) {
      return [];
    }

    if (compositions.length >= 2) {
      nextCompositions.push(compositions[1]);
      nextCompositions.push(compositions[0]);
    }

    if (compositions.length >= 3) {
      nextCompositions.push(compositions[2]);
    }

    return nextCompositions;
  }, [compositions]);

  return (
    <div className={`goatim-ui-composition-podium ${theme}`}>
      {sortedCompositions.map((composition, i) => (
        <div className="composition" key={composition.id}>
          <span className="position">{composition.position}</span>
          {composition.wallet && typeof composition.wallet === 'object' ? (
            <div className="wallet">
              <WalletThumbnail
                wallet={composition.wallet}
                shape="logo"
                pictureOutline="outline-gold"
                size={i % 2 ? 'big' : 'medium'}
                theme={theme}
              />
            </div>
          ) : null}
          <div>
            <Score size="medium" theme="darker">
              {composition.score}
            </Score>
          </div>
        </div>
      ))}
    </div>
  );
}
