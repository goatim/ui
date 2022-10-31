import { ReactElement, useMemo, forwardRef, ForwardedRef } from 'react';
import { Wallet } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import FridayCoins from '../fridayCoins';
import WalletPicture from './walletPicture';

export type WalletThumbnailSize = 'small' | 'medium' | 'big';

export type WalletThumbnailTheme = 'dark' | 'light';

export interface Props extends WrapperProps {
  wallet: Wallet;
  size?: WalletThumbnailSize;
  theme?: WalletThumbnailTheme;
  showPicture?: boolean;
  showName?: boolean;
  showAmount?: boolean;
}

export default forwardRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement, Props>(
  function WalletThumbnail(
    {
      wallet,
      size = 'small',
      showPicture = true,
      showName = true,
      showAmount = false,
      theme = 'dark',
      to,
      onClick,
      type,
      href,
      target,
    }: Props,
    ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
  ): ReactElement {
    const className = useMemo<string>(() => {
      const classNames = ['friday-ui-wallet-thumbnail', size, theme];

      if (showPicture) {
        classNames.push('show-picture');
      }

      if (showName) {
        classNames.push('show-name');
      }

      if (showAmount) {
        classNames.push('show-amount');
      }

      return classNames.join(' ');
    }, [showAmount, showName, showPicture, size, theme]);

    return (
      <Wrapper
        className={className}
        to={to}
        onClick={onClick}
        type={type}
        href={href}
        target={target}
        ref={ref}>
        {showPicture ? <WalletPicture wallet={wallet} size={size} theme={theme} /> : null}
        {showName || showAmount ? (
          <div className="body">
            {showName ? <span className="name">{wallet.name || wallet.slug}</span> : null}
            {showAmount ? <FridayCoins amount={wallet.amount} theme={theme} size={size} /> : null}
          </div>
        ) : null}
      </Wrapper>
    );
  },
);
