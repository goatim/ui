import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { NotificationIcon } from '../../../src';

interface Props {
  event?: string;
}

export default {
  title: 'Community/NotificationIcon',
  component: NotificationIcon,
  argTypes: {
    name: {
      options: ['order_match'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ event }: Props) => (
  <NotificationIcon event={event} />
);

export const Default = Template.bind({});
