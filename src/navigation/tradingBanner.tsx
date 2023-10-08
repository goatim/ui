import { ReactElement } from 'react';
import { CurrenciesRate, User, Wallet } from '@goatim/client';
import { CurrenciesRateThumbnail, NeoShopBanner, WalletThumbnail } from '../market';
import { UserBannerCard } from '../user';

export interface TradingBannerProps {
  goatimCoinsRate?: CurrenciesRate;
  wallet?: Wallet;
  user?: User;
}

export function TradingBanner({ goatimCoinsRate, wallet, user }: TradingBannerProps): ReactElement {
  return (
    <div className="goatim-ui-trading-banner">
      {/* <div className="fdy-rate">
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
      </div> */}
        <div className='container-user-card'>
          {user && <UserBannerCard user={user} />}
        </div>
        <div className='container-shop-banner'>
          {wallet && <NeoShopBanner />}
        </div>
    </div>
  );
}
