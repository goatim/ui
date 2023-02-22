import { ReactElement } from 'react';

export interface PlaceholderProps {
  color?: string;
}

export function Placeholder({
  color = 'rgba(255, 255, 255, 0.3)',
}: PlaceholderProps): ReactElement {
  return (
    <div className="friday-ui-placeholder">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400">
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="50" />
          </filter>
        </defs>
        <path fill={color} d="M300,0h800l-300,400h-800z" filter="url(#blur)" />
      </svg>
    </div>
  );
}
