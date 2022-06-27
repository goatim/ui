import { ReactElement } from 'react';

export type FridayCoinsSize = 'small' | 'medium' | 'big' | 'large';

export type FridayCoinsTheme = 'default' | 'light' | 'darker';

export interface Props {
  position?: number;
  size?: FridayCoinsSize;
  theme?: FridayCoinsTheme;
}

export default function RankPosition({
  position = 0,
  size = 'small',
  theme = 'default',
}: Props): ReactElement {
  if (position <= 0) {
    return <span className={`friday-ui-rank-position ${size} ${theme}`}>0</span>;
  }
  if (position === 1) {
    return <span className={`friday-ui-rank-position ${size} ${theme}`}>1er</span>;
  }
  return <span className={`friday-ui-rank-position ${size} ${theme}`}>{position} ème</span>;
}
