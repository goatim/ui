import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import ShopBanner from '../../src/market/shopBanner';

interface Props {}

export default {
  title: 'Market/ShopBanner',
  component: ShopBanner,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => <ShopBanner />;

export const Default = Template.bind({});

Default.args = {
  amount: 50,
  size: 'small',
  theme: 'dark',
};
