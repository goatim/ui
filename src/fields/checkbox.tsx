import { ReactElement, useEffect, useState } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import Icon, { IconName } from '../general/icon';
import colors from '../styles/_colors.scss';
import Check from '../general/check';

export interface Props extends FieldComponentProps<boolean> {
  label?: string | null;
  instructions?: string | null;
}

export default function CheckboxField({
  value,
  error,
  warning,
  isActive,
  onFocus,
  name,
  onChange,
  onBlur,
  label = null,
  instructions = null,
}: Props): ReactElement {
  const [classNames, setClassNames] = useState<string[]>(['fleuraison-ui-checkbox']);

  useEffect(() => {
    const nextClassNames = ['fleuraison-ui-checkbox'];

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
          <Icon name={IconName.ALERT} size={15} color={colors.RED} />
          <span>{error}</span>
        </div>
      ) : null}

      {warning ? (
        <div className="warning">
          <Icon name={IconName.ALERT} size={15} color={colors.RED} />
          <span>{warning}</span>
        </div>
      ) : null}
    </div>
  );
}
