import { ReactElement, useMemo } from 'react';
import Icon, { IconName } from '../../general/icon';

export interface Props {
  event?: string;
}

export default function NotificationIcon({ event }: Props): ReactElement {
  const iconName = useMemo<IconName>(() => {
    switch (event) {
      case 'order_match':
        return 'shuffle';
      case 'gift':
        return 'gift';
      default:
        return 'info';
    }
  }, [event]);
  return (
    <div className={`friday-ui-notification-icon ${event}`}>
      <Icon name={iconName} size={17} />
    </div>
  );
}
