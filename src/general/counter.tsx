import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import { Icon } from './icon';

export type CounterTransformationFunction = (value: number) => number;

export interface CounterProps extends FieldComponentProps<number | undefined> {
  adapter?: CounterTransformationFunction;
  resolver?: CounterTransformationFunction;
  format?: CounterTransformationFunction;
  label?: string;
  placeholder?: string;
  instructions?: string;
  conversion?: string;
  min?: number;
  max?: number;
  increment?: number;
  step?: number;
}

export function Counter({
  value,
  error,
  warning,
  isActive,
  hasChanged,
  visited,
  submitted,
  onFocus,
  name,
  onChange,
  onBlur,
  adapter,
  resolver,
  format,
  label,
  placeholder,
  conversion,
  instructions,
  min = 0,
  max,
  increment = 1,
  step = 1,
}: CounterProps): ReactElement {
  const className = useMemo<string>(() => {
    const classNames = ['friday-ui-counter'];

    if (visited) {
      classNames.push('visited');
    }

    if (isActive) {
      classNames.push('active');
    }

    if ((visited || submitted) && !isActive && error) {
      classNames.push('error');
    }

    if (warning) {
      classNames.push('warning');
    }

    return classNames.join(' ');
  }, [visited, isActive, submitted, error, warning]);

  const increase = useCallback(() => {
    const nextValue: number = (value || 0) + (increment || 1);
    if (max === undefined || nextValue <= max) {
      onChange(nextValue);
    }
  }, [max, onChange, increment, value]);

  const decrease = useCallback(() => {
    const nextValue: number = (value || 0) - (increment || 1);
    if (min === undefined || nextValue >= min) {
      onChange(nextValue);
    }
  }, [min, onChange, increment, value]);

  const [internalValue, setInternalValue] = useState<string>(value?.toString() || '');
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>('text');

  const change = useCallback(
    (event: ChangeEvent<{ value: string }>) => {
      setInternalValue(event.target.value);
      const resolvedValue: number | undefined = event.target.value
        ? Number(event.target.value)
        : undefined;
      if (adapter && resolvedValue !== undefined) {
        onChange(adapter(resolvedValue));
      } else {
        onChange(resolvedValue);
      }
    },
    [adapter, onChange],
  );

  useEffect(() => {
    if (value !== undefined) {
      let nextValue: number | undefined = value;
      if (!isActive && format) {
        setInputType('text');
        nextValue = format(nextValue);
      } else if (resolver) {
        setInputType('number');
        nextValue = resolver(nextValue);
      }
      setInternalValue(nextValue.toString());
    } else {
      setInputType('text');
      setInternalValue('');
    }
  }, [format, isActive, resolver, value]);

  return (
    <div className={className}>
      {label ? <label htmlFor={name}>{label}</label> : null}

      <div className="container">
        <button onClick={decrease} type="button" className="minus">
          <Icon name="minus" size={20} />
        </button>
        <input
          name={name}
          value={internalValue}
          type={inputType}
          placeholder={placeholder !== undefined ? placeholder : ''}
          autoComplete="off"
          onFocus={onFocus}
          onChange={change}
          onBlur={onBlur}
          spellCheck={false}
          autoCorrect="off"
          min={min !== undefined && resolver ? resolver(min) : min}
          max={max !== undefined && resolver ? resolver(max) : max}
          step={step !== undefined && resolver ? resolver(step) : step}
        />
        <button onClick={increase} type="button" className="plus">
          <Icon name="plus" size={20} />
        </button>
      </div>

      {conversion ? <p className="conversion">{conversion}</p> : null}

      {instructions ? <p className="instructions">{instructions}</p> : null}

      {(visited || submitted) && !isActive && error ? (
        <div className="error">
          <Icon name="alert-triangle" size={15} />
          <span>{error}</span>
        </div>
      ) : null}

      {warning ? (
        <div className="warning">
          <Icon name="alert-triangle" size={15} />
          <span>{warning}</span>
        </div>
      ) : null}
    </div>
  );
}
