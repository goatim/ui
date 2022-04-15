import {
  ReactElement,
  useState,
  useEffect,
  useCallback,
  cloneElement,
  MouseEventHandler,
  FocusEventHandler,
} from 'react';
import _ from 'lodash';
import { FieldComponentProps } from '@cezembre/forms';
import Icon, { IconName } from '../general/icon';
import Button, { ButtonSize, ButtonShape, ButtonTheme } from '../general/button';

export interface RadioOption<V = unknown> {
  value: V;
  element?: ReactElement | string | number;
}

export interface RadioOptionProps<V = unknown> {
  option?: RadioOption<V>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
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
  active,
  size,
  shape = 'filled',
  theme = 'default',
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

export interface Props<V = unknown> extends FieldComponentProps {
  label?: string;
  options?: RadioOption<V>[];
  canReset?: boolean;
  instructions?: ReactElement | string;
}

export default function Radio<V = unknown>({
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
}: Props<V>): ReactElement {
  const [classNames, setClassNames] = useState<(string | undefined)[]>([
    'friday-ui-fields-radio',
    isActive ? 'isActive' : undefined,
    error ? 'error' : undefined,
    warning ? 'warning' : undefined,
  ]);

  useEffect(() => {
    const nextClassNames = ['friday-ui-fields-radio'];

    if (isActive) {
      nextClassNames.push('active');
    }

    if (error) {
      nextClassNames.push('error');
    }

    if (warning) {
      nextClassNames.push('warning');
    }
    setClassNames(nextClassNames);
  }, [error, isActive, warning]);

  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | undefined>();

  useEffect(() => {
    if (value !== undefined) {
      const i = _.findIndex(options, (option) => option.value === value);
      if (i !== -1) {
        setSelectedOptionIndex(i);
      }
    }
  }, [value, options]);

  const selectOption = useCallback(
    (index: number | undefined, _value: V | undefined) => {
      setSelectedOptionIndex(index);
      onChange(_value);
    },
    [onChange],
  );

  return (
    <div className={classNames.filter(String).join(' ')}>
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
              onClick={() => selectOption(index, option.value)}
              active={index === selectedOptionIndex}
            />
          </div>
        ))}
        {canReset ? (
          <button
            type="button"
            className="reset"
            onClick={() => selectOption(undefined, undefined)}>
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