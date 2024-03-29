import {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Notification } from '@goatim/client';
import { WrapperProps } from '@cezembre/fronts';
import { NotificationModal } from './notificationModal';

export interface NotificationModalState extends WrapperProps {
  id: string;
  notification: Notification;
  hidden: boolean;
  timeout?: NodeJS.Timeout | null;
  onDismiss?: () => unknown;
}

export interface PushNotificationOptions extends WrapperProps {
  timeout?: number;
  onDismiss?: () => unknown;
}

export interface NotificationsContextState {
  notificationsModals: NotificationModalState[];

  popNotification(id: string, dismissed?: boolean): void;

  pushNotification(notification: Notification, options?: PushNotificationOptions): void;
}

const notificationsContext = createContext<NotificationsContextState | undefined>(undefined);

export function useNotificationsContext(): NotificationsContextState {
  const context = useContext<NotificationsContextState | undefined>(notificationsContext);
  if (!context) {
    throw new Error('Notifications context not found');
  }
  return context;
}

export interface NotificationsContextProps {
  children: ReactNode | ReactNode[];
}

export function NotificationsContext({ children }: NotificationsContextProps): ReactElement {
  const [notificationsModals, setNotificationsModals] = useState<NotificationModalState[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotificationsModals((prevNotificationModals: NotificationModalState[]) => {
      const cns = [...prevNotificationModals];
      const i = cns.findIndex((_n) => _n.id === id);
      if (i !== -1) {
        cns.splice(i, 1);
      }
      return cns;
    });
  }, []);

  const popNotification = useCallback(
    (id: string, dismissed = false) => {
      setNotificationsModals((prevNotificationsModals: NotificationModalState[]) => {
        const newNotificationsModals = [...prevNotificationsModals];
        const i = newNotificationsModals.findIndex((_n) => _n.id === id);
        if (i !== -1) {
          newNotificationsModals[i].hidden = true;
          const { timeout } = newNotificationsModals[i];
          if (timeout) {
            clearTimeout(timeout);
            newNotificationsModals[i].timeout = null;
          }

          newNotificationsModals[i].timeout = setTimeout(() => removeNotification(id), 400);

          if (dismissed) {
            const { onDismiss } = newNotificationsModals[i];

            if (onDismiss) {
              onDismiss();
            }
          }
        }
        return newNotificationsModals;
      });
    },
    [removeNotification],
  );

  const pushNotification = useCallback(
    (notification: Notification, options?: PushNotificationOptions) => {
      const id = Math.random().toString(36).substring(5);
      setNotificationsModals((ns: NotificationModalState[]) => [
        ...ns,
        {
          id,
          notification,
          hidden: false,
          timeout: setTimeout(() => popNotification(id), options?.timeout || 5000),
          onDismiss: options?.onDismiss,
          onClick: options?.onClick,
          type: options?.type,
          target: options?.target,
          href: options?.href,
        },
      ]);
    },
    [popNotification],
  );

  const value = useMemo<NotificationsContextState>(
    () => ({
      notificationsModals,
      popNotification,
      pushNotification,
    }),
    [notificationsModals, popNotification, pushNotification],
  );

  return (
    <notificationsContext.Provider value={value}>
      {children}
      {notificationsModals.length ? (
        <div className="goatim-ui-notifications">
          {notificationsModals.map((notificationModal) => (
            <div
              className={`notification${notificationModal.hidden ? ' hidden' : ''}`}
              key={notificationModal.id}>
              <NotificationModal
                notification={notificationModal.notification}
                onDismiss={() => popNotification(notificationModal.id, true)}
                onClick={notificationModal.onClick}
                type={notificationModal.type}
                target={notificationModal.target}
                href={notificationModal.href}
              />
            </div>
          ))}
        </div>
      ) : null}
    </notificationsContext.Provider>
  );
}
