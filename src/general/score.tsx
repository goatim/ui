import { ReactElement } from 'react';
import { formatScore } from '@fridaygame/client';

export type ScoreSize = 'small' | 'medium' | 'big' | 'large';

export type ScoreTheme = 'dark' | 'light' | 'darker' | 'gold';

export interface ScoreProps {
  children?: number;
  score?: number;
  size?: ScoreSize;
  theme?: ScoreTheme;
}

export function Score({
  children,
  score,
  size = 'small',
  theme = 'dark',
}: ScoreProps): ReactElement {
  return (
    <span className={`friday-ui-score ${size} ${theme}`}>
      {formatScore(children || score || 0)}
    </span>
  );
}
