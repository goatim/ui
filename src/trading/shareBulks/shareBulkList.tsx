import { ReactElement } from 'react';
import { ShareBulk } from '@fridaygame/client';
import { ShareBulkThumbnail, ShareBulkThumbnailSize } from './shareBulkThumbnail';

export interface ShareBulkListProps {
  shareBulks: ShareBulk[];
  size?: ShareBulkThumbnailSize;
}

export function ShareBulkList({ shareBulks, size = 'normal' }: ShareBulkListProps): ReactElement {
  return (
    <div className="friday-ui-share-bulk-list">
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
