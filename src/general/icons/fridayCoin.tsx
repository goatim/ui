import { ReactElement } from 'react';
import { SvgIconProps } from './props';

export function FridayCoin({ size = 15 }: SvgIconProps): ReactElement<SVGElement> {
  return (
    <svg viewBox="0 0 500 500" height={size}>
      <title>Friday Coin</title>
      <path d="m250,0C111.93,0,0,111.93,0,250s111.93,250,250,250,250-111.93,250-250S388.07,0,250,0Zm0,462.73c-117.49,0-212.73-95.24-212.73-212.73S132.51,37.27,250,37.27s212.73,95.24,212.73,212.73-95.24,212.73-212.73,212.73Z" />
      <polygon points="238.84 188.98 239.02 188.98 239.02 148.1 179.41 148.1 179.41 351.9 238.84 351.9 238.84 269.41 320.59 269.41 320.59 228.38 238.84 228.38 238.84 188.98" />
      <rect x="253.8" y="148.1" width="66.79" height="40.88" />
    </svg>
  );
}
