import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { Image } from '@fridaygame/client';
import Icon from '../general/icon';

export type SoccerFieldPositionSize = 'small' | 'medium' | 'large';

export type SoccerFieldPositionTheme = 'default' | 'light';

export interface Props extends WrapperProps {
  icon?: Image | null;
  size?: SoccerFieldPositionSize;
  theme?: SoccerFieldPositionTheme;
}

export default function SoccerFieldPosition({
  icon,
  size = 'small',
  theme,
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
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
      {icon === undefined ? <span className="placeholder" /> : null}
    </Wrapper>
  );
}
