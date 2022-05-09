import { ReactElement, useMemo } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import Icon from './icon';
import Check from './check';

export interface Props extends FieldComponentProps<boolean> {
  label?: string;
  instructions?: string;
}

export default function Checkbox({
  value,
  error,
  warning,
  isActive,
  onFocus,
  name,
  onChange,
  onBlur,
  label,
  instructions,
}: Props): ReactElement {
  const className = useMemo<string>(() => {
    let res = 'friday-ui-checkbox';

    if (isActive) {
      res += 'active';
    }

    if (error) {
      res += 'error';
    }

    if (warning) {
      res += 'warning';
    }
    return res;
  }, [error, isActive, warning]);

  return (
    <div className={className}>
      <div className="container">
        <Check active={value as boolean} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
        {label ? <label htmlFor={name}>{label}</label> : null}
      </div>

      {instructions ? <p className="instructions">{instructions}</p> : null}

      {error ? (
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
