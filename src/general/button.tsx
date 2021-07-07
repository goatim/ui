import {
  ReactElement,
  MouseEvent,
  FocusEvent,
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { NavLink } from 'react-router-dom';
import Icon, { IconName } from './icon';
import Loader from '../feedbacks/loader';

export enum ButtonType {
  DEFAULT = 'default',
  LINK = 'link',
  LIGHT_LINK = 'light-link',
  SUBMIT = 'submit',
  CONFIRM = 'confirm',
  DELETE = 'delete',
  BOX = 'box',
  LIGHT_BOX = 'light-box',
  FRAMELESS = 'frameless',
  LIGHT_FRAMELESS = 'light-frameless',
  NAVIGATION = 'navigation',
  NAVIGATION_LIGHT = 'navigation-light',
}

export interface WrapperProps {
  children: ReactNode;
  style?: CSSProperties | null;
  href?: string | null;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  onFocus?: (event: FocusEvent<HTMLElement>) => void;
  to?: string | null;
  buttonType?: 'submit' | 'reset' | 'button';
  type?: ButtonType;
  disabled?: boolean;
  pending?: boolean;
  active?: boolean;
  success?: boolean;
  errored?: boolean;
}

function Wrapper({
  children,
  style = null,
  href = null,
  onClick = undefined,
  onFocus = undefined,
  to = null,
  type = ButtonType.DEFAULT,
  buttonType = 'button',
  disabled = false,
  pending = false,
  active = false,
  success = false,
  errored = false,
}: WrapperProps): ReactElement {
  const [hovered, setHovered] = useState<boolean>(false);
  const [autoPending, setAutoPending] = useState<boolean>(false);
  const [autoErrored, setAutoErrored] = useState<boolean>(false);
  const [className, setClassName] = useState<string[]>(['fleuraison-ui-button', type]);

  useEffect(() => {
    const nextClasses = ['fleuraison-ui-button', type];

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

    if (hovered) {
      nextClasses.push('hovered');
    }

    setClassName(nextClasses);
  }, [active, success, errored, disabled, type, hovered, pending, autoPending, autoErrored]);

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
      <a
        className={className.join(' ')}
        href={href}
        style={style || {}}
        onMouseOver={() => setHovered(true)}
        onFocus={onFocus}>
        {children}
      </a>
    );
  }

  if (!disabled && !pending && !autoPending && to && to.length) {
    return (
      <NavLink
        className={className.join(' ')}
        to={to}
        style={style || {}}
        exact
        onMouseOver={() => setHovered(true)}
        onFocus={onFocus}>
        {children}
      </NavLink>
    );
  }

  return (
    <button
      className={className.join(' ')}
      onClick={onButtonClick}
      onMouseOver={() => setHovered(true)}
      onFocus={onFocus}
      type={buttonType}
      disabled={(disabled || pending || autoPending) as boolean}
      style={style || {}}>
      {children}
    </button>
  );
}

export interface Props {
  children?: ReactNode;
  style?: CSSProperties | null;
  href?: string | null;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  to?: string | null;
  type?: ButtonType;
  leftIcon?: ReactNode | IconName;
  rightIcon?: ReactNode | IconName;
  leftIconSize?: number;
  rightIconSize?: number;
  buttonType?: 'submit' | 'reset' | 'button';
  active?: boolean;
  pending?: boolean;
  success?: boolean;
  errored?: boolean;
  disabled?: boolean;
}

export default function Button({
  children = null,
  style = null,
  href = null,
  onClick = undefined,
  to = null,
  type = ButtonType.DEFAULT,
  leftIcon = undefined,
  rightIcon = undefined,
  leftIconSize = undefined,
  rightIconSize = undefined,
  buttonType = 'button',
  active = false,
  pending = false,
  success = false,
  errored = false,
  disabled = false,
}: Props): ReactElement {
  return (
    <Wrapper
      href={href}
      onClick={onClick}
      to={to}
      pending={pending}
      disabled={disabled}
      buttonType={buttonType}
      type={type}
      active={active}
      success={success}
      errored={errored}
      style={style}>
      <div className="background" />

      <div className="container">
        <div className="body">
          {leftIcon ? (
            <div className="left-icon">
              {typeof leftIcon === 'string' ? (
                <Icon name={leftIcon} size={leftIconSize} />
              ) : (
                leftIcon
              )}
            </div>
          ) : null}
          {leftIcon && children ? <div className="left-separator" /> : null}

          {children ? <span>{children}</span> : null}
        </div>

        {rightIcon ? (
          <div className="right-icon">
            {typeof rightIcon === 'string' ? (
              <Icon name={rightIcon} size={rightIconSize} />
            ) : (
              rightIcon
            )}
          </div>
        ) : null}
      </div>

      <div className="pending">
        <Loader size={17} color="white" />
      </div>

      {/* <div className="error"> */}
      {/*  <Icon type={IconType.ALERT} color="white" size={20} /> */}
      {/* </div> */}
    </Wrapper>
  );
}
