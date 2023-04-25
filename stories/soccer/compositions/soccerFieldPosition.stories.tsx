import { Image } from '@goatim/client';
import {
  SoccerFieldPosition,
  SoccerFieldPositionSize,
  SoccerFieldPositionTheme,
} from '../../../src';

interface Props {
  size?: SoccerFieldPositionSize;
  theme?: SoccerFieldPositionTheme;
}

export default {
  title: 'Soccer/SoccerFieldPosition',
  component: SoccerFieldPosition,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
    },
    theme: {
      options: ['dark', 'light'],
      control: {
        type: 'radio',
      },
    },
  },
};

const icon: Image = {
  id: '1',
  url: 'https://www.psg.fr/img/logos/psg-logo.png',
  large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
  medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
  small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
};

function Template({ size, theme }: Props) {
  return <SoccerFieldPosition size={size} theme={theme} />;
}

export const Default = Template.bind({});
