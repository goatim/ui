import { ReactElement } from 'react';
import { ShareBulk } from '@goatim/client';
import { ShareBulkThumbnail, ShareBulkThumbnailSize } from './shareBulkThumbnail';

export interface ShareBulkListProps {
  shareBulks: ShareBulk[];
  size?: ShareBulkThumbnailSize;
}

export function ShareBulkList({ shareBulks, size = 'normal' }: ShareBulkListProps): ReactElement {
  return (
    <div className="goatim-ui-share-bulk-list">
      {shareBulks.map((shareBulk) => (
        <div
          className="share-bulk"
          key={typeof shareBulk.asset === 'object' ? shareBulk.asset.id : shareBulk.asset}>
          <ShareBulkThumbnail shareBulk={shareBulk} size={size} />
        </div>
      ))}
    </div>
  );
}
