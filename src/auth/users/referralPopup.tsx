import { ReactElement } from 'react';
import { formatReferralCode } from '@goatim/client';
import { Button, Icon } from '../../general';
import gift from '../../general/assets/gift.png';

export interface ReferralPopupProps {
  referralCode?: string;
  onDismiss?: () => unknown;
  onInviteFriends?: () => unknown;
}

export function ReferralPopup({
  referralCode,
  onDismiss,
  onInviteFriends,
}: ReferralPopupProps): ReactElement {
  return (
    <div className="goatim-ui-referral-popup">
      <div className="header">
        <button className="dismiss" onClick={onDismiss}>
          <Icon name="x" size={20} />
        </button>
      </div>

      <div className="body">
        <img src={gift} alt="gift" className="gift" />
        <h1>Invite tes amis !</h1>
        <p>Gagne des joueurs et des coins en invitant tes amis avec ton code de parrainage :</p>
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
