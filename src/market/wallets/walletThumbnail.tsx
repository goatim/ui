import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import FridayCoinsVariation from '../fridayCoinsVariation';
import FridayCoins from '../fridayCoins';

export type WalletThumbnailSize = 'small' | 'medium' | 'big';

export type WalletThumbnailInfos = 'picture' | 'picture-and-name';

export type WalletThumbnailTheme = 'dark' | 'light';

export interface Props extends WrapperProps {
  wallet: Wallet;
  size?: WalletThumbnailSize;
  infos?: WalletThumbnailInfos;
  theme?: WalletThumbnailTheme;
  position?: number;
  amount?: number;
  variation?: number;
}

export default function WalletThumbnail({
  wallet,
  size = 'small',
  infos = 'picture-and-name',
  theme = 'dark',
  position,
  amount,
  variation,
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-wallet-thumbnail ${size} ${infos} ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      <div className="body">
        {position !== undefined ? <span className="position">{position}</span> : null}
        {wallet.picture ? (
          <img src={wallet.picture.thumbnail_url} alt={`${wallet.name}`} />
        ) : (
          <div className="placeholder" />
        )}
        {infos === 'picture-and-name' ? (
          <span className="name">{wallet.name || wallet.id}</span>
        ) : null}
      </div>
      {amount !== undefined || variation !== undefined ? (
        <div className="metrics">
          {amount !== undefined ? <FridayCoins amount={amount} theme={theme} size={size} /> : null}
          {variation !== undefined ? (
            <FridayCoinsVariation variation={variation} size={size} />
          ) : null}
        </div>
      ) : null}
    </Wrapper>
  );
}
