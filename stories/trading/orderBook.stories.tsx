import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { OrderBook } from '@fridaygame/client';
import OrderBookThumbnail from '../../src/trading/orderBookThumbnail';

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
      total_quantity: 450,
      price_limit: 45000,
    },
    // {
    //   nb_orders: 6,
    //   total_quantity: 7850,
    //   price_limit: 44200,
    // },
    // {
    //   nb_orders: 10,
    //   total_quantity: 658,
    //   price_limit: 44100,
    // },
    // {
    //   nb_orders: 3,
    //   total_quantity: 47,
    //   price_limit: 40000,
    // },
    // {
    //   nb_orders: 56,
    //   total_quantity: 9892,
    //   price_limit: 39000,
    // },
  ],
  selling: [
    {
      nb_orders: 56,
      total_quantity: 450,
      price_limit: 47000,
    },
    {
      nb_orders: 2,
      total_quantity: 7850,
      price_limit: 48000,
    },
    {
      nb_orders: 4,
      total_quantity: 456,
      price_limit: 49100,
    },
    {
      nb_orders: 5,
      total_quantity: 47,
      price_limit: 52000,
    },
    {
      nb_orders: 5,
      total_quantity: 9892,
      price_limit: 60000,
    },
  ],
};
const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <OrderBookThumbnail orderBook={orderBook} />
);

export const Default = Template.bind({});
