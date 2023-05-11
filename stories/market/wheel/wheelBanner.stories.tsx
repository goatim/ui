import { WheelBanner } from '../../../src';

export default {
  title: 'Market/WheelBanner',
  component: WheelBanner,
  argTypes: {
    hasTicket: {
      type: 'boolean',
    },
  },
};

function Template() {
  return <WheelBanner />;
}

export const Default = Template.bind({});
