import { ForwardedRef, forwardRef, ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import Icon from '../../general/icon';

export type WalletPictureSize = 'small' | 'medium' | 'big';

export type WalletPictureTheme = 'dark' | 'light';

export interface Props extends WrapperProps {
  wallet: Wallet;
  size?: WalletPictureSize;
  theme?: WalletPictureTheme;
}

export default forwardRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement, Props>(
  function WalletPicture(
    { wallet, size = 'medium', theme = 'dark', to, type, onClick, href, target }: Props,
    ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
  ): ReactElement {
    return (
      <Wrapper
        className={`friday-ui-wallet-picture ${size} ${theme}`}
        to={to}
        onClick={onClick}
        type={type}
        href={href}
        target={target}
        ref={ref}>
        {wallet.picture ? (
          <img src={wallet.picture.thumbnail_url} alt={`${wallet.name}`} />
        ) : (
          <div className="placeholder">
            <Icon name="user" />
          </div>
        )}
      </Wrapper>
    );
  },
);
