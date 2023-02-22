import { ReactElement, useMemo } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import { Icon } from './icon';
import { Check } from './check';

export interface CheckboxProps extends FieldComponentProps<boolean> {
  label?: string;
  instructions?: string;
}

export function Checkbox({
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
}: CheckboxProps): ReactElement {
  const className = useMemo<string>(() => {
    const classNames: string[] = ['friday-ui-checkbox'];

    if (isActive) {
      classNames.push('active');
    }

    if (error) {
      classNames.push('error');
    }

    if (warning) {
      classNames.push('warning');
    }

    return classNames.join(' ');
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
