import { ReactElement, useEffect } from 'react';
import { Asset, Club, Notification, Player } from '@goatim/client';
import { NotificationsContext, useNotificationsContext } from '../../../src';

export default {
  title: 'Community/NotificationsContext',
  component: NotificationsContext,
};

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
  first_name: 'Kylian',
  last_name: 'Mbappé',
  number: 10,
  position: 'forward',
  side: 'left',
  resolved_position: 'Attaquant centre',
};

const asset: Asset = {
  id: 'as_Ded512',
  entity: 'pl_de45d54DD',
  type: 'player',
  name: 'Mbappé',
  description: '',
  slug: 'kylian-mbappe',
  total_shares: 450,
  quotation: 2750,
  day_variation: 0.2,
  player,
};

const notification1: Notification<'order_match'> = {
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

const notification2: Notification<'order_match'> = {
  id: 'no_qdqzdqzd1',
  creation: '2022-06-23T17:31:41.171+02:00',
  event: 'order_match',
  payload: {
    type: 'sell',
    asset,
    nb_matched: 45,
    total: 150,
  },
};

const notification3: Notification<'order_match'> = {
  id: 'no_qdqvdsvq5d61',
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
    pushNotification(notification1, {
      onDismiss: () => console.log('Dismiss !'),
      onClick: () => console.log('Click !'),
      timeout: 10000,
    });
    pushNotification(notification2);
    setTimeout(() => {
      pushNotification(notification3);
    }, 1000);
  }, [pushNotification]);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
}

function Template() {
  return (
    <NotificationsContext>
      <App />

      <p>Hello World!</p>
    </NotificationsContext>
  );
}

export const Default = Template.bind({});
