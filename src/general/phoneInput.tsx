import { ChangeEvent, ReactElement, useCallback, useMemo } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import { Icon } from './icon';

export interface PhoneInputValue {
  region_code?: string;
  number?: string;
}

export interface PhoneInputProps extends FieldComponentProps<PhoneInputValue> {
  label?: string;
  instructions?: string;
}

export function PhoneInput({
  name,
  label,
  instructions,
  error,
  warning,
  onChange,
  onFocus,
  onBlur,
  value,
}: PhoneInputProps): ReactElement {
  const onChangeInput = useCallback(
    (input: ChangeEvent<HTMLInputElement>) => {
      const { value: number } = input.target;
      onChange((oldValue) => ({ ...oldValue, number }));
    },
    [onChange],
  );

  const inputValue = useMemo<string>(() => {
    if (!value) {
      return '';
    }
    return value.number || '';
  }, [value]);

  return (
    <div className="goatim-ui-phone-input">
      {label ? <label htmlFor={name}>{label}</label> : null}

      <div className="body">
        <div className="region-code-selector">
          <button className="selector">+33</button>
        </div>
        <input
          type="tel"
          value={inputValue}
          onChange={onChangeInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
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
