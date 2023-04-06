import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { ReferralPopup } from '../../src';

export default {
  title: 'Auth/ReferralPopup',
  component: ReferralPopup,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<unknown>>;

const Template: ComponentStory<JSXElementConstructor<unknown>> = () => (
  <ReferralPopup referralCode="F5ZPM6" />
);

export const Default = Template.bind({});

Default.args = {};
