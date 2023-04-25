import { A2HSBanner } from '../../src';

export default {
  title: 'Navigation/A2HSBanner',
  component: A2HSBanner,
  argTypes: {},
};

function Template() {
  return <A2HSBanner onDismiss={() => undefined} />;
}

export const Default = Template.bind({});
