import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import AppIcon from '../general/appIcon';
import Icon from '../general/icon';
import { useClient } from '../utils/client';

export interface Props extends WrapperProps {
  onDismiss?: () => unknown;
}

export default function A2HSBanner({
  onClick,
  to,
  href,
  target,
  onDismiss,
}: Props): ReactElement | null {
  const client = useClient();

  if (
    client.device &&
    client.browser === 'safari' &&
    ['iphone', 'ipad', 'ipod'].includes(client.device)
  ) {
    return (
      <Wrapper
        className="friday-ui-a2hs-banner"
        onClick={onClick}
        to={to}
        href={href}
        target={target}>
        <div className="icon">
          <AppIcon />
          <span>Enregistre l&apos;app sur ton IPhone</span>
        </div>

        <div className="body">
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

          {onDismiss ? (
            <button className="dismiss" type="button" onClick={onDismiss}>
              <Icon name="x" />
            </button>
          ) : null}
        </div>
      </Wrapper>
    );
  }

  return null;
}
