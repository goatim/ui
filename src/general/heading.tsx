import { ReactElement, useMemo } from 'react';
import { Icon, IconName } from './icon';

export type HeadingSize = 'small' | 'medium' | 'big';

export type HeadingTheme = 'dark' | 'light' | 'live' | 'live-light';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  label?: string;
  icon?: IconName;
  emoji?: string;
  children?: string;
  size?: HeadingSize;
  theme?: HeadingTheme;
  level?: HeadingLevel;
  align?: AlignSetting;
}

export function Heading({
  label,
  icon,
  emoji,
  children,
  size = 'medium',
  theme = 'dark',
  level = 'h2',
  align = 'left',
}: HeadingProps): ReactElement {
  const iconSize = useMemo<number>(() => {
    switch (size) {
      case 'small':
        return 20;
      case 'big':
        return 40;
      default:
        return 30;
    }
  }, [size]);
  return (
    <div className={`friday-ui-heading ${size} ${theme} ${align}`}>
      {label ? <span className="label">{label}</span> : null}
      {icon ? <Icon name={icon} size={iconSize} /> : null}
      {emoji ? <span className="emoji">{emoji}</span> : null}
      {children?.length && level === 'h1' ? <h1 className="title">{children}</h1> : null}
      {children?.length && level === 'h2' ? <h2 className="title">{children}</h2> : null}
      {children?.length && level === 'h3' ? <h3 className="title">{children}</h3> : null}
      {children?.length && level === 'h4' ? <h4 className="title">{children}</h4> : null}
      {children?.length && level === 'h5' ? <h5 className="title">{children}</h5> : null}
      {children?.length && level === 'h6' ? <h6 className="title">{children}</h6> : null}
    </div>
  );
}
