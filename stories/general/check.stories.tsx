import { Check } from '../../src';

interface Props {
  active?: boolean;
}

export default {
  title: 'General/Check',
  component: Check,
  argTypes: {
    active: {
      control: {
        type: 'boolean',
      },
    },
  },
};

function Template({ active }: Props) {
  return <Check active={active} />;
}

export const Default = Template.bind({});
