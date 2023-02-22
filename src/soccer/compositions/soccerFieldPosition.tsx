import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { formatPlayerName, Image } from '@fridaygame/client';
import { Icon } from '../../general';

export type SoccerFieldPositionSize = 'small' | 'medium' | 'large';

export type SoccerFieldPositionTheme = 'dark' | 'light';

export interface SoccerFieldPositionProps extends WrapperProps {
  icon?: Image | null;
  firstName?: string;
  lastName?: string;
  size?: SoccerFieldPositionSize;
  theme?: SoccerFieldPositionTheme;
}

export function SoccerFieldPosition({
  icon,
  firstName,
  lastName,
  size = 'small',
  theme,
  to,
  onClick,
  href,
  target,
}: SoccerFieldPositionProps): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-soccer-field-position ${size} ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      {icon === null ? (
        <div className="no-icon">
          <Icon name="user" />
        </div>
      ) : null}
      {icon?.thumbnail_url ? <img src={icon.thumbnail_url} alt="Soccer Field Position" /> : null}
      {icon === undefined ? <div className="placeholder" /> : null}
      <span>{formatPlayerName(firstName, lastName)}</span>
    </Wrapper>
  );
}
