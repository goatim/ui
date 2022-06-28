import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { OrderBook } from '@fridaygame/client';
import OrderBookThumbnail from '../../../src/trading/orders/orderBookThumbnail';

interface Props {}

export default {
  title: 'Trading/OrderBookThumbnail',
  component: OrderBookThumbnail,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const orderBook: OrderBook = {
  buying: [
    {
      nb_orders: 3,
      total_shares: 450,
      price_limit: 45000,
    },
    // {
    //   nb_orders: 6,
    //   total_shares: 7850,
    //   price_limit: 44200,
    // },
    // {
    //   nb_orders: 10,
    //   total_shares: 658,
    //   price_limit: 44100,
    // },
    // {
    //   nb_orders: 3,
    //   total_shares: 47,
    //   price_limit: 40000,
    // },
    // {
    //   nb_orders: 56,
    //   total_shares: 9892,
    //   price_limit: 39000,
    // },
  ],
  selling: [
    {
      nb_orders: 56,
      total_shares: 450,
      price_limit: 47000,
    },
    {
      nb_orders: 2,
      total_shares: 7850,
      price_limit: 48000,
    },
    {
      nb_orders: 4,
      total_shares: 456,
      price_limit: 49100,
    },
    {
      nb_orders: 5,
      total_shares: 47,
      price_limit: 52000,
    },
    {
      nb_orders: 5,
      total_shares: 9892,
      price_limit: 60000,
    },
  ],
};
const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <OrderBookThumbnail orderBook={orderBook} />
);

export const Default = Template.bind({});
