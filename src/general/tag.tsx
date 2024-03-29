import { ReactElement, ReactNode, useMemo } from 'react';
import { Icon, IconName } from './icon';

export type TagSize = 'small' | 'medium' | 'big';

export type TagTheme =
  | 'light-medium-blue'
  | 'fushia'
  | 'light-fushia'
  | 'dark-white'
  | 'full-electric-blue';

export interface TagProps {
  label?: string;
  children?: ReactNode;
  className?: string;
  size?: TagSize;
  theme?: TagTheme;
  leftIcon?: IconName;
}

export function Tag({
  label,
  children,
  className,
  size = 'small',
  theme = 'light-medium-blue',
  leftIcon,
}: TagProps): ReactElement {
  const iconSize = useMemo<number>(() => {
    switch (size) {
      case 'small':
        return 12;
      case 'medium':
        return 15;
      case 'big':
      default:
        return 18;
    }
  }, [size]);

  return (
    <div className={`goatim-ui-tag ${className} ${size} ${theme}`}>
      <div className="container">
        {leftIcon ? <Icon name={leftIcon} size={iconSize} /> : null}
        {label ? <span className="label">{label}</span> : children}
      </div>
    </div>
  );
}
