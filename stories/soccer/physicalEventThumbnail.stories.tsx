import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { PhysicalEvent } from '@fridaygame/client';
import PhysicalEventThumbnail from '../../src/soccer/physicalEventThumbnail';

interface Props {}

export default {
  title: 'Soccer/PhysicalEventThumbnail',
  component: PhysicalEventThumbnail,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const physicalEvent: PhysicalEvent = {
  id: 'ph_qedfz489',
  type: 'match',
  name: 'PSG - FC Nantes',
  start: '2022-04-29T09:54:52.696+02:00',
  end: '2022-05-20T09:54:52.696+02:00',
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <PhysicalEventThumbnail physicalEvent={physicalEvent} />
);

export const Default = Template.bind({});

Default.args = {};
