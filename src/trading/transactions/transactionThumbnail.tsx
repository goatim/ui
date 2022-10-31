import { ReactElement, useEffect, useState } from 'react';
import { Transaction } from '@fridaygame/client';
import { DateTime } from 'luxon';
import WalletThumbnail from '../../market/wallets/walletThumbnail';
import AssetThumbnail from '../assets/assetThumbnail';
import FridayCoins from '../../market/fridayCoins';
import FridayCoinsVariation from '../../market/fridayCoinsVariation';
import PercentageVariation from '../../market/percentageVariation';

export interface Props {
  transaction: Transaction;
}

export default function TransactionThumbnail({ transaction }: Props): ReactElement {
  const [creationTime, setCreationTime] = useState<DateTime | undefined>(
    transaction.creation ? DateTime.fromISO(transaction.creation) : undefined,
  );

  useEffect(() => {
    if (transaction.creation) {
      setCreationTime(DateTime.fromISO(transaction.creation));
    }
  }, [transaction.creation]);

  return (
    <div className="friday-ui-transaction-thumbnail">
      <div className="header">
        {transaction.from && typeof transaction.from === 'object' ? (
          <div className="from">
            <WalletThumbnail wallet={transaction.from} size="small" />
          </div>
        ) : null}
        <span className="id">{transaction.id}</span>
      </div>

      {transaction.asset && typeof transaction.asset === 'object' ? (
        <div className="asset">
          <AssetThumbnail asset={transaction.asset} />
        </div>
      ) : null}

      {transaction.to && typeof transaction.to === 'object' ? (
        <div className="to">
          <WalletThumbnail wallet={transaction.to} size="medium" />
        </div>
      ) : null}

      <div className="data-points">
        {creationTime ? (
          <div className="data">
            <span className="label">{creationTime.toLocaleString()}</span>
            <span className="value">{creationTime.toLocaleString(DateTime.TIME_WITH_SECONDS)}</span>
          </div>
        ) : null}

        <div className="data">
          <span className="label">Quantité</span>
          <span className="value">{transaction.nb_shares || 1}</span>
        </div>

        <div className="data">
          <span className="label">Prix d&apos;achat</span>
          <FridayCoins amount={transaction.price} size="medium" />
        </div>

        <div className="data">
          <span className="label">Variation</span>
          <FridayCoinsVariation variation={transaction.asset_quotation_gain} size="medium" />
          <PercentageVariation variation={transaction.asset_quotation_variation} size="medium" />
        </div>
      </div>
    </div>
  );
}
