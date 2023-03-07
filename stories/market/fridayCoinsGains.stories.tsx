import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
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
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ variation, size }: Props) => (
  <GoatimCoinsGains variation={variation} size={size} />
);

export const Default = Template.bind({});

Default.args = {
  variation: 50,
  size: 'small',
};
