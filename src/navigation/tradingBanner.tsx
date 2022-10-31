import { ReactElement } from 'react';
import { CurrenciesRate, Wallet } from '@fridaygame/client';
import CurrenciesRateThumbnail from '../market/currenciesRates/currenciesRateThumbnail';
import WalletThumbnail from '../market/wallets/walletThumbnail';

export interface Props {
  fridayCoinsRate?: CurrenciesRate;
  wallet?: Wallet;
}

export default function TradingBanner({ fridayCoinsRate, wallet }: Props): ReactElement {
  return (
    <div className="friday-ui-trading-banner">
      <div className="fdy-rate">
        {fridayCoinsRate ? (
          <CurrenciesRateThumbnail currenciesRate={fridayCoinsRate} theme="light" />
        ) : null}
      </div>
      <div className="assets" />
      <div className="wallet">
        {wallet ? (
          <WalletThumbnail
            wallet={wallet}
            theme="light"
            showAmount
            showPicture={false}
            align="right"
          />
        ) : null}
      </div>
    </div>
  );
}
