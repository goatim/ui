import { ReactElement, useMemo } from 'react';
import { Transaction } from '@fridaygame/client';
import { DateTime } from 'luxon';
import WalletThumbnail from '../../market/wallets/walletThumbnail';
import AssetThumbnail, { AssetThumbnailSize } from '../assets/assetThumbnail';
import FridayCoins from '../../market/fridayCoins';
import PercentageVariation from '../../market/percentageVariation';
import Icon from '../../general/icon';

export type TransactionThumbnailSize = 'narrow' | 'normal';

export interface Props {
  transaction: Transaction;
  size?: TransactionThumbnailSize;
}

export default function TransactionThumbnail({
  transaction,
  size = 'normal',
}: Props): ReactElement {
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
    <div className="friday-ui-transaction-thumbnail">
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
        <FridayCoins amount={transaction.nb_shares} />
      </div>

      {transaction.asset && typeof transaction.asset === 'object' ? (
        <div className="asset">
          <AssetThumbnail asset={transaction.asset} size={assetThumbnailSize} />
        </div>
      ) : null}

      <div className="footer">
        <div className="quotation">
          <span className="label">Cours</span>
          <FridayCoins amount={transaction.price} />
          <PercentageVariation variation={transaction.asset_quotation_variation} />
        </div>
        <span className="creation">{resolvedCreation}</span>
      </div>
    </div>
  );
}
