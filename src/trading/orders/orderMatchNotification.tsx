import { ReactElement } from 'react';
import { OrderMatchEventPayload } from '@fridaygame/client';
import AssetThumbnail from '../assets/assetThumbnail';

export interface Props {
  payload?: OrderMatchEventPayload;
}

export default function OrderMatchNotification({ payload }: Props): ReactElement {
  return (
    <div className="friday-ui-order-match-notification">
      <p>
        Votre <b>{payload?.type === 'buy' ? "ordre d'achat" : 'ordre de vente'}</b> a matché !<br />
        <b>
          {payload?.nb_matched}/{payload?.total}
        </b>{' '}
        actions {payload?.type === 'buy' ? 'achetées' : 'vendues'}.
      </p>
      {payload?.asset ? (
        <div className="payload highlight">
          <AssetThumbnail asset={payload.asset} size="inline" />
        </div>
      ) : null}
    </div>
  );
}
