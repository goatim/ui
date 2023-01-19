import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Asset, Club, Player, Portfolio } from '@fridaygame/client';
import PortfolioCarousel, {
  PortfolioCarouselSize,
} from '../../../src/trading/portfolios/portfolioCarousel';

interface Props {
  size?: PortfolioCarouselSize;
}

export default {
  title: 'Trading/PortfolioCarousel',
  component: PortfolioCarousel,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'big'],
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
  day_variation: 345,
  player,
};

const portfolio: Portfolio = {
  id: 'po_cUkDdk9VW4PwvsF',
  asset,
  nb_shares: 26,
  buy_price: 42000,
  gains: 36000,
  variation: 2500,
  boosters: [],
  dividends_gains: 45220,
  total_gains: 95002,
  total_variations: 1055,
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ size }: Props) => (
  <PortfolioCarousel portfolios={[portfolio, portfolio, portfolio, portfolio]} size={size} />
);

export const Default = Template.bind({});
