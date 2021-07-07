import { ReactElement } from 'react';

export interface Props {
  size?: number;
  color?: string;
}

export default function Minus({
  size = 20,
  color = '#333',
}: Props): ReactElement<SVGElement> {
  return (
    <svg viewBox="0 0 409.6 409.6" height={size} fill={color}>
      <title>Minus</title>
      <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z" />
    </svg>
  );
}
