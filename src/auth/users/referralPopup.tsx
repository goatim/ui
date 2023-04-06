import { ReactElement } from 'react';
import { formatReferralCode } from '@goatim/client';
import { Button } from '../../general';
import gift from '../../general/assets/gift.png';

export interface ReferralPopupProps {
  referralCode?: string;
  onInviteFriends?: () => unknown;
}

export function ReferralPopup({ referralCode, onInviteFriends }: ReferralPopupProps): ReactElement {
  return (
    <div className="goatim-ui-referral-popup">
      <div className="body">
        <img src={gift} alt="gift" className="gift" />
        <h1>Invite tes amis !</h1>
        <p>
          Gagne un pack contenant des actions de joueurs et 30 GTCoins en invitant tes amis avec ton
          code de parrainage :
        </p>
        {referralCode ? (
          <span className="referral-code">{formatReferralCode(referralCode)}</span>
        ) : null}
      </div>

      <div className="actions">
        {onInviteFriends ? <Button onClick={onInviteFriends}>Inviter mes amis</Button> : null}
      </div>
    </div>
  );
}
