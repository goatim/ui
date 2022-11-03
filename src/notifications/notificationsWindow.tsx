import {
  ReactElement,
  useState,
  createContext,
  useMemo,
  useContext,
  useCallback,
  ReactNode,
} from 'react';
import { Notification } from '@fridaygame/client';
import { WrapperProps } from '@cezembre/fronts';
import NotificationModal from './notificationModal';

export interface NotificationModalState extends WrapperProps {
  notification: Notification;
  hidden: boolean;
  timeout?: NodeJS.Timeout | null;
  onDismiss?: () => unknown;
}

export interface PushNotificationOptions extends WrapperProps {
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
  children: ReactNode | ReactNode[];
}

export default function NotificationsWindow({ children }: Props): ReactElement {
  const [notificationsModals, setNotificationsModals] = useState<NotificationModalState[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotificationsModals((prevNotificationModals: NotificationModalState[]) => {
      const cns = [...prevNotificationModals];
      const i = cns.findIndex((_n) => _n.notification.id === id);
      if (i !== -1) {
        cns.splice(i, 1);
      }
      return cns;
    });
  }, []);

  const popNotification = useCallback(
    (id: string) => {
      setNotificationsModals((prevNotificationsModals: NotificationModalState[]) => {
        const newNotificationsModals = [...prevNotificationsModals];
        const i = newNotificationsModals.findIndex((_n) => _n.notification.id === id);
        if (i !== -1) {
          newNotificationsModals[i].hidden = true;
          const { timeout } = newNotificationsModals[i];
          if (timeout) {
            clearTimeout(timeout);
            newNotificationsModals[i].timeout = null;
          }

          newNotificationsModals[i].timeout = setTimeout(() => removeNotification(id), 400);
        }
        return newNotificationsModals;
      });
    },
    [removeNotification],
  );

  const dismissNotification = useCallback(
    (id: string) => {
      popNotification(id);

      const i = notificationsModals.findIndex((_n) => _n.notification.id === id);

      if (i !== -1) {
        const { onDismiss } = notificationsModals[i];

        if (onDismiss) {
          onDismiss();
        }
      }
    },
    [notificationsModals, popNotification],
  );

  const pushNotification = useCallback(
    (notification: Notification, options?: PushNotificationOptions) => {
      setNotificationsModals((ns: NotificationModalState[]) => [
        ...ns,
        {
          notification,
          hidden: false,
          timeout: setTimeout(() => popNotification(notification.id), options?.timeout || 5000),
          onDismiss: options?.onDismiss,
          onClick: options?.onClick,
          type: options?.type,
          to: options?.to,
          target: options?.target,
          href: options?.href,
        },
      ]);
    },
    [popNotification],
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
          {notificationsModals?.map((notificationModal) => (
            <div
              className={`notification${notificationModal.hidden ? ' hidden' : ''}`}
              key={notificationModal.notification.id}>
              <NotificationModal
                notification={notificationModal.notification}
                onDismiss={() => dismissNotification(notificationModal.notification.id)}
                onClick={notificationModal.onClick}
                type={notificationModal.type}
                to={notificationModal.to}
                target={notificationModal.target}
                href={notificationModal.href}
              />
            </div>
          ))}
        </div>
      </div>
    </notificationsContext.Provider>
  );
}
