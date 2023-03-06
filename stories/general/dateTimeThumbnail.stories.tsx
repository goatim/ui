import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { DateTimeThumbnail } from '../../src/general/dateTimeThumbnail';

interface Props {}

export default {
  title: 'General/DateTimeThumbnail',
  component: DateTimeThumbnail,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <DateTimeThumbnail
    label="Coup d'envoi"
    dateTime="2022-08-29T09:54:52.696+02:00"
    size="medium"
    countdown
    align="center"
    theme="dark"
  />
);

export const Default = Template.bind({});

Default.args = {};
