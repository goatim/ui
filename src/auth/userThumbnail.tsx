import { ReactElement } from 'react';
import { getUserPublicName, User } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';

export type UserThumbnailSize = 'small' | 'medium' | 'big';

export type UserThumbnailInfos = 'picture' | 'picture-and-name';

export interface Props extends WrapperProps {
  user: User;
  size?: UserThumbnailSize;
  infos?: UserThumbnailInfos;
}

export default function UserThumbnail({
  user,
  size = 'small',
  infos = 'picture',
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-user-thumbnail ${size} ${infos}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      {user.picture ? (
        <img src={user.picture.thumbnail_url} alt={getUserPublicName(user) || user.id} />
      ) : (
        <div className="placeholder" />
      )}
      {infos === 'picture-and-name' ? (
        <span className="name">{getUserPublicName(user) || user.id}</span>
      ) : null}
    </Wrapper>
  );
}
