import { ReactElement, useMemo } from 'react';
import { Image } from '@fridaygame/client';
import Icon from '../../general/icon';

export type MatchIconSize = 'small' | 'medium' | 'big';

export interface Props {
  icon?: Image;
  size?: MatchIconSize;
}

export default function MatchIcon({ icon, size = 'medium' }: Props): ReactElement {
  const iconSize = useMemo<number>(() => {
    switch (size) {
      case 'small':
        return 30;
      case 'big':
        return 70;
      default:
        return 50;
    }
  }, [size]);

  return (
    <div className={`friday-ui-match-icon ${size}`}>
      {icon ? (
        <img src={icon.medium_url} alt="Match icon" />
      ) : (
        <Icon name="soccer-ball" size={iconSize} />
      )}
    </div>
  );
}
