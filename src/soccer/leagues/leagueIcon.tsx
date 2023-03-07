import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { Image } from '@goatim/client';

export type LeagueIconSize = 'small' | 'medium' | 'big';

export interface LeagueIconProps extends WrapperProps {
  icon?: Image;
  size?: LeagueIconSize;
}

export function LeagueIcon({
  icon,
  size = 'small',
  to,
  onClick,
  href,
  target,
}: LeagueIconProps): ReactElement {
  return (
    <Wrapper
      className={`goatim-ui-league-icon ${size}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      {icon?.thumbnail_url ? (
        <img src={icon.thumbnail_url} alt="League logo" />
      ) : (
        <span className="placeholder" />
      )}
    </Wrapper>
  );
}
