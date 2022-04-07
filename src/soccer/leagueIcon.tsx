import { ReactElement } from 'react';
import { Image } from '@cezembre/fronts';

export type LeagueIconSize = 'small' | 'medium' | 'large';

export interface Props {
  icon?: Image;
  size?: LeagueIconSize;
}

export default function LeagueIcon({ icon, size = 'small' }: Props): ReactElement {
  return (
    <div className={`friday-ui-league-icon ${size}`}>
      {icon?.thumbnail_url ? (
        <img src={icon.thumbnail_url} alt="League logo" />
      ) : (
        <span className="placeholder" />
      )}
    </div>
  );
}
