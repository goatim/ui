import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { FridayCoinsGains, FridayCoinsGainsSize } from '../../src';

interface Props {
  variation?: number;
  size?: FridayCoinsGainsSize;
}

export default {
  title: 'Market/FridayCoinsGains',
  component: FridayCoinsGains,
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
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ variation, size }: Props) => (
  <FridayCoinsGains variation={variation} size={size} />
);

export const Default = Template.bind({});

Default.args = {
  variation: 50,
  size: 'small',
};
