import { ForwardedRef, forwardRef, ReactElement } from 'react';
import { Image, User } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import Icon from '../../general/icon';

export type UserPictureSize = 'small' | 'medium' | 'big';

export type UserPictureTheme = 'dark' | 'light';

export interface Props extends WrapperProps {
  picture?: Image;
  user?: User;
  size?: UserPictureSize;
  theme?: UserPictureTheme;
}

export default forwardRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement, Props>(
  function UserPicture(
    { picture, user, size = 'small', theme = 'dark', to, onClick, type, href, target }: Props,
    ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
  ): ReactElement {
    return (
      <Wrapper
        className={`friday-ui-user-picture ${size} ${theme}`}
        to={to}
        onClick={onClick}
        type={type}
        href={href}
        target={target}
        ref={ref}>
        {picture || user?.picture ? (
          <img
            src={picture?.thumbnail_url || user?.picture?.thumbnail_url}
            alt={user?.first_name}
          />
        ) : (
          <div className="placeholder">
            <Icon name="user" />
          </div>
        )}
      </Wrapper>
    );
  },
);
