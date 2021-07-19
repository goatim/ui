import { ReactElement } from 'react';
import colors from '../styles/_colors.scss';
import { IconProps } from './icon';

export default function Facebook({
  size = 15,
  color = colors.VIOLET,
}: IconProps): ReactElement<SVGElement> {
  return (
    <svg viewBox="0 0 24 24" height={size} fill={color}>
      <title>Facebook</title>
      <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
    </svg>
  );
}
