import { ReactElement } from 'react';
import { User } from '@fridaygame/client';

export type UserThumbnailSize = 'small' | 'medium' | 'big';

export interface Props {
  user: User;
  size?: UserThumbnailSize;
}

export default function UserThumbnail({ user, size = 'small' }: Props): ReactElement {
  return (
    <div className={`friday-ui-user-thumbnail ${size}`}>
      {user.picture ? (
        <img src={user.picture.thumbnail_url} alt={`${user.first_name} ${user.last_name}`} />
      ) : null}
    </div>
  );
}
