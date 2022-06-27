import { ReactElement } from 'react';
import { Notification } from '@fridaygame/client';
import NotificationThumbnail from './notificationThumbnail';

export interface Props {
  notifications?: Notification[];
}

export default function NotificationList({ notifications }: Props): ReactElement {
  return (
    <div className="friday-ui-notification-list">
      {notifications?.map((notification) => (
        <div className="notification" key={notification.id}>
          <NotificationThumbnail notification={notification} />
        </div>
      ))}
    </div>
  );
}
