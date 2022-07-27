import { useCallback, ReactElement, ChangeEvent, useMemo, useState, useEffect } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import Icon from './icon';

export type CounterTransformationFunction = (value: number | undefined) => number | undefined;

export interface Props extends FieldComponentProps<number | undefined> {
  adapter?: CounterTransformationFunction;
  resolver?: CounterTransformationFunction;
  format?: CounterTransformationFunction;
  label?: string;
  placeholder?: string;
  instructions?: string;
  min?: number;
  max?: number;
  increment?: number;
  step?: number;
}

export default function Counter({
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
  instructions,
  min = 0,
  max,
  increment = 1,
  step = 1,
}: Props): ReactElement {
  const [internalValue, setInternalValue] = useState<string>(value?.toString() || '');

  const className = useMemo<string>(() => {
    let res = 'friday-ui-counter';

    if (visited) {
      res += ' visited';
    }

    if (isActive) {
      res += ' active';
    }

    if ((visited || submitted) && !isActive && error) {
      res += ' error';
    }

    if (warning) {
      res += ' warning';
    }

    return res;
  }, [isActive, error, visited, warning, submitted]);

  const change = useCallback(
    (event: ChangeEvent<{ value: string }>) => {
      setInternalValue(event.target.value);
      const resolvedValue: number | undefined = event.target.value
        ? parseFloat(event.target.value)
        : undefined;
      if (adapter) {
        onChange(adapter(resolvedValue));
      } else {
        onChange(resolvedValue);
      }
    },
    [adapter, onChange],
  );

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

  useEffect(() => {
    let nextValue: number | undefined;
    if (!isActive && format) {
      nextValue = format(value);
    } else if (resolver) {
      nextValue = resolver(value);
    } else if (value !== undefined) {
      nextValue = value;
    }
    if (nextValue !== parseFloat(internalValue)) {
      setInternalValue(nextValue !== undefined ? nextValue.toString() : '');
    }
  }, [format, internalValue, isActive, resolver, value]);

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
          type="number"
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
