import { ReactElement, useMemo } from 'react';
import { Transaction } from '@goatim/client';
import { DateTime } from 'luxon';
import { GoatimCoins, PercentageVariation, WalletThumbnail } from '../../market';
import { AssetThumbnail, AssetThumbnailSize } from '../assets';
import { Icon } from '../../general';

export type TransactionThumbnailSize = 'narrow' | 'normal';

export interface TransactionThumbnailProps {
  transaction: Transaction;
  size?: TransactionThumbnailSize;
}

export function TransactionThumbnail({
  transaction,
  size = 'normal',
}: TransactionThumbnailProps): ReactElement {
  const resolvedCreation = useMemo<string | undefined>(() => {
    if (!transaction.creation) {
      return undefined;
    }
    return DateTime.fromISO(transaction.creation).toLocaleString(DateTime.DATETIME_MED);
  }, [transaction.creation]);

  const assetThumbnailSize = useMemo<AssetThumbnailSize>(() => {
    switch (size) {
      case 'narrow':
        return 'narrow';
      default:
        return 'small';
    }
  }, [size]);

  return (
    <div className="goatim-ui-transaction-thumbnail">
      <div className="header">
        {transaction.from && typeof transaction.from === 'object' ? (
          <div className="from">
            <WalletThumbnail wallet={transaction.from} size="small" />
          </div>
        ) : null}

        <div className="arrow">
          <Icon name="arrow-right" size={15} />
        </div>

        {transaction.to && typeof transaction.to === 'object' ? (
          <div className="to">
            <WalletThumbnail wallet={transaction.to} size="small" />
          </div>
        ) : null}
      </div>

      <div className="resume">
        <span className="label">Transaction:</span>
        <span>{transaction.nb_shares || 0}</span>
        <span className="label">actions pour</span>
        <GoatimCoins amount={transaction.nb_shares} />
      </div>

      {transaction.asset && typeof transaction.asset === 'object' ? (
        <div className="asset">
          <AssetThumbnail asset={transaction.asset} size={assetThumbnailSize} />
        </div>
      ) : null}

      <div className="footer">
        <div className="quotation">
          <span className="label">Cours</span>
          <GoatimCoins amount={transaction.price} />
          <PercentageVariation variation={transaction.asset_quotation_variation} />
        </div>
        <span className="creation">{resolvedCreation}</span>
      </div>
    </div>
  );
}
