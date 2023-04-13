import { ReactElement } from 'react';
import { BoosterFactory, formatEurosAmount } from '@goatim/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { Icon } from '../../general';

export type BoosterFactoryThumbnailSize = 'small' | 'medium' | 'big';

export type BoosterFactoryThumbnailShape = 'list' | 'card';

export interface BoosterFactoryThumbnailProps extends WrapperProps {
  boosterFactory: BoosterFactory;
  size?: BoosterFactoryThumbnailSize;
  shape?: BoosterFactoryThumbnailShape;
  active?: boolean;
}

export function BoosterFactoryThumbnail({
  boosterFactory,
  size = 'medium',
  shape = 'list',
  active,
  to,
  onClick,
  type,
  href,
  target,
}: BoosterFactoryThumbnailProps): ReactElement {
  return (
    <Wrapper
      className={`goatim-ui-booster-factory-thumbnail ${size} ${shape}${active ? ' active' : ''}`}
      to={to}
      onClick={onClick}
      type={type}
      href={href}
      target={target}>
      <div className="header">
        <div className="infos">
          <div className="icon">
            <Icon name="zap" size={20} />
          </div>
          <div className="body">
            <span className="title">{boosterFactory.name}</span>
            <span className="leverage">x{boosterFactory.leverage || 0}</span>
          </div>
        </div>
        {boosterFactory.nb_in_wallet ? (
          <span className="nb-in-wallet">{boosterFactory.nb_in_wallet}</span>
        ) : (
          <span className="price">{formatEurosAmount(boosterFactory.price || 0)}</span>
        )}
      </div>
    </Wrapper>
  );
}
