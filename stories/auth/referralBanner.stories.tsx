import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { ReferralBanner } from '../../src';

export default {
  title: 'Auth/ReferralBanner',
  component: ReferralBanner,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<unknown>>;

const Template: ComponentStory<JSXElementConstructor<unknown>> = () => (
  <ReferralBanner referralCode="F5ZPM6" onDismiss={() => undefined} />
);

export const Default = Template.bind({});

Default.args = {};
