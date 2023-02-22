import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import { User } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { UserPicture } from './userPicture';

export type UserThumbnailSize = 'small' | 'medium' | 'big';

export type UserThumbnailTheme = 'dark' | 'light';

export interface UserThumbnailProps extends WrapperProps {
  user: User;
  size?: UserThumbnailSize;
  showPicture?: boolean;
  showName?: boolean;
  theme?: UserThumbnailTheme;
}

export const UserThumbnail = forwardRef<
  HTMLAnchorElement | HTMLButtonElement | HTMLDivElement,
  UserThumbnailProps
>(function UserThumbnail(
  {
    user,
    size = 'small',
    showPicture = true,
    showName = true,
    to,
    onClick,
    type,
    href,
    target,
    theme = 'dark',
  }: UserThumbnailProps,
  ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
): ReactElement {
  const className = useMemo<string>(() => {
    const classNames = ['friday-ui-user-thumbnail', size, theme];

    if (showPicture) {
      classNames.push('show-picture');
    }

    if (showName) {
      classNames.push('show-name');
    }

    return classNames.join(' ');
  }, [showName, showPicture, size, theme]);

  return (
    <Wrapper
      className={className}
      to={to}
      onClick={onClick}
      type={type}
      href={href}
      target={target}
      ref={ref}>
      {showPicture ? <UserPicture user={user} size={size} theme={theme} /> : null}
      {showName ? <span className="name">{user.pseudo || user.id}</span> : null}
    </Wrapper>
  );
});
