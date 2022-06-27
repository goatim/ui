import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { Image } from '@cezembre/fronts';
import SoccerFieldPosition, {
  SoccerFieldPositionSize,
  SoccerFieldPositionTheme,
} from '../../../src/soccer/compositions/soccerFieldPosition';

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
      options: ['default', 'light'],
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
  large_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  medium_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  small_url: 'https://www.psg.fr/img/logos/psg-logo.png',
  thumbnail_url: 'https://www.psg.fr/img/logos/psg-logo.png',
};

const Template: ComponentStory<JSXElementConstructor<Props>> = ({
  is_defined,
  size,
  theme,
}: Props) => <SoccerFieldPosition size={size} theme={theme} icon={is_defined ? icon : undefined} />;

export const Default = Template.bind({});

Default.args = {
  size: 'medium',
  theme: 'default',
  is_defined: true,
};
