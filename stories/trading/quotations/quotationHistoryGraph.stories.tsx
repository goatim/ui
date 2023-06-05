import { QuotationHistory } from '@goatim/client';
import { QuotationHistoryGraph } from '../../../src';

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
};

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
      a: 222,
      o: 0,
      c: 0,
      h: 0,
      l: 0,
      v: 0,
    },
    {
      t: 1647373889000,
      a: 23000,
      o: 0,
      c: 0,
      h: 0,
      l: 0,
      v: 0,
    },
    {
      t: 1647532889000,
      a: 125000,
      o: 0,
      c: 0,
      h: 0,
      l: 0,
      v: 0,
    },
    {
      t: 1648137689000,
      a: 23000,
      o: 0,
      c: 0,
      h: 0,
      l: 0,
      v: 0,
    },
  ],
  variation: 0.25,
};

function Template({ height }: Props) {
  return (
    <div style={{ width: 600, height }}>
      <QuotationHistoryGraph quotationHistory={quotationHistory} />
    </div>
  );
}

export const Default = Template.bind({});
