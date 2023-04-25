import { GoatimCoinsGains, GoatimCoinsGainsSize } from '../../src';

interface Props {
  variation?: number;
  size?: GoatimCoinsGainsSize;
}

export default {
  title: 'Market/GoatimCoinsGains',
  component: GoatimCoinsGains,
  argTypes: {
    variation: {
      control: {
        type: 'number',
        step: 100,
      },
    },
    size: {
      control: {
        options: ['small', 'medium', 'big'],
        type: 'select',
      },
    },
  },
};

function Template({ variation, size }: Props) {
  return <GoatimCoinsGains gains={variation} size={size} />;
}

export const Default = Template.bind({});
