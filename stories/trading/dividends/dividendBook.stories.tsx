import { Dividend } from '@goatim/client';
import { DividendBook } from '../../../src';

export default {
  title: 'Trading/DividendBook',
  component: DividendBook,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['narrow', 'small', 'medium', 'big'],
      },
    },
  },
};

const dividends: Dividend[] = [
  {
    id: 'di_qdz7dhzd354qd51qz3d',
    creation: '2023-03-12T10:09:41.076+02:00',
    percentage: 0.12,
    amount: 4200,
  },
  {
    id: 'di_qd654251qz3d',
    creation: '2023-03-05T10:09:41.076+02:00',
    percentage: 0.05,
    amount: 1000,
  },
  {
    id: 'di_qqzd5454qd51qzdd',
    creation: '2023-02-25T10:09:41.076+02:00',
    percentage: 0.85,
    amount: 27000,
  },
  {
    id: 'di_qdzqzd24fht51qz3d',
    creation: '2023-02-15T10:09:41.076+02:00',
    percentage: 0.66,
    amount: 3120,
  },
  {
    id: 'di_qdg8654qd51qz3d',
    creation: '2023-02-06T10:09:41.076+02:00',
    percentage: 0.45,
    amount: 5620,
  },
];

function Template() {
  return <DividendBook dividends={dividends} averagePercentage={0.06} averageGains={5000} />;
}

export const Default = Template.bind({});
