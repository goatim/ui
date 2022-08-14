import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Player, Club, QuotationHistory } from '@fridaygame/client';
import AssetThumbnail, {
  AssetThumbnailPlayerFormat,
  AssetThumbnailShape,
  AssetThumbnailSize,
  AssetThumbnailTheme,
} from '../../../src/trading/assets/assetThumbnail';

interface Props {
  playerFormat?: AssetThumbnailPlayerFormat;
  shape?: AssetThumbnailShape;
  size?: AssetThumbnailSize;
  theme?: AssetThumbnailTheme;
}

export default {
  title: 'Trading/AssetThumbnail',
  component: AssetThumbnail,
  argTypes: {
    playerFormat: {
      options: ['extended', 'inline'],
      control: {
        type: 'select',
      },
    },
    shape: {
      options: ['box', 'text'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['inline', 'narrow', 'small', 'medium', 'big', 'full'],
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
  name: 'Kylian Mbappé',
  number: 10,
  position: 'attacking_midfield',
  side: 'left',
  textual_position: 'Attaquant centre',
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
  session_variation: 345,
  player,
  quotation_history: quotationHistory,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  playerFormat,
  shape,
  size,
  theme,
}: Props) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
    <div>
      <AssetThumbnail
        asset={asset}
        playerFormat={playerFormat}
        shape={shape}
        size={size}
        theme={theme}
        onClick={() => undefined}
      />
    </div>
  </div>
);

export const Default = Template.bind({});
