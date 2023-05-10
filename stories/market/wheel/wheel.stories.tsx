import { WheelDraw } from '@goatim/client';
import { Wheel, WheelProps } from '../../../src';

export default {
  title: 'Market/Wheel',
  component: Wheel,
  argTypes: {
    hasTicket: {
      type: 'boolean',
    },
  },
};

const wheelDraw: WheelDraw = {
  id: 'wd_dz56qzd',
  type: 'ticket',
};

function onWheelSpin(): Promise<WheelDraw> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(wheelDraw);
    }, 500);
  });
}

function Template({ size, hasTicket }: WheelProps) {
  return <Wheel size={size} hasTicket={hasTicket} onWheelSpin={onWheelSpin} />;
}

export const Default = Template.bind({});
