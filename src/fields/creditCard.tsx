import { ReactElement, useEffect, useState } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { FieldComponentProps } from '@cezembre/forms';
import Icon from '../general/icon';
import colors from '../styles/_colors.scss';
import CheckboxField from './checkbox';

export interface Props extends FieldComponentProps {
  label?: string | null;
  instructions?: string | null;
}

export default function CreditCardField({
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
  const [classNames, setClassNames] = useState<string[]>(['friday-ui-credit-card']);

  useEffect(() => {
    const nextClassNames = ['friday-ui-credit-card'];

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
  }, [error, isActive, submitted, visited, warning]);

  return (
    <div className={classNames.join(' ')}>
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
          <Icon name="alert" size={15} color={colors.RED} />
          <span>{error}</span>
        </div>
      ) : null}

      {warning ? (
        <div className="warning">
          <Icon name="alert" size={15} color={colors.RED} />
          <span>{warning}</span>
        </div>
      ) : null}
    </div>
  );
}
