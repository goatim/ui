import { ReactElement } from 'react';
import { Image } from '@cezembre/fronts';
import Wrapper, { WrapperProps } from '../general/wrapper';

export type SoccerFieldPositionSize = 'small' | 'medium' | 'large';

export type SoccerFieldPositionTheme = 'default' | 'light';

export interface Props extends WrapperProps {
  icon?: Image;
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
      {icon?.thumbnail_url ? (
        <img src={icon.thumbnail_url} alt="Soccer Field Position" />
      ) : (
        <span className="placeholder" />
      )}
    </Wrapper>
  );
}
