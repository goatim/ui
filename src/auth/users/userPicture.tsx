import { ForwardedRef, forwardRef, ReactElement } from 'react';
import { Image, User } from '@goatim/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { Icon } from '../../general';

export type UserPictureSize = 'small' | 'medium' | 'big';

export type UserPictureTheme = 'dark' | 'light';

export interface UserPictureProps extends WrapperProps {
  picture?: Image;
  user?: User;
  size?: UserPictureSize;
  theme?: UserPictureTheme;
}

export const UserPicture = forwardRef<
  HTMLAnchorElement | HTMLButtonElement | HTMLDivElement,
  UserPictureProps
>(function UserPicture(
  { picture, user, size = 'small', theme = 'dark', onClick, type, href, target }: UserPictureProps,
  ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
): ReactElement {
  return (
    <Wrapper
      className={`goatim-ui-user-picture ${size} ${theme}`}
      onClick={onClick}
      type={type}
      href={href}
      target={target}
      ref={ref}>
      {picture || user?.picture ? (
        <img src={picture?.thumbnail_url || user?.picture?.thumbnail_url} alt={user?.first_name} />
      ) : (
        <div className="placeholder">
          <Icon name="user" />
        </div>
      )}
    </Wrapper>
  );
});
