import { ReactElement } from 'react';
import { OrderMatchNotificationPayload } from '@fridaygame/client';
import AssetThumbnail from '../../trading/assets/assetThumbnail';

export interface Props {
  payload?: OrderMatchNotificationPayload;
}

export default function OrderMatchNotification({ payload }: Props): ReactElement {
  return (
    <div className="friday-ui-order-match-notification">
      <span>
        Ton <b>{payload?.type === 'buy' ? "ordre d'achat" : 'ordre de vente'}</b> a matché !<br />
        <b>
          {payload?.nb_matched}/{payload?.total}
        </b>{' '}
        actions {payload?.type === 'buy' ? 'achetées' : 'vendues'}.
      </span>
      {payload?.asset && typeof payload.asset === 'object' ? (
        <div className="payload highlight">
          <AssetThumbnail asset={payload.asset} size="small" shape="text" showQuotation={false} />
        </div>
      ) : null}
    </div>
  );
}
