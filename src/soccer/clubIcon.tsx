import { ReactElement } from 'react';
import { Image } from '@cezembre/fronts';

export type ClubIconSize = 'small' | 'medium' | 'large';

export interface Props {
  icon?: Image;
  size?: ClubIconSize;
}

export default function ClubIcon({ icon, size = 'small' }: Props): ReactElement {
  return (
    <div className={`friday-ui-club-icon ${size}`}>
      {icon?.thumbnail_url ? (
        <img src={icon.thumbnail_url} alt="Club logo" />
      ) : (
        <span className="placeholder" />
      )}
    </div>
  );
}
