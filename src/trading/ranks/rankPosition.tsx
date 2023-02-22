import { ReactElement } from 'react';

export type RankPositionSize = 'small' | 'medium' | 'big' | 'large';

export type RankPositionTheme = 'dark' | 'light' | 'darker';

export interface RankPositionProps {
  position?: number;
  size?: RankPositionSize;
  theme?: RankPositionTheme;
}

export function RankPosition({
  position = 0,
  size = 'small',
  theme = 'dark',
}: RankPositionProps): ReactElement {
  if (position <= 0) {
    return <span className={`friday-ui-rank-position ${size} ${theme}`}>0</span>;
  }
  if (position === 1) {
    return <span className={`friday-ui-rank-position ${size} ${theme}`}>1er</span>;
  }
  return <span className={`friday-ui-rank-position ${size} ${theme}`}>{position} ème</span>;
}
