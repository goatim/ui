import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Club, Ipo, Player } from '@fridaygame/client';
import {
  IpoThumbnail,
  IpoThumbnailShape,
  IpoThumbnailSize,
} from '../../../src';

interface Props {
  size?: IpoThumbnailSize;
  shape?: IpoThumbnailShape;
}

export default {
  title: 'Trading/IpoThumbnail',
  component: IpoThumbnail,
  argTypes: {
    size: {
      options: ['narrow', 'small', 'big'],
      control: {
        type: 'select',
      },
    },
    shape: {
      options: ['box', 'banner'],
      control: {
        type: 'select',
      },
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
  first_name: 'Kylian',
  last_name: 'Mbappé',
  description: '',
  slug: 'kylian-mbappe',
  total_shares: 450,
  quotation: 2750,
  session_variation: 345,
  player,
};

const ipo: Ipo = {
  id: 'ip_qd54zd321d3',
  // beginning: '2022-10-23T17:31:41.171+02:00',
  asset,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size, shape }: Props) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
    <IpoThumbnail ipo={ipo} size={size} shape={shape} />
  </div>
);

export const Default = Template.bind({});
