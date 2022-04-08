import { ReactElement } from 'react';
import { Image } from '@cezembre/fronts';
import Wrapper, { WrapperProps } from '../general/wrapper';

export type ClubIconSize = 'small' | 'medium' | 'large';

export interface Props extends WrapperProps {
  icon?: Image;
  size?: ClubIconSize;
}

export default function ClubIcon({
  icon,
  size = 'small',
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-club-icon ${size}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      {icon?.thumbnail_url ? (
        <img src={icon.thumbnail_url} alt="Club logo" />
      ) : (
        <span className="placeholder" />
      )}
    </Wrapper>
  );
}
