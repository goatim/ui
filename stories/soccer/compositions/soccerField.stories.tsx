import { SoccerField, SoccerFieldTheme } from '../../../src/soccer';

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
};

function Template({ theme }: Props) {
  return <SoccerField theme={theme} />;
}

export const Default = Template.bind({});
