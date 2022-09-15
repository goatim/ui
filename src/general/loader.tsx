import { ReactElement } from 'react';

export type LoaderTheme = 'dark' | 'light';

export interface Props {
  theme?: LoaderTheme;
  size?: number;
  thickness?: number;
}

export default function Loader({ theme = 'dark', size = 20, thickness = 3 }: Props): ReactElement {
  return (
    <div className={`friday-ui-loader ${theme}`} style={{ width: size, height: size }}>
      <div style={{ borderWidth: thickness }} />
    </div>
  );
}
