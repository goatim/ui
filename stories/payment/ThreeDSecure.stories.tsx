import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { ThreeDSecure } from '../../src';

interface Props {}

export default {
  title: 'Payment/ThreeDSecure',
  component: ThreeDSecure,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => {
  return (
    <ThreeDSecure
      url="https://gateway.dimoco-payments.eu/test/acs/b5bfb83f892ee6c45ab6"
      returnUrl="https://www.google.fr/"
      onReturn={() => console.log('Returned !')}
    />
  );
};

export const Default = Template.bind({});

Default.args = {};
