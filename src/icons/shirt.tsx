import { ReactElement } from 'react';
import colors from '../styles/_colors.scss';
import { IconProps } from './icon';

export default function Shirt({
  size = 15,
  color = colors.VIOLET,
}: IconProps): ReactElement<SVGElement> {
  return (
    <svg viewBox="0 0 141.73 141.73" height={size} fill={color}>
      <title>Shirt</title>
      <path d="M109.23,68.9l-7.69-21.78c-.45-1.29-.84-2.65-1.21-4l-.17-.56a11.6,11.6,0,0,0-6.45-7.05c-5.81-2.91-16.09-8.78-16.19-8.84a1.46,1.46,0,0,0-.74-.19H65a1.46,1.46,0,0,0-.74.19c-.11.06-10.39,5.93-16.2,8.84a11.6,11.6,0,0,0-6.45,7.05l-.16.56c-.38,1.32-.77,2.68-1.22,4L32.5,68.9a1.47,1.47,0,0,0,.22,1.37c.2.27,5,6.51,11.54,6.51a1.5,1.5,0,0,0,1-.43l5.21-5.21a62.31,62.31,0,0,1,1.14,8.6,54.1,54.1,0,0,1-1.5,8.38c-1.31,5.92-2.94,13.29-2.94,19.71a1.49,1.49,0,0,0,0,.36c.26,1.07,2.39,6,18.58,6.9a1.37,1.37,0,0,0,.59.13,1.15,1.15,0,0,0,.41-.08c1.26,0,2.6.08,4,.08s2.77,0,4-.08a1.15,1.15,0,0,0,.41.08,1.37,1.37,0,0,0,.59-.13c16.18-.86,18.31-5.83,18.58-6.9a1.49,1.49,0,0,0,0-.36c0-6.42-1.63-13.79-2.94-19.71a54.1,54.1,0,0,1-1.5-8.38,62.31,62.31,0,0,1,1.14-8.6l5.21,5.21a1.5,1.5,0,0,0,1,.43c6.58,0,11.34-6.24,11.54-6.51A1.49,1.49,0,0,0,109.23,68.9ZM65.35,29.47h11c.73.41,2.56,1.45,4.83,2.71v.24H60.09ZM98.08,73.8l-1.15-1.15a32.93,32.93,0,0,0,4.56-3.7,1.48,1.48,0,0,0-2.09-2.09,29.47,29.47,0,0,1-4.61,3.65l-2.88-2.88c.59-3,1.09-5.26,1.11-5.32a1.48,1.48,0,0,0-2.89-.64c-.13.55-3,13.52-3,18.07a54.23,54.23,0,0,0,1.57,9,97,97,0,0,1,2.87,18.79c-.26.42-1.74,2.27-7.39,3.53V76.78a1.48,1.48,0,1,0-3,0v34.84c-1.31.19-2.79.35-4.44.46V79.74a1.48,1.48,0,1,0-3,0v32.48c-.94,0-1.93,0-3,0s-2,0-3,0V79.74a1.48,1.48,0,1,0-3,0v32.34c-1.66-.11-3.13-.27-4.44-.45V76.78a1.48,1.48,0,0,0-3,0v34.3c-5.69-1.26-7.14-3.13-7.39-3.53A96.88,96.88,0,0,1,53,88.76a54.23,54.23,0,0,0,1.57-9c0-4.55-2.87-17.52-3-18.07a1.45,1.45,0,0,0-1-1.11,1.48,1.48,0,0,0-1.89,1.76s.52,2.35,1.11,5.32L47,70.52a29.09,29.09,0,0,1-4.62-3.65,1.47,1.47,0,0,0-2.09,0,1.49,1.49,0,0,0,0,2.09,32.44,32.44,0,0,0,4.57,3.7l-1.15,1.15c-3.8-.3-6.92-3.4-8.09-4.72l7.4-21c.49-1.38.89-2.79,1.28-4.14l.16-.56a8.49,8.49,0,0,1,4.27-4.86v4.22a1.48,1.48,0,1,0,3,0V37l3.05-1.63h1.38v4.44a1.48,1.48,0,0,0,3,0V35.38h4.44v4.44a1.48,1.48,0,0,0,3,0V35.38h7.4v4.44a1.48,1.48,0,0,0,3,0V35.38h4.44v4.44a1.48,1.48,0,0,0,3,0V35.38H87l1.57.84v6.55a1.48,1.48,0,1,0,3,0v-5l.82.41a8.76,8.76,0,0,1,4.93,5.22l.16.56c.39,1.36.79,2.77,1.28,4.14l7.4,21C105,70.4,101.87,73.5,98.08,73.8Z" />
      <path d="M64.41,44.58a1.47,1.47,0,0,0-1.23-.3l-7.39,1.48a1.48,1.48,0,0,0-1.18,1.45v4.43a1.47,1.47,0,0,0,1.47,1.48V70.87a1.48,1.48,0,0,0,1.48,1.47h5.92A1.47,1.47,0,0,0,65,70.87V45.73A1.45,1.45,0,0,0,64.41,44.58ZM62,69.39H59V51.64a1.47,1.47,0,0,0-1.48-1.47V48.42L62,47.53Z" />
      <path d="M82.32,44.75a1.46,1.46,0,0,0-1.1-.5H72.35a1.46,1.46,0,0,0-1.1.5l-3,3.31a1.48,1.48,0,0,0-.38,1V67.55a1.49,1.49,0,0,0,.38,1l3,3.31a1.48,1.48,0,0,0,1.1.49h8.87a1.48,1.48,0,0,0,1.1-.49l3-3.31a1.49,1.49,0,0,0,.38-1V49a1.48,1.48,0,0,0-.38-1ZM82.7,67l-2.14,2.4H73L70.87,67V49.61L73,47.21h7.54l2.15,2.4Z" />
      <path d="M76.78,51.64a1.48,1.48,0,0,0-1.47,1.48V63.47a1.48,1.48,0,1,0,3,0V53.12A1.48,1.48,0,0,0,76.78,51.64Z" />
    </svg>
  );
}
