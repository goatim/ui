import { ReactElement } from 'react';

export interface Props {
  size?: number;
  color?: string;
}

export default function Chevron({
  color = '#333',
  size = 20,
}: Props): ReactElement<SVGElement> {
  return (
    <svg viewBox="0 0 306 306" height={size} fill={color}>
      <title>Chevron</title>
      <polygon points="270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35" />
    </svg>
  );
}
