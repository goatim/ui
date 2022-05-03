import { ReactElement, useMemo } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { FieldComponentProps } from '@cezembre/forms';
import Icon from '../general/icon';

export interface Props extends FieldComponentProps {
  label?: string | null;
  instructions?: string | null;
}

export default function CreditCardInput({
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
}: Props): ReactElement {
  const className = useMemo<string>(() => {
    let res = `fleuraison-ui-credit-card-input`;
    if (visited) {
      res += ' visited';
    }
    if (isActive) {
      res += 'active';
    }
    if ((visited || submitted) && !isActive && error) {
      res += 'error';
    }
    if (warning) {
      res += warning;
    }
    return res;
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
