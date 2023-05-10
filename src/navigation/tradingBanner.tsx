import { ReactElement } from 'react';
import { CurrenciesRate, Wallet } from '@goatim/client';
import { CurrenciesRateThumbnail, WalletThumbnail } from '../market';

export interface TradingBannerProps {
  goatimCoinsRate?: CurrenciesRate;
  wallet?: Wallet;
}

export function TradingBanner({ goatimCoinsRate, wallet }: TradingBannerProps): ReactElement {
  return (
    <div className="goatim-ui-trading-banner">
      <div className="fdy-rate">
        {goatimCoinsRate ? (
          <CurrenciesRateThumbnail currenciesRate={goatimCoinsRate} theme="light" />
        ) : null}
      </div>
      <div className="assets" />
      <div className="wallet">
        {wallet ? (
          <WalletThumbnail
            wallet={wallet}
            theme="light"
            showCoins
            showPicture={false}
            align="right"
          />
        ) : null}
      </div>
    </div>
  );
}
