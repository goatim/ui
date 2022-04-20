import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import PercentageVariation, {
  PercentageVariationShape,
  PercentageVariationSize,
} from '../../src/market/percentageVariation';

interface Props {
  variation?: number;
  size?: PercentageVariationSize;
  shape?: PercentageVariationShape;
}

export default {
  title: 'Market/PercentageVariation',
  component: PercentageVariation,
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
    shape: {
      control: {
        options: ['text', 'filled'],
        type: 'select',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  variation,
  size,
  shape,
}: Props) => <PercentageVariation variation={variation} size={size} shape={shape} />;

export const Default = Template.bind({});

Default.args = {
  variation: 50,
  size: 'small',
  shape: 'text',
};
