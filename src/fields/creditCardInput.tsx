import { ReactElement, useEffect, useState } from 'react';
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
  const [classNames, setClassNames] = useState<(string | undefined)[]>([
    'fleuraison-ui-credit-card-input',
    visited ? 'visited' : undefined,
    isActive ? 'active' : undefined,
    (visited || submitted) && !isActive && error ? 'error' : undefined,
    warning ? 'warning' : undefined,
  ]);

  useEffect(() => {
    setClassNames([
      'fleuraison-ui-credit-card-input',
      visited ? 'visited' : undefined,
      isActive ? 'active' : undefined,
      (visited || submitted) && !isActive && error ? 'error' : undefined,
      warning ? 'warning' : undefined,
    ]);
  }, [error, isActive, submitted, visited, warning]);

  return (
    <div className={classNames.filter((c) => c).join(' ')}>
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
