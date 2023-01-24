import { ReactElement, useMemo, forwardRef, ForwardedRef } from 'react';
import { Wallet } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import FridayCoins from '../fridayCoins';
import WalletPicture, { WalletPictureOutline } from './walletPicture';

export type WalletThumbnailSize = 'small' | 'medium' | 'big' | 'large';

export type WalletThumbnailTheme = 'dark' | 'light';

export type WalletThumbnailShape = 'inline' | 'logo';

export interface Props extends WrapperProps {
  wallet: Wallet;
  size?: WalletThumbnailSize;
  theme?: WalletThumbnailTheme;
  shape?: WalletThumbnailShape;
  showPicture?: boolean;
  pictureOutline?: WalletPictureOutline;
  showName?: boolean;
  showAmount?: boolean;
  align?: AlignSetting;
}

export default forwardRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement, Props>(
  function WalletThumbnail(
    {
      wallet,
      size = 'small',
      showPicture = true,
      pictureOutline,
      showName = true,
      showAmount = false,
      align = 'left',
      theme = 'dark',
      shape = 'inline',
      to,
      onClick,
      type,
      href,
      target,
    }: Props,
    ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
  ): ReactElement {
    const className = useMemo<string>(() => {
      const classNames = ['friday-ui-wallet-thumbnail', size, theme, align, shape];

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
    }, [align, showAmount, showName, showPicture, size, theme, shape]);

    return (
      <Wrapper
        className={className}
        to={to}
        onClick={onClick}
        type={type}
        href={href}
        target={target}
        ref={ref}>
        {showPicture ? (
          <WalletPicture wallet={wallet} size={size} theme={theme} outline={pictureOutline} />
        ) : null}
        {showName || showAmount ? (
          <div className="body">
            {showName ? <span className="name">{wallet.name || wallet.slug}</span> : null}
            {showAmount ? <FridayCoins amount={wallet.amount} theme={theme} /> : null}
          </div>
        ) : null}
      </Wrapper>
    );
  },
);
