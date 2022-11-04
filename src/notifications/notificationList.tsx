import { ReactElement } from 'react';
import { Notification } from '@fridaygame/client';
import NotificationThumbnail from './notificationThumbnail';

export interface Props {
  notifications?: Notification[];
  colored?: boolean;
}

export default function NotificationList({ notifications, colored = false }: Props): ReactElement {
  return (
    <div className="friday-ui-notification-list">
      {notifications?.length ? (
        notifications.map((notification) => (
          <div className="notification" key={notification.id}>
            <NotificationThumbnail notification={notification} colored={colored} />
          </div>
        ))
      ) : (
        <span className="empty">Aucune notification</span>
      )}
    </div>
  );
}
