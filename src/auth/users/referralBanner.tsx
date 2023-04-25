import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { formatReferralCode } from '@goatim/client';
import { Icon } from '../../general';

export interface ReferralBannerProps extends WrapperProps {
  referralCode?: string;
  onDismiss?: () => unknown;
}

export function ReferralBanner({
  onClick,
  href,
  target,
  referralCode,
  onDismiss,
}: ReferralBannerProps): ReactElement | null {
  return (
    <div className="goatim-ui-referral-banner">
      <Wrapper className="banner" onClick={onClick} href={href} target={target}>
        <div className="body">
          <span className="label">Parraine tes amis et reçois 1 pack + 30GTC</span>
          {referralCode ? <span className="code">{formatReferralCode(referralCode)}</span> : null}
        </div>

        {onDismiss ? (
          <button className="dismiss" type="button" onClick={onDismiss}>
            <Icon name="x" />
          </button>
        ) : null}
      </Wrapper>
      <div className="placeholder" />
    </div>
  );
}
