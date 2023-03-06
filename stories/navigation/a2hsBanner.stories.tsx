import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { A2HSBanner } from '../../src';

export default {
  title: 'Navigation/A2HSBanner',
  component: A2HSBanner,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<unknown>>;

const Template: ComponentStory<JSXElementConstructor<unknown>> = () => (
  <A2HSBanner onDismiss={() => undefined} />
);

export const Default = Template.bind({});

Default.args = {};
