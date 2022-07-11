import { ReactElement } from 'react';
import { ShareBulk } from '@fridaygame/client';
import AssetThumbnail from '../assets/assetThumbnail';

export interface Props {
  shareBulk: ShareBulk;
}

export default function ShareBulkThumbnail({ shareBulk }: Props): ReactElement {
  return (
    <div className="friday-ui-share-bulk-thumbnail">
      {typeof shareBulk.asset === 'object' ? <AssetThumbnail asset={shareBulk.asset} /> : null}
      <span className="nb-shares">x{shareBulk.nb_shares}</span>
    </div>
  );
}
