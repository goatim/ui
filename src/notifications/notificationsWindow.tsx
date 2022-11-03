import { ReactElement, useState, createContext, useMemo, useContext, useCallback } from 'react';
import { Notification } from '@fridaygame/client';
import NotificationModal from './notificationModal';

export interface NotificationModalState {
  notification: Notification;
  dismissed: boolean;
  timeout?: NodeJS.Timeout;
  onDismiss?: () => unknown;
}

export interface PushNotificationOptions {
  timeout?: number;
  onDismiss?: () => unknown;
}

export interface NotificationsContext {
  notificationsModals: NotificationModalState[];
  popNotification(id: string): void;
  pushNotification(notification: Notification, options?: PushNotificationOptions): void;
}

const notificationsContext = createContext<NotificationsContext | undefined>(undefined);

export function useNotificationsContext(): NotificationsContext {
  const context = useContext<NotificationsContext | undefined>(notificationsContext);
  if (!context) {
    throw new Error('Notifications context not found');
  }
  return context;
}

export interface Props {
  children: ReactElement;
}

export default function NotificationsWindow({ children }: Props): ReactElement {
  const [notificationsModals, setNotificationsModals] = useState<NotificationModalState[]>([]);

  const popNotification = useCallback((id: string) => {
    setNotificationsModals((prevNotificationModals: NotificationModalState[]) => {
      const cns = [...prevNotificationModals];
      const i = cns.findIndex((_n) => _n.notification.id === id);
      if (i !== -1) {
        cns.splice(i, 1);
      }
      return cns;
    });
  }, []);

  const dismissNotification = useCallback(
    (id: string) => {
      setNotificationsModals((prevNotificationsModals: NotificationModalState[]) => {
        const newNotificationsModals = [...prevNotificationsModals];
        const i = newNotificationsModals.findIndex((_n) => _n.notification.id === id);
        if (i !== -1) {
          newNotificationsModals[i].dismissed = true;
          if (newNotificationsModals[i].timeout) {
            clearTimeout(newNotificationsModals[i].timeout);
          }
          newNotificationsModals[i].timeout = setTimeout(() => popNotification(id), 400);

          const { onDismiss } = newNotificationsModals[i];

          if (onDismiss) {
            onDismiss();
          }
        }
        return newNotificationsModals;
      });
    },
    [popNotification],
  );

  const pushNotification = useCallback(
    (notification: Notification, options?: PushNotificationOptions) => {
      setNotificationsModals((ns: NotificationModalState[]) => [
        ...ns,
        {
          notification,
          dismissed: false,
          timeout: setTimeout(() => dismissNotification(notification.id), options?.timeout || 5000),
          onDismiss: options?.onDismiss,
        },
      ]);
    },
    [dismissNotification],
  );

  const value = useMemo<NotificationsContext>(
    () => ({
      notificationsModals,
      popNotification,
      pushNotification,
    }),
    [notificationsModals, popNotification, pushNotification],
  );

  return (
    <notificationsContext.Provider value={value}>
      <div className="friday-ui-notifications-window">
        {children}
        <div className="notifications">
          {notificationsModals?.map(({ notification, dismissed }) => (
            <div className={`notification${dismissed ? ' dismissed' : ''}`} key={notification.id}>
              <NotificationModal
                notification={notification}
                onDismiss={() => dismissNotification(notification.id)}
                // on
              />
            </div>
          ))}
        </div>
      </div>
    </notificationsContext.Provider>
  );
}
