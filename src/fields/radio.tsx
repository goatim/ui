import { ReactElement, useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import { FieldComponentProps } from '@cezembre/forms';
import Icon from '../general/icon';

export interface Option<Value = any> {
  value: Value;
  item?: ReactElement | string;
}

export interface OptionProps {
  option?: Option;
  placeholder?: ReactElement | string;
}

function OptionComponent({ option }: OptionProps): ReactElement | null {
  if (option?.item) {
    if (typeof option.item === 'string') {
      return <span>{option.item}</span>;
    }
    return option.item;
  }

  if (option?.value && typeof option.value === 'string' && option.value.length) {
    return <span>{option.value}</span>;
  }

  return null;
}

export interface Props extends FieldComponentProps {
  label?: string;
  options?: Option[];
  instructions?: ReactElement | string;
}

export default function Select({
  value,
  error,
  warning,
  isActive,
  name,
  onChange,
  label = undefined,
  options = [],
  instructions = undefined,
}: Props): ReactElement {
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

  const [radioedOptionIndex, setSelectedOptionIndex] = useState<number | undefined>();

  useEffect(() => {
    if (value !== undefined) {
      const i = _.findIndex(options, (option) => option.value === value);
      if (i !== -1) {
        setSelectedOptionIndex(i);
      }
    }
  }, [value, options]);

  const radioOption = useCallback(
    (index, _value) => {
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
          <button
            key={option.value}
            type="button"
            className={`option${radioedOptionIndex === index ? ' selected' : ''}`}
            onClick={() => radioOption(index, option.value)}>
            <div className="container">
              <OptionComponent option={option} />
            </div>
          </button>
        ))}
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
