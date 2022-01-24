import { ReactElement, useCallback, useEffect, useState, KeyboardEvent } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import Icon from '../general/icon';

export interface Props extends FieldComponentProps {
  label?: string | null;
  instructions?: string | null;
}

export default function Switch({
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
  const [classNames, setClassNames] = useState<string[]>(['friday-ui-switch']);

  useEffect(() => {
    const nextClassNames = ['friday-ui-switch'];

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

  const onClick = useCallback(() => {
    if (onChange) {
      onChange(!value);
    }
  }, [value, onChange]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (onChange && event.key === 'Enter') {
        onChange(!value);
      }
    },
    [value, onChange],
  );

  return (
    <div className={classNames.join(' ')}>
      <div className="container">
        <div
          className="box"
          role="button"
          aria-pressed={!!value}
          onKeyDown={onKeyDown}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          tabIndex={0}>
          <div className="status" />
        </div>
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
