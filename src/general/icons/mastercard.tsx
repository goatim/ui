import { ReactElement } from 'react';
import IconProps from './props';

export default function Mastercard({ size = 15 }: IconProps): ReactElement<SVGElement> {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 1000.008 618.03103"
      height={size}>
      <g transform="matrix(3.3557321,0,0,3.3557321,-1551.7864,-2007.0469)">
        <g transform="matrix(2.5579399,0,0,2.5579399,884.90115,-11.427398)">
          <g transform="translate(-502.86126,-22.613497)">
            <rect fill="#ff5f00" height="56.599998" width="31.5" y="268.60001" x="380.20001" />
            <path
              fill="#eb001b"
              d="m 382.2,296.9 c 0,-11.5 5.4,-21.7 13.7,-28.3 -6.1,-4.8 -13.8,-7.7 -22.2,-7.7 -19.9,0 -36,16.1 -36,36 0,19.9 16.1,36 36,36 8.4,0 16.1,-2.9 22.2,-7.7 -8.3,-6.5 -13.7,-16.8 -13.7,-28.3 z"
            />
            <path
              fill="#f79e1b"
              d="m 454.2,296.9 c 0,19.9 -16.1,36 -36,36 -8.4,0 -16.1,-2.9 -22.2,-7.7 8.4,-6.6 13.7,-16.8 13.7,-28.3 0,-11.5 -5.4,-21.7 -13.7,-28.3 6.1,-4.8 13.8,-7.7 22.2,-7.7 19.9,0 36,16.2 36,36 z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
