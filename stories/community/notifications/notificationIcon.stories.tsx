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
};

function Template({ event }: Props) {
  return <NotificationIcon event={event} />;
}

export const Default = Template.bind({});
