import { ReactElement, useState, createContext, useMemo, useContext, useCallback } from 'react';
import { Notification } from '@fridaygame/client';
import NotificationModal from './notificationModal';

export interface NotificationsContext {
  notifications?: Notification[];
  pushNotification(notification: Notification): void;
}

const notificationsContext = createContext<NotificationsContext | undefined>(undefined);

export function useNotificationsContext(): NotificationsContext {
  const c = useContext<NotificationsContext | undefined>(notificationsContext);
  if (!c) {
    throw new Error('Notifications context not found');
  }
  return c;
}

export interface Props {
  children: ReactElement;
}

export default function NotificationsWindow({ children }: Props): ReactElement {
  const [notifications, setNotifications] = useState<Notification[] | undefined>();

  const pushNotification = useCallback((notification: Notification) => {
    setNotifications((n?: Notification[]) => (n ? [...n, notification] : [notification]));
  }, []);

  const value = useMemo<NotificationsContext>(
    () => ({
      notifications,
      pushNotification,
    }),
    [notifications, pushNotification],
  );

  return (
    <notificationsContext.Provider value={value}>
      <div className="friday-ui-notifications-window">
        {children}
        <div className="notifications">
          {notifications?.map((notification) => (
            <div className="notification" key={notification.id}>
              <NotificationModal notification={notification} />
            </div>
          ))}
        </div>
      </div>
    </notificationsContext.Provider>
  );
}
