import { HelpButton } from '../../src';

export default {
  title: 'Onboarding/HelpButton',
  component: HelpButton,
};

function Template() {
  return <HelpButton onClick={() => undefined} />;
}

export const Default = Template.bind({});
