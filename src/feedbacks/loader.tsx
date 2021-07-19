import { ReactElement } from 'react';

export interface Props {
  size?: number;
  thickness?: number;
  color?: string;
}

export default function Loader({ size = 20, thickness = 3, color = '#fff' }: Props): ReactElement {
  return (
    <div className="friday-ui-loader" style={{ width: size, height: size }}>
      <div
        style={{
          borderColor: `${color} transparent transparent transparent`,
          borderWidth: thickness,
        }}
      />
    </div>
  );
}
