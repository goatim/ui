import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Quotation } from '@fridaygame/client';
import QuotationGraph from '../../../src/trading/quotations/quotationGraph';

interface Props {
  height?: number;
}

export default {
  title: 'Trading/QuotationGraph',
  component: QuotationGraph,
  argTypes: {
    height: {
      type: 'number',
      control: {
        type: 'range',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const quotations: Quotation[] = [
  {
    t: 1646755289000,
    v: 42,
  },
  {
    t: 1647273689000,
    v: 75,
  },
  {
    t: 1647373889000,
    v: 23,
  },
  {
    t: 1647532889000,
    v: 125,
  },
  {
    t: 1648137689000,
    v: 23,
  },
];

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ height }: Props) => (
  <div style={{ width: 600, height }}>
    <QuotationGraph quotations={quotations} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  height: 45,
};
