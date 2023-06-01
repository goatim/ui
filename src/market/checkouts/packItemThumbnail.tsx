import { ReactElement, useMemo } from 'react';
import { PackItem } from '@goatim/client';
import { GoatimCoinsAmount } from '../goatimCoins';

export interface PackItemThumbnailProps {
  packItem: PackItem;
}

export function PackItemThumbnail({ packItem }: PackItemThumbnailProps): ReactElement {
  const highestOdd = useMemo<number>(() => {
    if (
      !packItem.pack_factory ||
      typeof packItem.pack_factory !== 'object' ||
      !packItem.pack_factory.odds
    ) {
      return 0;
    }
    return Object.entries(packItem.pack_factory.odds).reduce<number>(
      (high, [val]) => (high < Number(val) ? Number(val) : high),
      0,
    );
  }, [packItem.pack_factory]);

  if (!packItem.pack_factory || typeof packItem.pack_factory !== 'object') {
    return <span>Pack</span>;
  }

  return (
    <div className="goatim-ui-pack-item-thumbnail">
      <span className="name">Pack {packItem.pack_factory.name}</span>
      <div className="odd">
        <span className="label">Jusqu&apos;à</span>
        <GoatimCoinsAmount amount={highestOdd} size="small" />
      </div>
    </div>
  );
}
