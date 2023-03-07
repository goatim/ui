import { ReactElement } from 'react';
import { BoosterFactory, formatEurosAmount } from '@goatim/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { BoosterIcon } from './boosterIcon';
import { Button } from '../../general';

export type BoosterFactoryThumbnailSize = 'small' | 'medium' | 'big';

export type BoosterFactoryThumbnailShape = 'icon' | 'card';

export interface BoosterFactoryThumbnailProps extends WrapperProps {
  boosterFactory: BoosterFactory;
  size?: BoosterFactoryThumbnailSize;
  shape?: BoosterFactoryThumbnailShape;
  active?: boolean;
  actionLabel?: string;
}

export function BoosterFactoryThumbnail({
  boosterFactory,
  size = 'medium',
  shape = 'icon',
  active,
  actionLabel = 'Ajouter au panier',
  to,
  onClick,
  type,
  href,
  target,
}: BoosterFactoryThumbnailProps): ReactElement {
  if (shape === 'icon') {
    return (
      <Wrapper
        className={`goatim-ui-booster-factory-thumbnail ${size} ${shape}${active ? ' active' : ''}`}
        to={to}
        onClick={onClick}
        type={type}
        href={href}
        target={target}>
        <div className="icon">
          <BoosterIcon leverage={boosterFactory.leverage} size={size} active={active} />
        </div>
        {boosterFactory.price ? (
          <span className="price">{formatEurosAmount(boosterFactory.price)}</span>
        ) : null}
      </Wrapper>
    );
  }
  return (
    <div
      className={`goatim-ui-booster-factory-thumbnail ${size} ${shape}${active ? ' active' : ''}`}>
      <div className="header">
        <span className="title">Booster</span>
        <span className="leverage">x{boosterFactory.leverage || 0}</span>
      </div>
      <div className="body">
        <span className="name">{boosterFactory.name}</span>
        {boosterFactory.price ? (
          <span className="price">{formatEurosAmount(boosterFactory.price)}</span>
        ) : null}
        {boosterFactory.description ? (
          <span className="description">{boosterFactory.description}</span>
        ) : null}
      </div>
      <div className="actions">
        <Button to={to} onClick={onClick} type={type} href={href} target={target}>
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}
