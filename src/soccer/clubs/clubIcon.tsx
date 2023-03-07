import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { Image } from '@goatim/client';

export type ClubIconSize = 'small' | 'medium' | 'big';

export type ClubIconTheme = 'dark' | 'light';

export interface ClubIconProps extends WrapperProps {
  icon?: Image;
  size?: ClubIconSize;
  theme?: ClubIconTheme;
}

export function ClubIcon({
  icon,
  size = 'small',
  theme = 'dark',
  to,
  onClick,
  href,
  target,
}: ClubIconProps): ReactElement {
  return (
    <Wrapper
      className={`goatim-ui-club-icon ${size} ${theme}`}
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
