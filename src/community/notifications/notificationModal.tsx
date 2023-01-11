import { ReactElement } from 'react';
import { Notification } from '@fridaygame/client';
import { WrapperProps } from '@cezembre/fronts';
import NotificationThumbnail from './notificationThumbnail';
import Icon from '../../general/icon';

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
    <div className="friday-ui-notification-modal">
      <div className="notification">
        <NotificationThumbnail
          notification={notification}
          to={to}
          onClick={onClick}
          href={href}
          target={target}
        />
      </div>
      {onDismiss ? (
        <button className="dismiss" onClick={onDismiss}>
          <Icon name="x" />
        </button>
      ) : null}
    </div>
  );
}