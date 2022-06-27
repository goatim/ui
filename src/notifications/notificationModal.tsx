import { ReactElement } from 'react';
import { Notification } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import NotificationThumbnail from './notificationThumbnail';
import Icon from '../general/icon';

export interface Props extends WrapperProps {
  notification: Notification;
  onDismiss?(): void;
}

export default function NotificationModal({
  notification,
  to,
  onClick,
  href,
  target,
  onDismiss,
}: Props): ReactElement {
  return (
    <Wrapper
      className="friday-ui-notification-modal"
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      <div className="notification">
        <NotificationThumbnail notification={notification} />
      </div>
      {onDismiss ? (
        <button className="dismiss" onClick={onDismiss}>
          <Icon name="x" />
        </button>
      ) : null}
    </Wrapper>
  );
}
