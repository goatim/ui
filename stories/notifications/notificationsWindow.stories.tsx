import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor, ReactElement, useEffect } from 'react';
import { Notification, OrderMatchEventPayload, Club, Player, Asset } from '@fridaygame/client';
import NotificationsWindow, {
  useNotificationsContext,
} from '../../src/notifications/notificationsWindow';

interface Props {}

export default {
  title: 'Notifications/NotificationsWindow',
  component: NotificationsWindow,
} as ComponentMeta<JSXElementConstructor<Props>>;

const club: Club = {
  id: '1',
  name: 'Paris Saint-Germain',
  slug: 'paris-saint-germain',
  description: '',
  icon: {
    id: '1',
    url: 'https://www.psg.fr/img/logos/psg-logo.png',
    large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
    medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
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
  total_shares: 450,
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

function App(): ReactElement {
  const { pushNotification } = useNotificationsContext();

  useEffect(() => {
    pushNotification(notification);
  }, [pushNotification]);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
}

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <NotificationsWindow>
    <App />
  </NotificationsWindow>
);

export const Default = Template.bind({});
