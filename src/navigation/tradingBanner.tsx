import { ReactElement } from 'react';
import { CurrenciesRate, Wallet } from '@fridaygame/client';
import { CurrenciesRateThumbnail, WalletThumbnail } from '../market';

export interface TradingBannerProps {
  fridayCoinsRate?: CurrenciesRate;
  wallet?: Wallet;
}

export function TradingBanner({ fridayCoinsRate, wallet }: TradingBannerProps): ReactElement {
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
