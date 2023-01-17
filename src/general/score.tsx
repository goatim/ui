import { ReactElement } from 'react';
import { formatScore } from '@fridaygame/client';

export type ScoreSize = 'small' | 'medium' | 'big' | 'large';

export type ScoreTheme = 'dark' | 'light' | 'darker' | 'gold';

export interface Props {
  children?: number;
  score?: number;
  size?: ScoreSize;
  theme?: ScoreTheme;
}

export default function Score({
  children,
  score,
  size = 'small',
  theme = 'dark',
}: Props): ReactElement {
  return (
    <span className={`friday-ui-score ${size} ${theme}`}>
      {formatScore(children || score || 0)}
    </span>
  );
}
