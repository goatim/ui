import { Image } from '@goatim/client';
import { ClubIcon, ClubIconSize } from '../../../src';

interface Props {
  size?: ClubIconSize;
}

export default {
  title: 'Soccer/ClubIcon',
  component: ClubIcon,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
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

function Template({ size }: Props) {
  return <ClubIcon icon={icon} size={size} />;
}

export const Default = Template.bind({});
