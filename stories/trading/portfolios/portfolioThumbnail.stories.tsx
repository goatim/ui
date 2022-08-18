import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, BoosterInUse, Club, Player, Portfolio, QuotationHistory } from '@fridaygame/client';
import { BrowserRouter } from 'react-router-dom';
import PortfolioThumbnail, {
  PortfolioThumbnailSize,
} from '../../../src/trading/portfolios/portfolioThumbnail';

interface Props {
  size: PortfolioThumbnailSize;
}

export default {
  title: 'Trading/PortfolioThumbnail',
  component: PortfolioThumbnail,
  argTypes: {
    size: {
      options: ['narrow', 'medium'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: [(story) => <BrowserRouter>{story()}</BrowserRouter>],
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
  resolved_position: 'Attaquant centre',
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

const activeBoosterInUse: BoosterInUse = {
  id: 'bi_dqqzjkoid55',
  portfolio: 'po_cUkDdk9VW4PwvsF',
  leverage: 2,
  start_quotation: 42220,
  stop_quotation: 422200,
  gains: 42000,
  variation: 3200,
};

const inactiveBoosterInUse1: BoosterInUse = {
  id: 'bi_dqqzskoid55',
  portfolio: 'po_cUkDdk9VW4PwvsF',
  leverage: 2,
  start_quotation: 42220,
  stop_quotation: 422200,
  gains: -2000,
  variation: -120,
  stopped_at: '2021-11-04 14:07:26.679000 +00:00',
};

const inactiveBoosterInUse2: BoosterInUse = {
  id: 'bi_dqqzdqzdskoid55',
  portfolio: 'po_cUkDdk9VW4PwvsF',
  leverage: 10,
  start_quotation: 42220,
  stop_quotation: 422200,
  gains: 98000,
  variation: 3200,
  stopped_at: '2021-11-04 14:07:26.679000 +00:00',
};

const portfolio: Portfolio = {
  id: 'po_cUkDdk9VW4PwvsF',
  asset,
  nb_shares: 26,
  buy_price: 42000,
  gains: 36000,
  variation: 2500,
  boosters: [activeBoosterInUse, inactiveBoosterInUse1, inactiveBoosterInUse2],
  dividends_gains: 45220,
  total_gains: 95002,
  total_variations: 1055,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size }: Props) => (
  <PortfolioThumbnail
    portfolio={portfolio}
    size={size}
    assetOnClick={(_asset) => {
      console.log(_asset.id);
    }}
    onStopBooster={() => undefined}
    onSell={() => undefined}
    onBoost={() => undefined}
  />
);

export const Default = Template.bind({});
