import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import { Image, Wallet } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import Icon from '../../general/icon';

export type WalletPictureSize = 'small' | 'medium' | 'big';

export type WalletPictureTheme = 'dark' | 'light';

export type WalletPictureOutline = 'outline-gold';

export interface Props extends WrapperProps {
  picture?: Image;
  wallet?: Wallet;
  size?: WalletPictureSize;
  theme?: WalletPictureTheme;
  outline?: WalletPictureOutline;
}

export default forwardRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement, Props>(
  function WalletPicture(
    {
      wallet,
      picture,
      size = 'medium',
      theme = 'dark',
      outline,
      to,
      type,
      onClick,
      href,
      target,
    }: Props,
    ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
  ): ReactElement {
    const className = useMemo<string>(() => {
      const classNames: string[] = ['friday-ui-wallet-picture', size, theme];

      if (outline) {
        classNames.push(outline);
      }

      return classNames.join(' ');
    }, [outline, size, theme]);

    return (
      <Wrapper
        className={className}
        to={to}
        onClick={onClick}
        type={type}
        href={href}
        target={target}
        ref={ref}>
        {picture || wallet?.picture ? (
          <img src={picture?.thumbnail_url || wallet?.picture?.thumbnail_url} alt={wallet?.name} />
        ) : (
          <div className="placeholder">
            <Icon name="user" />
          </div>
        )}
      </Wrapper>
    );
  },
);
