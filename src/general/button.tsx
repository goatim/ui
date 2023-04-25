import {
  ForwardedRef,
  forwardRef,
  MouseEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { Loader } from './loader';
import { Icon, IconName } from './icon';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonShape = 'filled' | 'text';

export type ButtonTheme =
  | 'dark'
  | 'light'
  | 'electric-blue'
  | 'transparent-dark'
  | 'transparent-light'
  | 'buy'
  | 'sell'
  | 'gold';

export interface ButtonProps extends WrapperProps {
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

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      children,
      href,
      target,
      rel,
      referrerPolicy,
      onClick,
      type,
      onFocus,
      onBlur,
      size = 'medium',
      shape = 'filled',
      theme = 'dark',
      active,
      pending,
      success,
      errored,
      disabled,
      leftIcon,
      rightIcon,
      fullWidth,
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>,
  ): ReactElement {
    const [autoPending, setAutoPending] = useState<boolean>(false);
    const [autoSuccess, setAutoSuccess] = useState<boolean>(false);
    const [autoErrored, setAutoErrored] = useState<boolean>(false);

    const className = useMemo<string>(() => {
      const classNames: string[] = ['goatim-ui-button', size, shape, theme];

      if (active) {
        classNames.push('active');
      }
      if (pending || autoPending) {
        classNames.push('pending');
      }
      if (success || autoSuccess) {
        classNames.push('success');
      }
      if (errored || autoErrored) {
        classNames.push('errored');
      }
      if (disabled) {
        classNames.push('disabled');
      }

      if (fullWidth) {
        classNames.push('full-width');
      }

      return classNames.join(' ');
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
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        referrerPolicy={referrerPolicy}
        onClick={onClick ? onButtonClick : undefined}
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
  },
);
