import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import FridayCoinsVariation, {
  FridayCoinsVariationSize,
} from '../../src/market/fridayCoinsVariation';

interface Props {
  variation?: number;
  size?: FridayCoinsVariationSize;
}

export default {
  title: 'Market/FridayCoinsVariation',
  component: FridayCoinsVariation,
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
  <FridayCoinsVariation variation={variation} size={size} />
);

export const Default = Template.bind({});

Default.args = {
  variation: 50,
  size: 'small',
};
