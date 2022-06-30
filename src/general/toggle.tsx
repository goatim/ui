import { ReactElement, useCallback, KeyboardEvent, useMemo } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import Icon from './icon';

export interface Props extends FieldComponentProps<boolean> {
  label?: string;
  instructions?: string;
}

export default function Toggle({
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
    let nextClassName = 'friday-ui-toggle';

    if (isActive) {
      nextClassName += ' active';
    }

    if (error) {
      nextClassName += ' error';
    }

    if (warning) {
      nextClassName += ' warning';
    }

    return nextClassName;
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
    <div className={className}>
      <div className="container">
        <div
          className="box"
          role="button"
          aria-pressed={value}
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
