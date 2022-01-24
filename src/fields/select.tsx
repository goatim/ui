import { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import _ from 'lodash';
import { FieldComponentProps } from '@cezembre/forms';
import { useClickOutside } from '@cezembre/fronts';
import Icon from '../general/icon';

export interface Option<Value = unknown> {
  value: Value;
  item?: ReactElement | string;
  key?: string;
}

export interface OptionProps<Value = unknown> {
  option?: Option<Value>;
  placeholder?: ReactElement | string;
}

function OptionComponent({ placeholder, option }: OptionProps): ReactElement {
  if (option?.item) {
    if (typeof option.item === 'string') {
      return <span>{option.item}</span>;
    }
    return option.item;
  }

  if (option?.value && typeof option.value === 'string' && option.value.length) {
    return <span>{option.value}</span>;
  }

  if (placeholder) {
    if (typeof placeholder === 'string') {
      return <span className="placeholder">{placeholder}</span>;
    }
    return placeholder;
  }

  return <span className="placeholder">Choisissez une option</span>;
}

export interface Props<Value = unknown> extends FieldComponentProps<Value> {
  label?: string;
  options?: Option<Value>[];
  placeholder?: ReactElement | string;
  instructions?: ReactElement | string;
}

export default function Select<Value = unknown>({
  value,
  error,
  warning,
  isActive,
  onFocus,
  name,
  onChange,
  onBlur,
  label,
  options = [],
  placeholder,
  instructions,
}: Props<Value>): ReactElement {
  const [classNames, setClassNames] = useState<(string | undefined)[]>([
    'friday-ui-fields-select',
    isActive ? 'isActive' : undefined,
    error ? 'error' : undefined,
    warning ? 'warning' : undefined,
  ]);

  useEffect(() => {
    const nextClassNames = ['friday-ui-fields-select'];

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
    const i = _.findIndex(options, (option) => _.isEqual(option.value, value));
    setSelectedOptionIndex(i !== -1 ? i : undefined);
  }, [value, options]);

  const toggleFocus = useCallback(() => {
    if (!isActive) {
      onFocus();
    } else {
      onBlur();
    }
  }, [isActive, onBlur, onFocus]);

  const selectOption = useCallback(
    (index, _value) => {
      setSelectedOptionIndex(index);
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

  return (
    <div className={classNames.filter(String).join(' ')} ref={selectRef}>
      {label && <label htmlFor={name}>{label}</label>}

      <div className="container">
        <button onClick={toggleFocus} type="button">
          <OptionComponent
            option={selectedOptionIndex !== undefined ? options[selectedOptionIndex] : undefined}
            placeholder={placeholder}
          />
          <Icon name="chevron-down" />
        </button>

        <div className="options">
          {options?.map((option, index) => (
            <button
              key={option.key || index}
              type="button"
              className={`option${selectedOptionIndex === index ? ' active' : ''}`}
              onClick={() => selectOption(index, option.value)}>
              <OptionComponent option={option} />
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
