import { ReactElement } from 'react';
import { OrderMatchEventPayload } from '@fridaygame/client';
import AssetThumbnail from '../assets/assetThumbnail';

export interface Props {
  payload?: OrderMatchEventPayload;
}

export default function OrderMatchNotification({ payload }: Props): ReactElement {
  return (
    <div className="friday-ui-order-match-notification">
      <span>
        Votre <b>{payload?.type === 'buy' ? "ordre d'achat" : 'ordre de vente'}</b> a matché !<br />
        <b>
          {payload?.nb_matched}/{payload?.total}
        </b>{' '}
        actions {payload?.type === 'buy' ? 'achetées' : 'vendues'}.
      </span>
      {payload?.asset ? (
        <div className="payload highlight">
          <AssetThumbnail asset={payload.asset} size="small" shape="text" showQuotation={false} />
        </div>
      ) : null}
    </div>
  );
}
