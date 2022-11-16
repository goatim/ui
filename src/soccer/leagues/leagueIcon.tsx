import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { Image } from '@fridaygame/client';

export type LeagueIconSize = 'small' | 'medium' | 'big';

export interface Props extends WrapperProps {
  icon?: Image;
  size?: LeagueIconSize;
}

export default function LeagueIcon({
  icon,
  size = 'small',
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-league-icon ${size}`}
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
