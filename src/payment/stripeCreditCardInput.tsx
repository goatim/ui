import { ReactElement, useMemo } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { FieldComponentProps } from '@cezembre/forms';
import { Icon } from '../general';

export interface StripeCreditCardInputProps extends FieldComponentProps {
  label?: string | null;
  instructions?: string | null;
}

export function StripeCreditCardInput({
  visited,
  error,
  submitted,
  warning,
  isActive,
  name,
  onFocus,
  onBlur,
  onChange,
  label = null,
  instructions = null,
}: StripeCreditCardInputProps): ReactElement {
  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-stripe-credit-card-input'];
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
  }, [error, isActive, submitted, visited, warning]);

  return (
    <div className={className}>
      {label ? <label htmlFor={name}>{label}</label> : null}

      <CardElement
        className="card"
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        options={{ hidePostalCode: true }}
      />

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
