import {
  ReactElement,
  MouseEvent,
  FocusEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
  CSSProperties,
} from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../feedbacks/loader';
import Icon, { IconName } from './icon';

export type Type = 'submit' | 'reset' | 'button';
export type Shape = 'fitted' | 'square';
export type Size = 'small' | 'medium' | 'large';
export type ButtonStyle = 'filled' | 'text' | 'outlined' | 'link';
export type Theme = 'violet-pink' | 'orange-yellow' | 'white' | 'blue' | 'dark-blue' | 'violet';

export interface Props {
  children?: ReactNode;
  href?: string;
  to?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  onFocus?: (event: FocusEvent<HTMLElement>) => void;
  type?: Type;
  shape?: Shape;
  size?: Size;
  buttonStyle?: ButtonStyle;
  theme?: Theme;
  disabled?: boolean;
  pending?: boolean;
  active?: boolean;
  success?: boolean;
  errored?: boolean;
  leftIcon?: IconName;
  leftIconSize?: number;
  rightIcon?: IconName;
  rightIconSize?: number;
  style?: CSSProperties;
}

function Wrapper({
  children,
  href = undefined,
  to = undefined,
  onClick = undefined,
  onFocus = undefined,
  shape = 'fitted',
  size = 'medium',
  buttonStyle = 'filled',
  theme = 'violet-pink',
  type = 'button',
  disabled = false,
  pending = false,
  active = false,
  success = false,
  errored = false,
  style = {},
}: Props): ReactElement {
  const [autoPending, setAutoPending] = useState<boolean>(false);
  const [autoErrored, setAutoErrored] = useState<boolean>(false);
  const [className, setClassName] = useState<string[]>([
    'friday-ui-button',
    shape,
    size,
    buttonStyle,
    theme,
  ]);

  useEffect(() => {
    const nextClasses = ['friday-ui-button', shape, size, buttonStyle, theme];

    if (active) {
      nextClasses.push('active');
    }

    if (success) {
      nextClasses.push('success');
    }

    if (pending || autoPending) {
      nextClasses.push('pending');
    }

    if (errored || autoErrored) {
      nextClasses.push('errored');
    }

    if (disabled) {
      nextClasses.push('disabled');
    }

    setClassName(nextClasses);
  }, [
    active,
    success,
    errored,
    disabled,
    shape,
    size,
    buttonStyle,
    pending,
    autoPending,
    autoErrored,
    theme,
  ]);

  const onButtonClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        const response = onClick(event);

        if (
          typeof response === 'object' &&
          response &&
          'then' in response &&
          response.then &&
          typeof response.then === 'function'
        ) {
          setAutoPending(true);
          try {
            await response;
            setAutoPending(false);
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
      <a className={className.join(' ')} href={href} onFocus={onFocus} style={style}>
        {children}
      </a>
    );
  }

  if (!disabled && !pending && !autoPending && to && to.length) {
    return (
      <NavLink className={className.join(' ')} to={to} style={style || {}} exact onFocus={onFocus}>
        {children}
      </NavLink>
    );
  }

  return (
    <button
      className={className.join(' ')}
      onClick={onButtonClick}
      onFocus={onFocus}
      type={type}
      disabled={(disabled || pending || autoPending) as boolean}
      style={style}>
      {children}
    </button>
  );
}

export default function Button({
  children = null,
  href = undefined,
  to = undefined,
  onClick = undefined,
  shape = 'fitted',
  size = 'medium',
  buttonStyle = 'filled',
  type = 'button',
  theme = 'violet-pink',
  active = false,
  pending = false,
  success = false,
  errored = false,
  disabled = false,
  leftIcon = undefined,
  leftIconSize = 15,
  rightIcon = undefined,
  rightIconSize = 15,
  style = {},
}: Props): ReactElement {
  return (
    <Wrapper
      href={href}
      to={to}
      onClick={onClick}
      pending={pending}
      disabled={disabled}
      type={type}
      shape={shape}
      size={size}
      theme={theme}
      buttonStyle={buttonStyle}
      active={active}
      success={success}
      errored={errored}
      style={style}>
      <div className="container">
        <div className="body">
          {leftIcon ? (
            <div className="left-icon">
              <Icon name={leftIcon} size={leftIconSize} />
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
            <Icon name={rightIcon} size={rightIconSize} />
          </div>
        ) : null}
      </div>

      <div className="pending">
        <Loader size={15} />
      </div>
    </Wrapper>
  );
}
