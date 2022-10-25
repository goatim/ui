import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import SoccerLoader from '../../src/general/soccerLoader';

interface Props {}

export default {
  title: 'General/SoccerLoader',
  component: SoccerLoader,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => <SoccerLoader />;

export const Default = Template.bind({});
