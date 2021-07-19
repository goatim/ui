import { ReactElement } from 'react';
import colors from '../styles/_colors.scss';
import { IconProps } from './icon';

export default function Chevron({
  size = 15,
  color = colors.VIOLET,
}: IconProps): ReactElement<SVGElement> {
  return (
    <svg viewBox="0 0 141.73 141.73" height={size} fill={color}>
      <title>Chevron</title>
      <path d="M101.53,73.72a5,5,0,0,1-1.46,3.55L54.48,122.86a5,5,0,1,1-7.12-7.11l42.05-42L41.68,26a5,5,0,0,1,7.11-7.1l51.28,51.29A5,5,0,0,1,101.53,73.72Z" />
    </svg>
  );
}
