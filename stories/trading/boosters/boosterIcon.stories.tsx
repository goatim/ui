import { BoosterIcon, BoosterIconSize } from '../../../src';

interface Props {
  size?: BoosterIconSize;
  active?: boolean;
}

export default {
  title: 'Trading/BoosterIcon',
  component: BoosterIcon,
  argTypes: {
    size: {
      options: ['small', 'medium', 'big'],
      control: {
        type: 'select',
      },
    },
    active: {
      control: {
        type: 'boolean',
      },
    },
  },
};

function Template({ size, active }: Props) {
  return <BoosterIcon leverage={5} size={size} active={active} />;
}

export const Default = Template.bind({});
