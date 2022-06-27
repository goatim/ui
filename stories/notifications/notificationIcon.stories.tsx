import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import NotificationIcon from '../../src/notifications/notificationIcon';

interface Props {
  event?: string;
}

export default {
  title: 'Notifications/NotificationIcon',
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
