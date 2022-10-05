import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';

export type BoosterIconSize = 'small' | 'medium' | 'big';

export interface Props extends WrapperProps {
  leverage?: number;
  size?: BoosterIconSize;
  active?: boolean;
}

export default function BoosterIcon({
  leverage,
  size = 'small',
  active,
  to,
  onClick,
  type,
  href,
  target,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-booster-icon ${size}${active ? ' active' : ''}`}
      to={to}
      onClick={onClick}
      type={type}
      href={href}
      target={target}>
      <span>x{leverage || 0}</span>
    </Wrapper>
  );
}
