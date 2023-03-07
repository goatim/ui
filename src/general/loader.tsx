import { ReactElement } from 'react';

export type LoaderTheme = 'dark' | 'light';

export interface LoaderProps {
  theme?: LoaderTheme;
  size?: number;
  thickness?: number;
}

export function Loader({ theme = 'dark', size = 20, thickness = 3 }: LoaderProps): ReactElement {
  return (
    <div className={`goatim-ui-loader ${theme}`} style={{ width: size, height: size }}>
      <div style={{ borderWidth: thickness }} />
    </div>
  );
}
