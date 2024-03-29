import { ReactElement } from 'react';
import { Notification } from '@goatim/client';
import { WrapperProps } from '@cezembre/fronts';
import { NotificationThumbnail } from './notificationThumbnail';
import { Icon } from '../../general';

export interface NotificationModalProps extends WrapperProps {
  notification: Notification;

  onDismiss?(): void;
}

export function NotificationModal({
  notification,
  onClick,
  href,
  target,
  onDismiss,
}: NotificationModalProps): ReactElement {
  return (
    <div className="goatim-ui-notification-modal">
      <div className="notification">
        <NotificationThumbnail
          notification={notification}
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
