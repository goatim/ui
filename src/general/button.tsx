import {
  ReactElement,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
  FocusEventHandler,
} from 'react';
import { NavLink, To } from 'react-router-dom';
import Loader from '../feedbacks/loader';
import Icon, { IconName } from './icon';

export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonShape = 'text' | 'filled';

export type ButtonTheme =
  | 'default'
  | 'light'
  | 'darker'
  | 'lighter'
  | 'submit'
  | 'action'
  | 'action-discreet';

export interface Props {
  children?: ReactNode;
  href?: string;
  to?: To;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  onFocus?: FocusEventHandler<HTMLElement>;
  onBlur?: FocusEventHandler<HTMLElement>;
  type?: ButtonType;
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
}

function Wrapper({
  children,
  href,
  to,
  onClick,
  onFocus,
  onBlur,
  size = 'medium',
  shape = 'text',
  theme = 'default',
  type = 'button',
  disabled = false,
  pending = false,
  active = false,
  success = false,
  errored = false,
}: Partial<Props>): ReactElement {
  const [autoPending, setAutoPending] = useState<boolean>(false);
  const [autoSuccess, setAutoSuccess] = useState<boolean>(false);
  const [autoErrored, setAutoErrored] = useState<boolean>(false);
  const [classNames, setClassNames] = useState<(string | undefined)[]>([
    'friday-ui-button',
    size,
    shape,
    theme,
    active ? 'active' : undefined,
    pending || autoPending ? 'pending' : undefined,
    success || autoSuccess ? 'success' : undefined,
    errored || autoErrored ? 'errored' : undefined,
    disabled ? 'disabled' : undefined,
  ]);

  useEffect(() => {
    setClassNames([
      'friday-ui-button',
      size,
      shape,
      theme,
      active ? 'active' : undefined,
      pending || autoPending ? 'pending' : undefined,
      success || autoSuccess ? 'success' : undefined,
      errored || autoErrored ? 'errored' : undefined,
      disabled ? 'disabled' : undefined,
    ]);
  }, [
    active,
    success,
    errored,
    disabled,
    size,
    shape,
    pending,
    autoPending,
    autoErrored,
    theme,
    autoSuccess,
  ]);

  const onButtonClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        const response = onClick(event);

        if (typeof response === 'object' && response?.then && typeof response.then === 'function') {
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

  if (!disabled && !pending && !autoPending && href && href.length) {
    return (
      <a className={classNames.filter((e) => e).join(' ')} href={href} onFocus={onFocus}>
        {children}
      </a>
    );
  }

  if (!disabled && !pending && !autoPending && to) {
    return (
      <NavLink className={classNames.filter((c) => c).join(' ')} to={to} onFocus={onFocus}>
        {children}
      </NavLink>
    );
  }

  return (
    <button
      className={classNames.filter((c) => c).join(' ')}
      onClick={onButtonClick}
      onFocus={onFocus}
      onBlur={onBlur}
      type={type}
      disabled={(disabled || pending || autoPending) as boolean}>
      {children}
    </button>
  );
}

export default function Button({
  children,
  href,
  to,
  onClick,
  onFocus,
  onBlur,
  size = 'medium',
  shape = 'text',
  type = 'button',
  theme = 'default',
  active = false,
  pending = false,
  success = false,
  errored = false,
  disabled = false,
  leftIcon,
  rightIcon,
}: Props): ReactElement {
  return (
    <Wrapper
      href={href}
      to={to}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      pending={pending}
      disabled={disabled}
      type={type}
      size={size}
      theme={theme}
      active={active}
      success={success}
      errored={errored}
      shape={shape}>
      <div className="container">
        <div className="body">
          {leftIcon ? (
            <div className="left-icon">
              <Icon name={leftIcon} />
            </div>
          ) : null}

          {typeof children === 'string' ? (
            <span className="label">{children}</span>
          ) : (
            <div className="component">{children}</div>
          )}
        </div>

        {rightIcon ? (
          <div className="right-icon">
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
