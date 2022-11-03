import { ReactElement, useMemo } from 'react';
import { Notification, OrderMatchEventPayload } from '@fridaygame/client';
import { formatRelativeDateTime, Wrapper, WrapperProps } from '@cezembre/fronts';
import NotificationIcon from './notificationIcon';
import OrderMatchNotification from '../trading/orders/orderMatchNotification';

export interface Props extends WrapperProps {
  notification: Notification;
}

export default function NotificationThumbnail({
  notification,
  onClick,
  type,
  to,
  target,
  href,
}: Props): ReactElement {
  const body = useMemo<ReactElement>(() => {
    switch (notification.event) {
      case 'order_match':
        return <OrderMatchNotification payload={notification.payload as OrderMatchEventPayload} />;
      default:
        return <span />;
    }
  }, [notification]);

  return (
    <Wrapper
      className="friday-ui-notification-thumbnail"
      onClick={onClick}
      type={type}
      to={to}
      target={target}
      href={href}>
      <div className="icon">
        <NotificationIcon event={notification.event} />
      </div>
      <div className="container">
        <div className="body">{body}</div>
        {notification.creation ? (
          <span className="creation">{formatRelativeDateTime(notification.creation)}</span>
        ) : null}
      </div>
    </Wrapper>
  );
}
