import { ReactElement } from 'react';
import { SvgIconProps } from './props';

export function Sort({ size = 15 }: SvgIconProps): ReactElement<SVGElement> {
  return (
    <svg viewBox="0 0 24 24" height={size}>
      <title>Sort</title>
      <path
        d="M12,21c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4
	l-6,6C12.5,20.9,12.3,21,12,21z"
      />
      <path
        d="M18.1,11.3c-0.3,0-0.5-0.1-0.7-0.3l-5.3-5.3L6.8,11c-0.4,0.4-1,0.4-1.4,0s-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0l6,6
	c0.4,0.4,0.4,1,0,1.4C18.6,11.2,18.4,11.3,18.1,11.3z"
      />
    </svg>
  );
}
