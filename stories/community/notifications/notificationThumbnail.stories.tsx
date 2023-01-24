import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import {
  Notification,
  Club,
  Player,
  Asset,
  NotificationEventMap,
  User,
  Wallet,
  Match,
  Composition,
} from '@fridaygame/client';
import NotificationThumbnail from '../../../src/community/notifications/notificationThumbnail';

interface Props {
  event: keyof NotificationEventMap;
}

export default {
  title: 'Community/NotificationThumbnail',
  component: NotificationThumbnail,
  argTypes: {
    event: {
      control: 'select',
      options: ['order_match', 'closed_match'],
      defaultValue: 'order_match',
    },
  },
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
  name: 'Kylian Mbappé',
  description: '',
  slug: 'kylian-mbappe',
  total_shares: 450,
  quotation: 2750,
  day_variation: 345,
  player,
};

const owner: User = {
  id: 'us_sopsaA',
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  pseudo: 'Player 1',
  first_name: 'Lucien',
  last_name: 'Perouze',
};

const wallet: Wallet = {
  id: 'wa_sopsaA',
  owner,
  picture: {
    id: 'me_dehHH',
    thumbnail_url: 'https://picsum.photos/200',
  },
  name: 'Smart Monkey',
};

const match: Match = {
  id: 'ma_hqedh654qed',
  creator: wallet,
  title: 'Match de la semaine',
  slug: 'match-de-la-semaine',
  beginning: '2022-10-29T09:54:52.696+02:00',
  end: '2023-06-20T09:54:52.696+02:00',
  is_public: true,
  nb_participants: 213,
};

const composition: Composition = {
  id: 'co_qkuehd456',
  wallet: {
    id: 'wa_sopsaA',
    picture: {
      id: 'me_dehHH',
      thumbnail_url: 'https://picsum.photos/200?a=a',
    },
    name: 'Leo',
    amount: 40000000,
  },
  position: 1,
  dividends_percentage: 1.23,
  dividends_gains: 45000,
  score: 1230,
};

const orderMatch: Notification<'order_match'> = {
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

const closedMatch: Notification<'closed_match'> = {
  id: 'no_qdqed654q5d61',
  creation: '2022-06-23T17:31:41.171+02:00',
  event: 'closed_match',
  payload: {
    match,
    composition,
  },
};

const notifications = {
  order_match: orderMatch,
  closed_match: closedMatch,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  event = 'order_match',
}: Props) => <NotificationThumbnail notification={notifications[event]} />;

export const Default = Template.bind({});
