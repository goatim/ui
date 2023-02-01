import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import A2HSBanner from '../../src/navigation/a2hsBanner';

interface Props {}

export default {
  title: 'Navigation/A2HSBanner',
  component: A2HSBanner,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => <A2HSBanner />;

export const Default = Template.bind({});

Default.args = {};
