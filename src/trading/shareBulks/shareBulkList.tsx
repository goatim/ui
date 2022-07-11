import { ReactElement } from 'react';
import { ShareBulk } from '@fridaygame/client';
import ShareBulkThumbnail from './shareBulkThumbnail';

export interface Props {
  shareBulks: ShareBulk[];
}

export default function ShareBulkList({ shareBulks }: Props): ReactElement {
  return (
    <div className="friday-ui-share-bulk-list">
      {shareBulks.map((shareBulk) => (
        <div
          className="share-bulk"
          key={typeof shareBulk.asset === 'object' ? shareBulk.asset.id : shareBulk.asset}>
          <ShareBulkThumbnail shareBulk={shareBulk} />
        </div>
      ))}
    </div>
  );
}
