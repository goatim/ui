import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import SoccerField, { SoccerFieldTheme } from '../../src/soccer/soccerField';

interface Props {
  theme?: SoccerFieldTheme;
}

export default {
  title: 'Soccer/SoccerField',
  component: SoccerField,
  argTypes: {
    theme: {
      options: ['default', 'light'],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ theme }: Props) => (
  <SoccerField theme={theme} />
);

export const Default = Template.bind({});

Default.args = {
  theme: 'default',
};
