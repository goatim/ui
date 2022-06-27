import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Notification, OrderMatchEventPayload, Club, Player, Asset } from '@fridaygame/client';
import NotificationList from '../../src/notifications/notificationList';

interface Props {}

export default {
  title: 'Notifications/NotificationList',
  component: NotificationList,
} as ComponentMeta<JSXElementConstructor<Props>>;

const club: Club = {
  id: '1',
  name: 'Paris Saint-Germain',
  slug: 'paris-saint-germain',
  description: '',
  icon: {
    id: '1',
    url: 'https://www.psg.fr/img/logos/psg-logo.png',
    large_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    medium_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
    thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  },
};

const player: Player = {
  id: '1',
  club,
  name: 'Kylian Mbappé',
  number: 10,
  position: 'attacking_midfield',
  side: 'left',
  textual_position: 'Attaquant centre',
};

const asset: Asset = {
  id: 'as_Ded512',
  entity: 'pl_de45d54DD',
  type: 'player',
  name: 'Kylian Mbappé',
  description: '',
  slug: 'kylian-mbappe',
  shares: 450,
  quotation: 2750,
  session_variation: 345,
  player,
};

const notification: Notification<OrderMatchEventPayload> = {
  id: 'no_qdqed654q5d61',
  creation: '2022-06-23T17:31:41.171+02:00',
  event: 'order_match',
  payload: {
    type: 'buy',
    asset,
    nb_matched: 45,
    total: 150,
  },
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <NotificationList notifications={Array(10).fill(notification)} />
);

export const Default = Template.bind({});
