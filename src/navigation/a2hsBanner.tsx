import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { AppIcon, Icon } from '../general';
import { useClient } from '../utils';

export interface A2HSBannerProps extends WrapperProps {
  onDismiss?: () => unknown;
}

export function A2HSBanner({
  onClick,
  to,
  href,
  target,
  onDismiss,
}: A2HSBannerProps): ReactElement | null {
  const client = useClient();

  if (
    client.device &&
    client.browser === 'safari' &&
    ['iphone', 'ipad', 'ipod'].includes(client.device)
  ) {
    return (
      <div className="goatim-ui-a2hs-banner">
        <Wrapper className="banner" onClick={onClick} to={to} href={href} target={target}>
          <div className="icon">
            <AppIcon />
          </div>

          <div className="body">
            <span>Enregistre l&apos;app sur ton IPhone</span>

            <div className="steps">
              <div className="step">
                <Icon name="share" />
                <span>Partager</span>
              </div>
              <div className="arrow">
                <Icon name="arrow-right" size={20} />
              </div>
              <div className="step">
                <Icon name="plus-square" />
                <span>Sur l&apos;écran d&apos;accueil</span>
              </div>
            </div>
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

  return null;
}
