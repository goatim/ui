import { ReactElement, useMemo } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { CompositionPosition, formatPlayerName } from '@goatim/client';
import { Icon } from '../../general';

export type SoccerFieldPositionSize = 'small' | 'medium' | 'large';

export type SoccerFieldPositionTheme = 'dark' | 'light';

export interface SoccerFieldPositionProps extends WrapperProps {
  position?: CompositionPosition;
  size?: SoccerFieldPositionSize;
  theme?: SoccerFieldPositionTheme;
}

export function SoccerFieldPosition({
  position,
  size = 'medium',
  theme = 'dark',
  onClick,
  href,
  target,
}: SoccerFieldPositionProps): ReactElement {
  const className = useMemo<string>(() => {
    const classNames: string[] = ['goatim-ui-soccer-field-position', size, theme];
    if (position?.booster_factory || position?.booster) {
      classNames.push('boosted');
    }
    return classNames.join(' ');
  }, [position?.booster, position?.booster_factory, size, theme]);

  const icon = useMemo<string | undefined>(() => {
    if (
      position?.player &&
      typeof position.player === 'object' &&
      position.player.club &&
      typeof position.player.club === 'object' &&
      position.player.club.icon?.thumbnail_url
    ) {
      return position.player.club.icon.thumbnail_url;
    }
    return undefined;
  }, [position?.player]);

  const name = useMemo<string | undefined>(() => {
    if (position?.player && typeof position.player === 'object') {
      return formatPlayerName(position.player.first_name, position.player.last_name);
    }
    return undefined;
  }, [position?.player]);

  return (
    <Wrapper className={className} onClick={onClick} href={href} target={target}>
      <div className="icon">
        {/* eslint-disable-next-line no-nested-ternary */}
        {icon ? (
          <img src={icon} alt="Soccer Field Position" />
        ) : position ? (
          <div className="no-icon">
            <Icon name="user" />
          </div>
        ) : (
          <div className="placeholder" />
        )}
      </div>
      <span>{name}</span>
    </Wrapper>
  );
}
