import { ReactElement } from 'react';

export type CardTheme = 'dark' | 'light';

export interface CardProps {
  id?: string;
  className?: string;
  theme?: CardTheme;
  children?: ReactElement;
}

export function Card({ id, theme, className, children }: CardProps): ReactElement {

  return (
    <div id={id} aria-label="card" className={`card ${theme} ${className}`}>
      {children}
    </div>
  );
}
