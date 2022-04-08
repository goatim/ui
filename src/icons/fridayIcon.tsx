import { ReactElement } from 'react';
import IconProps from './props';

export default function FridayIcon({ size = 15 }: IconProps): ReactElement<SVGElement> {
  return (
    <svg viewBox="0 0 354.67 512" height={size}>
      <polygon points="149.3 102.69 149.74 102.69 149.74 0 0 0 0 512 149.3 512 149.3 304.76 354.67 304.76 354.67 201.69 149.3 201.69 149.3 102.69" />
      <rect x="186.88" width="167.79" height="102.69" />
    </svg>
  );
}
