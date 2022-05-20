import { ReactElement, useMemo, useCallback, useRef, JSXElementConstructor } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import { useClickOutside } from '@cezembre/fronts';
import _ from 'lodash';
import Icon from './icon';

export interface SelectOption<V = unknown> {
  value: V;
  element?: ReactElement | string | number;
}

export interface SelectOptionProps<V = unknown> {
  option?: SelectOption<V>;
  DefaultComponent?: JSXElementConstructor<{ value: V }>;
  placeholder?: string;
}

function SelectOptionComponent<V>({
  option,
  DefaultComponent,
  placeholder,
}: SelectOptionProps<V>): ReactElement | null {
  if (option?.element && option?.value) {
    if (typeof option.element === 'string' || typeof option.element === 'number') {
      return <span>{option.element}</span>;
    }
    return option.element;
  }

  if (DefaultComponent && option?.value) {
    return <DefaultComponent value={option.value} />;
  }

  if (option?.value && typeof option.value === 'string' && option.value.length) {
    return <span>{option.value}</span>;
  }

  return <span className="placeholder">{placeholder || 'Selectioner une option'}</span>;
}

export type SelectType = 'default' | 'flat';

export interface Props<V = unknown> extends FieldComponentProps<V | undefined> {
  label?: string;
  options?: SelectOption<V>[];
  DefaultComponent?: JSXElementConstructor<{ value: V }>;
  canCancel?: boolean;
  type?: SelectType;
  instructions?: ReactElement | string;
  fullWidth?: boolean;
}

export default function Select<V = unknown>({
  value,
  error,
  warning,
  isActive,
  onFocus,
  onBlur,
  name,
  onChange,
  label,
  options = [],
  DefaultComponent,
  canCancel,
  instructions,
  type = 'default',
  fullWidth,
}: Props<V>): ReactElement {
  const className = useMemo<string>(() => {
    let res = `friday-ui-select ${type}`;

    if (isActive) {
      res += ' active';
    }

    if (error) {
      res += ' error';
    }

    if (warning) {
      res += ' warning';
    }

    if (fullWidth) {
      res += ' full-width';
    }
    return res;
  }, [error, fullWidth, isActive, type, warning]);

  const toggleFocus = useCallback(() => {
    if (!isActive) {
      onFocus();
    } else {
      onBlur();
    }
  }, [isActive, onBlur, onFocus]);

  const selectOption = useCallback(
    (_value: V) => {
      onChange(_value);
      onBlur();
    },
    [onBlur, onChange],
  );

  const selectRef = useRef<HTMLDivElement>(null);

  const clickOutside = useCallback(() => {
    if (isActive) {
      onBlur();
    }
  }, [isActive, onBlur]);

  useClickOutside(selectRef, clickOutside);

  const selectedOption = useMemo<SelectOption<V> | undefined>(() => {
    if (value) {
      return options?.find((option) => _.isEqual(option.value, value)) || { value };
    }
    return undefined;
  }, [options, value]);

  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}

      <div className="container" ref={selectRef}>
        {selectedOption || type === 'default' ? (
          <div className="selector">
            <button onClick={toggleFocus} type="button" className="selected">
              <SelectOptionComponent<V>
                option={selectedOption}
                DefaultComponent={DefaultComponent}
              />
              {type === 'default' ? <Icon name="chevron-down" /> : null}
            </button>
            {selectedOption && canCancel ? (
              <button type="button" className="cancel" onClick={() => onChange(undefined)}>
                <Icon name="x" />
              </button>
            ) : null}
          </div>
        ) : null}

        <div className="options">
          {options?.map((option, index) => (
            <button
              type="button"
              key={
                typeof option.value === 'string' || typeof option.value === 'number'
                  ? option.value
                  : index
              }
              onClick={() => selectOption(option.value)}
              className={`option${_.isEqual(option.value, value) ? ' active' : ''}`}>
              <SelectOptionComponent<V> option={option} DefaultComponent={DefaultComponent} />
            </button>
          ))}
        </div>
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
