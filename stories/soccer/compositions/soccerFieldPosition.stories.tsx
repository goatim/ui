import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Image } from '@fridaygame/client';
import {
  SoccerFieldPosition,
  SoccerFieldPositionSize,
  SoccerFieldPositionTheme,
} from '../../../src';

interface Props {
  size?: SoccerFieldPositionSize;
  theme?: SoccerFieldPositionTheme;
  is_defined?: boolean;
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
    is_defined: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const icon: Image = {
  id: '1',
  url: 'https://www.psg.fr/img/logos/psg-logo.png',
  large_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
  medium_url: 'https://upload.wikimedia.org/wikipedia/fr/7/76/Paris_Saint-Germain_logo.png',
  small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  is_defined,
  size,
  theme,
}: Props) => (
  <SoccerFieldPosition
    size={size}
    theme={theme}
    icon={is_defined ? icon : undefined}
    firstName="Kylian"
    lastName="Mbappé"
  />
);

export const Default = Template.bind({});

Default.args = {
  size: 'medium',
  theme: 'dark',
  is_defined: true,
};
