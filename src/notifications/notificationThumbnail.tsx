import { ReactElement, useMemo } from 'react';
import { Notification, OrderMatchEventPayload } from '@fridaygame/client';
import { formatRelativeDateTime } from '@cezembre/fronts';
import NotificationIcon from './notificationIcon';
import OrderMatchNotification from '../trading/orders/orderMatchNotification';

export interface Props {
  notification: Notification;
}

export default function NotificationThumbnail({ notification }: Props): ReactElement {
  const body = useMemo<ReactElement>(() => {
    switch (notification.event) {
      case 'order_match':
        return <OrderMatchNotification payload={notification.payload as OrderMatchEventPayload} />;
      default:
        return <p>...</p>;
    }
  }, [notification]);

  return (
    <div className="friday-ui-notification-thumbnail">
      <div className="icon">
        <NotificationIcon event={notification.event} />
      </div>
      <div className="container">
        <div className="body">{body}</div>
        {notification.creation ? (
          <span className="creation">{formatRelativeDateTime(notification.creation)}</span>
        ) : null}
      </div>
    </div>
  );
}
