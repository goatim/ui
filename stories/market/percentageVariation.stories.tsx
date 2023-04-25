import { PercentageVariation, PercentageVariationShape, PercentageVariationSize } from '../../src';

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
};

function Template({ variation, size, shape }: Props) {
  return <PercentageVariation variation={variation} size={size} shape={shape} />;
}

export const Default = Template.bind({});
