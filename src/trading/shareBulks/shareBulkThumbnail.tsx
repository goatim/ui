import { ReactElement, useMemo } from 'react';
import { ShareBulk } from '@fridaygame/client';
import { AssetThumbnail, AssetThumbnailSize } from '../assets';

export type ShareBulkThumbnailSize = 'narrow' | 'small' | 'normal';

export interface ShareBulkThumbnailProps {
  shareBulk: ShareBulk;
  size?: ShareBulkThumbnailSize;
}

export function ShareBulkThumbnail({
  shareBulk,
  size = 'normal',
}: ShareBulkThumbnailProps): ReactElement {
  const assetThumbnailSize = useMemo<AssetThumbnailSize>(() => {
    switch (size) {
      case 'narrow':
      case 'small':
        return 'narrow';
      default:
        return 'small';
    }
  }, [size]);

  const showQuotation = useMemo<boolean>(() => {
    switch (size) {
      case 'narrow':
      case 'small':
        return false;
      default:
        return true;
    }
  }, [size]);

  return (
    <div className="friday-ui-share-bulk-thumbnail">
      {typeof shareBulk.asset === 'object' ? (
        <AssetThumbnail
          asset={shareBulk.asset}
          shape="text"
          showQuotation={showQuotation}
          size={assetThumbnailSize}
        />
      ) : null}
      <span className="nb-shares">x{shareBulk.nb_shares}</span>
    </div>
  );
}
