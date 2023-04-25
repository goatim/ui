import { ReferralPopup } from '../../src';

export default {
  title: 'Auth/ReferralPopup',
  component: ReferralPopup,
};

function Template() {
  return <ReferralPopup referralCode="F5ZPM6" />;
}

export const Default = Template.bind({});
