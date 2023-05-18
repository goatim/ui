import { Asset, Club, Player } from '@goatim/client';
import { AssetThumbnail, Table, TableColumn, TableItem } from '../../src';

interface Props {
  active?: boolean;
}

export default {
  title: 'General/Table',
  component: Table,
  argTypes: {
    active: {
      control: {
        type: 'boolean',
      },
    },
  },
};

interface TestItem extends TableItem {
  asset?: Asset;
  nb_shares?: number;
  quotation?: number;
  dividend?: number;
}

const columns: TableColumn<TestItem>[] = [
  {
    key: 'asset',
    label: 'Joueur',
    cellComponent: ({ item }) =>
      item.asset ? <AssetThumbnail asset={item.asset} shape="text" showQuotation={false} /> : null,
  },
  { key: 'nb_shares', label: 'Act' },
  { key: 'quotation', label: 'Val' },
  { key: 'dividend', label: 'Div' },
];

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
};

const items: TestItem[] = [
  {
    id: '1',
    asset,
    nb_shares: 255,
    quotation: 50000,
    dividend: 550,
  },
  {
    id: '2',
    asset,
    nb_shares: 255,
    quotation: 50000,
    dividend: 550,
  },
  {
    id: '3',
    asset,
    nb_shares: 255,
    quotation: 50000,
    dividend: 550,
  },
];

function Template() {
  return <Table<TestItem> columns={columns} items={items} />;
}

export const Default = Template.bind({});
