import { ReactElement } from 'react';
import { Icon } from './icon';

export type SoccerLoaderTheme = 'dark' | 'light';

export interface SoccerLoaderProps {
  theme?: SoccerLoaderTheme;
  size?: number;
}

export function SoccerLoader({ theme = 'dark', size = 40 }: SoccerLoaderProps): ReactElement {
  return (
    <div className={`friday-ui-soccer-loader ${theme}`} style={{ width: size, height: size }}>
      <Icon name="soccer-ball" size={size} />
    </div>
  );
}
