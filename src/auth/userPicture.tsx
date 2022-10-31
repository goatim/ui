import { ReactElement } from 'react';
import { getUserPublicName, User } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import Icon from '../general/icon';

export type UserPictureSize = 'small' | 'medium' | 'big';

export type UserPictureTheme = 'dark' | 'light';

export interface Props extends WrapperProps {
  user: User;
  size?: UserPictureSize;
  theme?: UserPictureTheme;
}

export default function UserPicture({
  user,
  size = 'small',
  theme = 'dark',
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-user-picture ${size} ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      {user.picture ? (
        <img src={user.picture.thumbnail_url} alt={getUserPublicName(user) || user.id} />
      ) : (
        <div className="placeholder">
          <Icon name="user" />
        </div>
      )}
    </Wrapper>
  );
}
