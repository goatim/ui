import { cloneElement, FocusEventHandler, MouseEvent, ReactElement, useMemo } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import { Icon, IconName } from './icon';
import { Button, ButtonShape, ButtonSize, ButtonTheme } from './button';

export interface RadioOption<V = unknown> {
  value: V;
  element?: ReactElement | string | number;
}

export interface RadioOptionProps<V = unknown> {
  option?: RadioOption<V>;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => unknown;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  active?: boolean;
  size?: ButtonSize;
  shape?: ButtonShape;
  theme?: ButtonTheme;
  leftIcon?: IconName;
  rightIcon?: IconName;
}

function RadioOptionComponent<V = unknown>({
  option,
  onClick,
  onFocus,
  onBlur,
  active,
  size,
  shape = 'filled',
  theme = 'dark',
  leftIcon,
  rightIcon,
}: RadioOptionProps<V>): ReactElement | null {
  if (option?.element) {
    if (typeof option.element === 'string' || typeof option.element === 'number') {
      return (
        <Button
          type="button"
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          active={active}
          size={size}
          shape={shape}
          theme={theme}
          leftIcon={leftIcon}
          rightIcon={rightIcon}>
          {option.element}
        </Button>
      );
    }
    return cloneElement(option.element, { onClick, active });
  }

  if (option?.value && typeof option.value === 'string' && option.value.length) {
    return <span>{option.value}</span>;
  }

  return null;
}

export type RadioOrientation = 'horizontal' | 'vertical';

export interface RadioProps<V = unknown> extends FieldComponentProps<V | undefined> {
  label?: string;
  options?: RadioOption<V>[];
  canReset?: boolean;
  instructions?: ReactElement | string;
  orientation?: RadioOrientation;
  comparisonFn?: (a: V, b?: V) => boolean;
}

export function Radio<V = unknown>({
  value,
  error,
  warning,
  isActive,
  name,
  onChange,
  label,
  options = [],
  canReset,
  instructions,
  orientation = 'horizontal',
  comparisonFn,
}: RadioProps<V>): ReactElement {
  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-radio', orientation];

    if (isActive) {
      classNames.push('active');
    }

    if (error) {
      classNames.push('error');
    }

    if (warning) {
      classNames.push('warning');
    }
    return classNames.join(' ');
  }, [error, isActive, orientation, warning]);

  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}

      <div className="options">
        {options?.map((option, index) => (
          <div
            key={
              typeof option.value === 'string' || typeof option.value === 'number'
                ? option.value
                : index
            }
            className="option">
            <RadioOptionComponent<V>
              option={option}
              onClick={() => onChange(option.value)}
              active={comparisonFn ? comparisonFn(option.value, value) : option.value === value}
            />
          </div>
        ))}
        {canReset ? (
          <button type="button" className="reset" onClick={() => onChange(undefined)}>
            <Icon name="x" />
          </button>
        ) : null}
      </div>

      {instructions ? <p className="instructions">{instructions}</p> : null}

      {error ? (
        <div className="error">
          <Icon name="alert-triangle" />
          <span>{error}</span>
        </div>
      ) : null}

      {warning ? (
        <div className="warning">
          <Icon name="alert-triangle" />
          <span>{warning}</span>
        </div>
      ) : null}
    </div>
  );
}
