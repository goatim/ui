import { ReactElement, MouseEvent, ReactNode, useCallback, useState, useMemo } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import Loader from './loader';
import Icon, { IconName } from './icon';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonShape = 'filled' | 'text';

export type ButtonTheme =
  | 'electric-blue'
  | 'dark'
  | 'light'
  | 'transparent-dark'
  | 'transparent-light'
  | 'buy'
  | 'sell';

export interface Props extends WrapperProps {
  children?: ReactNode;
  size?: ButtonSize;
  shape?: ButtonShape;
  theme?: ButtonTheme;
  disabled?: boolean;
  pending?: boolean;
  active?: boolean;
  success?: boolean;
  errored?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  to,
  onClick,
  onFocus,
  onBlur,
  size = 'medium',
  shape = 'filled',
  type = 'button',
  theme = 'electric-blue',
  active,
  pending,
  success,
  errored,
  disabled,
  leftIcon,
  rightIcon,
  fullWidth,
}: Props): ReactElement {
  const [autoPending, setAutoPending] = useState<boolean>(false);
  const [autoSuccess, setAutoSuccess] = useState<boolean>(false);
  const [autoErrored, setAutoErrored] = useState<boolean>(false);

  const className = useMemo<string>(() => {
    let res = `friday-ui-button ${size} ${shape} ${theme}`;

    if (active) {
      res += ' active';
    }
    if (pending || autoPending) {
      res += ' pending';
    }
    if (success || autoSuccess) {
      res += ' success';
    }
    if (errored || autoErrored) {
      res += ' errored';
    }
    if (disabled) {
      res += ' disabled';
    }

    if (fullWidth) {
      res += ' full-width';
    }

    return res;
  }, [
    active,
    autoErrored,
    autoPending,
    autoSuccess,
    disabled,
    errored,
    fullWidth,
    pending,
    shape,
    size,
    success,
    theme,
  ]);

  const onButtonClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        const response = onClick(event);

        if (
          response &&
          typeof response === 'object' &&
          'then' in response &&
          (response as Promise<unknown>).then &&
          typeof (response as Promise<unknown>).then === 'function'
        ) {
          setAutoPending(true);
          try {
            await response;
            setAutoPending(false);
            setAutoSuccess(true);
          } catch (e) {
            setAutoPending(false);
            setAutoErrored(true);
          }
        }
      }
    },
    [onClick],
  );

  return (
    <Wrapper
      href={href}
      to={to}
      onClick={onButtonClick}
      disabled={disabled || pending || autoPending}
      type={type}
      onFocus={onFocus}
      onBlur={onBlur}
      className={className}>
      <div className="container">
        {leftIcon ? (
          <div className="icon left">
            <Icon name={leftIcon} />
          </div>
        ) : null}

        {typeof children === 'string' ? (
          <span className="label">{children}</span>
        ) : (
          <div className="component">{children}</div>
        )}

        {rightIcon ? (
          <div className="icon right">
            <Icon name={rightIcon} />
          </div>
        ) : null}
      </div>

      <div className="pending">
        <Loader theme="light" />
      </div>
    </Wrapper>
  );
}
