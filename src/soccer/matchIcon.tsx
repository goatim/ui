import { ReactElement } from 'react';
import { Image } from '@cezembre/fronts';
import Icon from '../general/icon';

export interface Props {
  icon?: Image;
}

export default function MatchIcon({ icon }: Props): ReactElement {
  return (
    <div className="friday-ui-match-icon">
      {icon ? <img src={icon.medium_url} alt="Match icon" /> : <Icon name="award" size={50} />}
    </div>
  );
}
