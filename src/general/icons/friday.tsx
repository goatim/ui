import { ReactElement } from 'react';
import { SvgIconProps } from './props';

export function Friday({ size = 15 }: SvgIconProps): ReactElement<SVGElement> {
  return (
    <svg viewBox="0 0 512 93.7" height={size}>
      <linearGradient
        id="friday-gradient"
        x1="0%"
        x2="100%"
        y1="0%"
        y2="0%"
        gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4B538F" />
        <stop offset="100%" stopColor="#E8376E" />
      </linearGradient>
      <title>Friday</title>
      <path d="M211,93.57H183.72V.13H211Z" />
      <polygon points="361.96 74.63 361.97 74.63 368.37 58.38 368.35 58.38 378.06 33.59 365.89 1.63 326.57 93.57 354.47 93.57 361.96 74.63" />
      <polygon points="396.64 0.13 372.55 0.13 381.86 24.62 394.95 58.38 375.48 58.38 369.11 74.63 401.21 74.63 408.57 93.57 436.47 93.57 396.64 0.13" />
      <path d="M318,26.16a39.64,39.64,0,0,0-11.31-14.67,48.16,48.16,0,0,0-16.56-8.64C284.76,1.22,279.46.08,269.41,0V0h-43V19h44.12c5.4,0,23.79,5,23.79,28.17C294.31,71.46,274.4,75,269.06,75H263.8V25.66H236.55v68H263.8v0h5.28a61.19,61.19,0,0,0,23.05-3.43,45.72,45.72,0,0,0,16.23-9.68,41,41,0,0,0,10.3-15,50.33,50.33,0,0,0,3.42-18.82A49,49,0,0,0,318,26.16Z" />
      <polygon points="27.25 18.87 27.33 18.87 27.33 0.13 0 0.13 0 93.57 27.25 93.57 27.25 55.75 64.73 55.75 64.73 36.94 27.25 36.94 27.25 18.87" />
      <rect x="34.11" y="0.13" width="30.62" height="18.74" />
      <polygon points="458.84 24.57 441.6 0.13 413.31 0.13 445.11 45.27 458.84 24.57" />
      <polygon points="483.31 0.13 449.35 51.29 449.36 51.3 449.36 93.57 476.6 93.57 476.6 50.76 512 0.13 483.31 0.13" />
      <path d="M145.59,57.2a33.37,33.37,0,0,0,4.24-1.35,27.56,27.56,0,0,0,10.4-7,27.16,27.16,0,0,0,5.57-9.23,30.71,30.71,0,0,0,1.73-10.15,31.74,31.74,0,0,0-1.73-10.31,27.29,27.29,0,0,0-5.57-9.38,27.89,27.89,0,0,0-10.4-7A40.47,40.47,0,0,0,134.42.13H81V19h8.3v0h30.17v.07h2.81c6.56,0,11.12-.25,13.66,1.39s3.81,4.69,3.81,9.14q0,4.44-1.63,6.81a8.52,8.52,0,0,1-5.28,3.23,47,47,0,0,1-10.43.88h-5.86V25.83H89.31V93.57h27.25V58.51h5.12L141.6,93.57h26Z" />
    </svg>
  );
}
