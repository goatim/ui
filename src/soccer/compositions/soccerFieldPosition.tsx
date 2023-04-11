import { ReactElement, useMemo } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { formatPlayerName, Image } from '@goatim/client';
import { Icon } from '../../general';

export type SoccerFieldPositionSize = 'small' | 'medium' | 'large';

export type SoccerFieldPositionTheme = 'dark' | 'light';

export interface SoccerFieldPositionProps extends WrapperProps {
  icon?: Image | null;
  firstName?: string;
  lastName?: string;
  size?: SoccerFieldPositionSize;
  theme?: SoccerFieldPositionTheme;
  boosted?: boolean;
}

export function SoccerFieldPosition({
  icon,
  firstName,
  lastName,
  size = 'medium',
  theme = 'dark',
  boosted = false,
  to,
  onClick,
  href,
  target,
}: SoccerFieldPositionProps): ReactElement {
  const className = useMemo<string>(() => {
    const classNames: string[] = ['goatim-ui-soccer-field-position', size, theme];
    if (boosted) {
      classNames.push('boosted');
    }
    return classNames.join(' ');
  }, [boosted, size, theme]);

  return (
    <Wrapper className={className} to={to} onClick={onClick} href={href} target={target}>
      <div className="icon">
        {icon === null ? (
          <div className="no-icon">
            <Icon name="user" />
          </div>
        ) : null}
        {icon?.thumbnail_url ? <img src={icon.thumbnail_url} alt="Soccer Field Position" /> : null}
        {icon === undefined ? <div className="placeholder" /> : null}
      </div>
      <span>{formatPlayerName(firstName, lastName)}</span>
    </Wrapper>
  );
}
