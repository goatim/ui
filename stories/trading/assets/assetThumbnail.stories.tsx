import { StoryFn } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Club, Player, QuotationHistory } from '@goatim/client';
import { AssetThumbnail, AssetThumbnailProps } from '../../../src';

export default {
  title: 'Trading/AssetThumbnail',
  component: AssetThumbnail,
  argTypes: {
    shape: {
      options: ['box', 'text'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['narrow', 'small', 'medium', 'big', 'large', 'full'],
      control: {
        type: 'select',
      },
    },
    theme: {
      options: ['default', 'darker', 'lighter'],
      control: {
        type: 'select',
      },
    },
    showQuotation: {
      control: {
        type: 'boolean',
      },
    },
  },
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
  resolved_short_position: 'ATT',
};

const quotationHistory: QuotationHistory = {
  data: [
    {
      t: 1646755289000,
      a: 42,
      o: 0,
      c: 0,
      h: 0,
      l: 0,
      v: 0,
    },
    {
      t: 1647273689000,
      a: 75,
      o: 0,
      c: 0,
      h: 0,
      l: 0,
      v: 0,
    },
    {
      t: 1647373889000,
      a: 23,
      o: 0,
      c: 0,
      h: 0,
      l: 0,
      v: 0,
    },
    {
      t: 1647532889000,
      a: 125,
      o: 0,
      c: 0,
      h: 0,
      l: 0,
      v: 0,
    },
    {
      t: 1648137689000,
      a: 23,
      o: 0,
      c: 0,
      h: 0,
      l: 0,
      v: 0,
    },
  ],
  variation: 0.25,
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
  day_variation: 0.345,
  player,
  quotation_history: quotationHistory,
};

const Template: StoryFn<JSXElementConstructor<AssetThumbnailProps>> = ({
  shape,
  size,
  theme,
  showQuotation,
}: AssetThumbnailProps) => (
  <AssetThumbnail
    asset={asset}
    shape={shape}
    size={size}
    theme={theme}
    showQuotation={showQuotation}
  />
);

export const Default = Template.bind({});
