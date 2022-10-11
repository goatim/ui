import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import CreditCardForm from '../../src/payment/creditCardForm';

interface Props {}

export default {
  title: 'Payment/CreditCardForm',
  component: CreditCardForm,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => <CreditCardForm />;

export const Default = Template.bind({});

Default.args = {};
