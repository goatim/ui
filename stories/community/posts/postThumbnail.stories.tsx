import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Club, Player, Asset, Post } from '@fridaygame/client';
import PostThumbnail from '../../../src/community/posts/postThumbnail';

interface Props {}

export default {
  title: 'Community/PostThumbnail',
  component: PostThumbnail,
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
  resolved_short_position: 'ATT',
  side: 'left',
  resolved_position: 'Attaquant centre',
};

const asset: Asset = {
  id: 'as_Ded512',
  entity: 'pl_de45d54DD',
  type: 'player',
  first_name: 'Kylian',
  last_name: 'Mbappé',
  description: '',
  slug: 'kylian-mbappe',
  total_shares: 450,
  quotation: 2750,
  day_variation: 345,
  player,
};

const newOrderPost: Post<'orders'> = {
  id: 'ps_qdqed654q5d61',
  creation: '2022-06-23T17:31:41.171+02:00',
  publication_date: '2022-06-23T17:31:41.171+02:00',
  type: 'orders',
  payload: [
    {
      id: '1',
      type: 'buy',
      nb_shares: 42,
      price_limit: 42200,
      asset,
    },
    {
      id: '2',
      type: 'sell',
      nb_shares: 42,
      price_limit: 42200,
      asset,
    },
  ],
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <PostThumbnail post={newOrderPost} />
);

export const Default = Template.bind({});
