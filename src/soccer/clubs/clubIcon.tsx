import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { Image } from '@fridaygame/client';

export type ClubIconSize = 'small' | 'medium' | 'big';

export type ClubIconTheme = 'dark' | 'light';

export interface Props extends WrapperProps {
  icon?: Image;
  size?: ClubIconSize;
  theme?: ClubIconTheme;
}

export default function ClubIcon({
  icon,
  size = 'small',
  theme = 'dark',
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-club-icon ${size} ${theme}`}
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
