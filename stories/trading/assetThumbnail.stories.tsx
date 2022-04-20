import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Player, Club } from '@fridaygame/client';
import AssetThumbnail, {
  AssetThumbnailSize,
  AssetThumbnailTheme,
} from '../../src/trading/assetThumbnail';

interface Props {
  size?: AssetThumbnailSize;
  theme?: AssetThumbnailTheme;
}

export default {
  title: 'Trading/AssetThumbnail',
  component: AssetThumbnail,
  argTypes: {
    size: {
      options: ['inline', 'small', 'medium', 'big'],
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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size, theme }: Props) => (
  <AssetThumbnail asset={asset} size={size} theme={theme} onClick={() => undefined} />
);

export const Default = Template.bind({});

Default.args = {
  size: 'small',
  theme: 'default',
};
