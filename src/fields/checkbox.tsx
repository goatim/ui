import { ReactElement, useEffect, useState } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import Icon from '../general/icon';
import Check from '../general/check';

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
  const [classNames, setClassNames] = useState<string[]>(['friday-ui-checkbox']);

  useEffect(() => {
    const nextClassNames = ['friday-ui-checkbox'];

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

  return (
    <div className={classNames.join(' ')}>
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
