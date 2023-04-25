import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';

export type BoosterIconSize = 'small' | 'medium' | 'big';

export interface BoosterIconProps extends WrapperProps {
  leverage?: number;
  size?: BoosterIconSize;
  active?: boolean;
}

export function BoosterIcon({
  leverage,
  size = 'small',
  active,
  onClick,
  type,
  href,
  target,
}: BoosterIconProps): ReactElement {
  return (
    <Wrapper
      className={`goatim-ui-booster-icon ${size}${active ? ' active' : ''}`}
      onClick={onClick}
      type={type}
      href={href}
      target={target}>
      <span>x{leverage || 0}</span>
    </Wrapper>
  );
}
