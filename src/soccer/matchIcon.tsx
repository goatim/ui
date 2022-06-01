import { ReactElement } from 'react';
import { Image } from '@cezembre/fronts';
import Icon from '../general/icon';

export type MatchIconSize = 'small' | 'medium' | 'big';

export interface Props {
  icon?: Image;
  size?: MatchIconSize;
}

export default function MatchIcon({ icon, size = 'medium' }: Props): ReactElement {
  return (
    <div className={`friday-ui-match-icon ${size}`}>
      {icon ? <img src={icon.medium_url} alt="Match icon" /> : <Icon name="award" size={50} />}
    </div>
  );
}
