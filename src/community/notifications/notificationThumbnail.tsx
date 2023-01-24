import { ReactElement, useMemo } from 'react';
import {
  Notification,
  OrderMatchNotificationPayload,
  ClosedMatchNotificationPayload,
} from '@fridaygame/client';
import { formatRelativeDateTime, Wrapper, WrapperProps } from '@cezembre/fronts';
import NotificationIcon from './notificationIcon';
import OrderMatchNotification from './orderMatchNotification';
import ClosedMatchNotification from './closedMatchNotification';

export interface Props extends WrapperProps {
  notification: Notification;
  colored?: boolean;
}

export default function NotificationThumbnail({
  notification,
  colored = false,
  onClick,
  type,
  to,
  target,
  href,
}: Props): ReactElement {
  const body = useMemo<ReactElement>(() => {
    switch (notification.event) {
      case 'order_match':
        return (
          <OrderMatchNotification payload={notification.payload as OrderMatchNotificationPayload} />
        );
      case 'closed_match':
        return (
          <ClosedMatchNotification
            payload={notification.payload as ClosedMatchNotificationPayload}
          />
        );
      default:
        return <span />;
    }
  }, [notification]);

  const className = useMemo<string>(() => {
    const classNames: string[] = ['friday-ui-notification-thumbnail'];

    if (colored) {
      classNames.push('colored');
    }

    if (!notification.is_read) {
      classNames.push('unread');
    }

    if (!notification.is_seen) {
      classNames.push('unseen');
    }

    return classNames.join(' ');
  }, [colored, notification.is_read, notification.is_seen]);

  return (
    <Wrapper
      className={className}
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
