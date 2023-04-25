import { ReferralBanner } from '../../src';

export default {
  title: 'Auth/ReferralBanner',
  component: ReferralBanner,
};

function Template() {
  return <ReferralBanner referralCode="F5ZPM6" onDismiss={() => undefined} />;
}

export const Default = Template.bind({});
