import { ReactElement } from 'react';
import IconProps from './props';

export default function ({ size = 15, width = 2 }: IconProps): ReactElement<SVGElement> {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="black"
      fill="none"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round">
      <title>Align Right</title>
      <line x1="21" y1="10" x2="7" y2="10"></line>
      <line x1="21" y1="6" x2="3" y2="6"></line>
      <line x1="21" y1="14" x2="3" y2="14"></line>
      <line x1="21" y1="18" x2="7" y2="18"></line>
    </svg>
  );
}
