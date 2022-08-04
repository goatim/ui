import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { QuotationHistory } from '@fridaygame/client';
import QuotationHistoryGraph from '../../../src/trading/quotations/quotationHistoryGraph';

interface Props {
  height?: number;
}

export default {
  title: 'Trading/QuotationHistoryGraph',
  component: QuotationHistoryGraph,
  argTypes: {
    height: {
      type: 'number',
      control: {
        type: 'range',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const quotationHistory: QuotationHistory = {
  data: [
    {
      t: 1646755289000,
      a: 42000,
      o: 0,
      c: 0,
      h: 0,
      l: 0,
      v: 0,
    },
    {
      t: 1647273689000,
      a: 75000,
      o: 0,
      c: 0,
      h: 0,
      l: 0,
      v: 0,
    },
    // {
    //   t: 1647373889000,
    //   a: 23000,
    //   o: 0,
    //   c: 0,
    //   h: 0,
    //   l: 0,
    //   v: 0,
    // },
    // {
    //   t: 1647532889000,
    //   a: 125000,
    //   o: 0,
    //   c: 0,
    //   h: 0,
    //   l: 0,
    //   v: 0,
    // },
    // {
    //   t: 1648137689000,
    //   a: 23000,
    //   o: 0,
    //   c: 0,
    //   h: 0,
    //   l: 0,
    //   v: 0,
    // },
  ],
  variation: 0.25,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ height }: Props) => (
  <div style={{ width: 600, height }}>
    <QuotationHistoryGraph quotationHistory={quotationHistory} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  height: 45,
};
