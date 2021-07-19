import { ReactElement } from 'react';
import colors from '../styles/_colors.scss';
import { IconProps } from './icon';

export default function Alert({
  size = 15,
  color = colors.VIOLET,
}: IconProps): ReactElement<SVGElement> {
  return (
    <svg viewBox="0 0 512 512" height={size} fill={color}>
      <title>Alert</title>
      <path d="M505.403,406.394L295.389,58.102c-8.274-13.721-23.367-22.245-39.39-22.245c-16.023,0-31.116,8.524-39.391,22.246L6.595,406.394c-8.551,14.182-8.804,31.95-0.661,46.37c8.145,14.42,23.491,23.378,40.051,23.378h420.028c16.56,0,31.907-8.958,40.052-23.379C514.208,438.342,513.955,420.574,505.403,406.394z M477.039,436.372c-2.242,3.969-6.467,6.436-11.026,6.436H45.985c-4.559,0-8.784-2.466-11.025-6.435c-2.242-3.97-2.172-8.862,0.181-12.765L245.156,75.316c2.278-3.777,6.433-6.124,10.844-6.124c4.41,0,8.565,2.347,10.843,6.124l210.013,348.292C479.211,427.512,479.281,432.403,477.039,436.372z" />
      <path d="M256.154,173.005c-12.68,0-22.576,6.804-22.576,18.866c0,36.802,4.329,89.686,4.329,126.489c0.001,9.587,8.352,13.607,18.248,13.607c7.422,0,17.937-4.02,17.937-13.607c0-36.802,4.329-89.686,4.329-126.489C278.421,179.81,268.216,173.005,256.154,173.005z" />
      <path d="M256.465,353.306c-13.607,0-23.814,10.824-23.814,23.814c0,12.68,10.206,23.814,23.814,23.814c12.68,0,23.505-11.134,23.505-23.814C279.97,364.13,269.144,353.306,256.465,353.306z" />
    </svg>
  );
}
