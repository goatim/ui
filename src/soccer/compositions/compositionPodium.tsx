import { ReactElement, useMemo } from 'react';
import { Composition } from '@fridaygame/client';
import WalletThumbnail from '../../market/wallets/walletThumbnail';
import Score from '../../general/score';
import FridayCoinsVariation from '../../market/fridayCoinsVariation';

export interface Props {
  compositions?: Composition[];
}

export default function CompositionPodium({ compositions }: Props): ReactElement {
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
    <div className="friday-ui-composition-podium">
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
              />
            </div>
          ) : null}
          <div>
            <Score size="medium" theme="darker">
              {composition.score}
            </Score>
          </div>
          <div>
            <FridayCoinsVariation size="small">{composition.dividends_gains}</FridayCoinsVariation>
          </div>
        </div>
      ))}
    </div>
  );
}
