import {
  ReactElement,
  MouseEvent,
  FocusEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../feedbacks/loader';
import Icon, { IconName } from './icon';

export interface Props {
  children?: ReactNode;
  href?: string;
  to?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  onFocus?: (event: FocusEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  buttonStyle?: 'text' | 'filled' | 'outlined';
  theme?: 'blue' | 'medium-blue' | 'dark-blue' | 'violet-pink' | 'orange-yellow' | 'white';
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
  href = undefined,
  to = undefined,
  onClick = undefined,
  onFocus = undefined,
  size = 'medium',
  buttonStyle = 'text',
  theme = 'blue',
  type = 'button',
  disabled = false,
  pending = false,
  active = false,
  success = false,
  errored = false,
}: Props): ReactElement {
  const [autoPending, setAutoPending] = useState<boolean>(false);
  const [autoErrored, setAutoErrored] = useState<boolean>(false);
  const [className, setClassName] = useState<string[]>([
    'friday-ui-button',
    size,
    buttonStyle,
    theme,
  ]);

  useEffect(() => {
    const nextClasses = ['friday-ui-button', size, buttonStyle, theme];

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
      <a className={className.join(' ')} href={href} onFocus={onFocus}>
        {children}
      </a>
    );
  }

  if (!disabled && !pending && !autoPending && to && to.length) {
    return (
      <NavLink className={className.join(' ')} to={to} exact onFocus={onFocus}>
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
      disabled={(disabled || pending || autoPending) as boolean}>
      {children}
    </button>
  );
}

export default function Button({
  children = null,
  href = undefined,
  to = undefined,
  onClick = undefined,
  size = 'medium',
  buttonStyle = 'text',
  type = 'button',
  theme = 'blue',
  active = false,
  pending = false,
  success = false,
  errored = false,
  disabled = false,
  leftIcon = undefined,
  rightIcon = undefined,
}: Props): ReactElement {
  return (
    <Wrapper
      href={href}
      to={to}
      onClick={onClick}
      pending={pending}
      disabled={disabled}
      type={type}
      size={size}
      theme={theme}
      active={active}
      success={success}
      errored={errored}
      buttonStyle={buttonStyle}>
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
        <Loader size={15} />
      </div>
    </Wrapper>
  );
}
