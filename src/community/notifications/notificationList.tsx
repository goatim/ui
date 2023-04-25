import { MouseEvent, ReactElement } from 'react';
import { Notification } from '@goatim/client';
import { NotificationThumbnail } from './notificationThumbnail';

export interface NotificationListProps {
  notifications?: Notification[];
  colored?: boolean;
  onNotificationClick?: (
    notification: Notification,
  ) => (event: MouseEvent<HTMLButtonElement>) => unknown;
  notificationHref?: (notification: Notification) => string;
  notificationTarget?: (notification: Notification) => string;
}

export function NotificationList({
  notifications,
  colored = false,
  onNotificationClick,
  notificationHref,
  notificationTarget,
}: NotificationListProps): ReactElement {
  return (
    <div className="goatim-ui-notification-list">
      {notifications?.length ? (
        notifications.map((notification) => (
          <div className="notification" key={notification.id}>
            <NotificationThumbnail
              notification={notification}
              colored={colored}
              onClick={onNotificationClick ? onNotificationClick(notification) : undefined}
              href={notificationHref ? notificationHref(notification) : undefined}
              target={notificationTarget ? notificationTarget(notification) : undefined}
            />
          </div>
        ))
      ) : (
        <span className="empty">Aucune notification</span>
      )}
    </div>
  );
}
