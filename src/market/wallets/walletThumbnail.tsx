import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import { Wallet } from '@goatim/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { GoatimCoins } from '../goatimCoins';
import { WalletPicture, WalletPictureOutline } from './walletPicture';

export type WalletThumbnailSize = 'small' | 'medium' | 'big' | 'large';

export type WalletThumbnailTheme = 'dark' | 'light';

export type WalletThumbnailShape = 'inline' | 'logo';

export interface WalletThumbnailProps extends WrapperProps {
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

export const WalletThumbnail = forwardRef<
  HTMLAnchorElement | HTMLButtonElement | HTMLDivElement,
  WalletThumbnailProps
>(function WalletThumbnail(
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
    onClick,
    type,
    href,
    target,
  }: WalletThumbnailProps,
  ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
): ReactElement {
  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-wallet-thumbnail', size, theme, align, shape];

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
          {showAmount ? <GoatimCoins amount={wallet.amount} theme={theme} /> : null}
        </div>
      ) : null}
    </Wrapper>
  );
});
