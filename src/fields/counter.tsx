import { useCallback, useEffect, useState, ReactElement, ChangeEvent } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import { Adapter, Resolver } from './input';
import Icon from '../general/icon';

export type Theme = 'default' | 'black' | 'coloured';

export interface Props extends FieldComponentProps<number> {
  adapter?: Adapter<number>;
  resolver?: Resolver<number>;
  theme?: Theme;
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
  theme = 'default',
  adapter = undefined,
  resolver = undefined,
  label = undefined,
  placeholder = undefined,
  instructions = undefined,
  min = 0,
  max = undefined,
  step = 1,
}: Props): ReactElement {
  const [classNames, setClassNames] = useState<string[]>(['friday-ui-fields-counter', theme]);

  useEffect(() => {
    const nextClassNames = ['friday-ui-fields-counter', theme];

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
  }, [isActive, hasChanged, error, visited, warning, submitted, theme]);

  const change = useCallback(
    (event: ChangeEvent<{ value: string }>) => {
      if (adapter) {
        onChange(adapter(event.target.value));
      } else {
        onChange(Number(event.target.value));
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

      {value}

      <div className="container">
        <button onClick={decrease} type="button">
          -
        </button>
        <input
          name={name}
          value={resolver ? resolver(value) : value}
          type="number"
          placeholder={placeholder !== undefined ? placeholder : ''}
          autoComplete="off"
          onFocus={onFocus}
          onChange={change}
          onBlur={onBlur}
          spellCheck={false}
          autoCorrect="off"
          min={resolver ? resolver(min) : min}
          max={resolver ? resolver(max) : max}
          step={resolver ? resolver(step) : step}
        />
        <button onClick={increase} type="button">
          +
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
