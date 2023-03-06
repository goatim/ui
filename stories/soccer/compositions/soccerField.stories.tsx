import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import { SoccerField, SoccerFieldTheme } from '../../../src';

interface Props {
  theme?: SoccerFieldTheme;
}

export default {
  title: 'Soccer/SoccerField',
  component: SoccerField,
  argTypes: {
    theme: {
      options: ['dark', 'light'],
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
  theme: 'dark',
};
