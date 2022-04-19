import { useCallback, useEffect, useState, ReactElement, ChangeEvent } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import { Adapter, Resolver } from './input';
import Icon from '../general/icon';

export interface Props extends FieldComponentProps<number | undefined> {
  adapter?: Adapter<number | undefined>;
  resolver?: Resolver<number | undefined>;
  format?: Resolver<number | undefined>;
  label?: string;
  placeholder?: string;
  instructions?: string;
  min?: number;
  max?: number;
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
  step = 1,
}: Props): ReactElement {
  const [classNames, setClassNames] = useState<string[]>(['friday-ui-fields-counter']);

  useEffect(() => {
    const nextClassNames = ['friday-ui-fields-counter'];

    if (visited) {
      nextClassNames.push('visited');
    }

    if (isActive) {
      nextClassNames.push('active');
    }

    if ((visited || submitted) && !isActive && error) {
      nextClassNames.push('error');
    }

    if (warning) {
      nextClassNames.push('warning');
    }

    setClassNames(nextClassNames);
  }, [isActive, hasChanged, error, visited, warning, submitted]);

  const change = useCallback(
    (event: ChangeEvent<{ value: string }>) => {
      if (adapter) {
        onChange(adapter(event.target.value));
      } else {
        onChange(event.target.value.length ? Number(event.target.value) : undefined);
      }
    },
    [adapter, onChange],
  );

  const increase = useCallback(() => {
    const nextValue: number = (value || 0) + (step || 1);
    if (max === undefined || nextValue <= max) {
      onChange(nextValue);
    }
  }, [max, onChange, step, value]);

  const decrease = useCallback(() => {
    const nextValue: number = (value || 0) - (step || 1);
    if (min === undefined || nextValue >= min) {
      onChange(nextValue);
    }
  }, [min, onChange, step, value]);

  return (
    <div className={classNames.join(' ')}>
      {label ? <label htmlFor={name}>{label}</label> : null}

      <div className="container">
        <button onClick={decrease} type="button" className="minus">
          <Icon name="minus" size={20} />
        </button>
        <input
          name={name}
          value={
            // eslint-disable-next-line no-nested-ternary
            !isActive && format ? format(value) : resolver ? resolver(value) : value?.toString()
          }
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
