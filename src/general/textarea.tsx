import { ReactElement, useMemo } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import { Icon } from './icon';

export interface TextareaProps extends FieldComponentProps<string | number | null> {
  label?: string;
  placeholder?: string;
  instructions?: string;
  spellCheck?: boolean;
}

export function Textarea({
  value,
  error,
  warning,
  isActive,
  visited,
  submitted,
  onFocus,
  name,
  onChange,
  onBlur,
  label,
  placeholder,
  instructions,
  spellCheck = true,
}: TextareaProps): ReactElement {
  const classNames = useMemo<string>(() => {
    let nextClassName = 'friday-ui-textarea';

    if (visited) {
      nextClassName += ' visited';
    }

    if (isActive) {
      nextClassName += ' active';
    }

    if (error) {
      nextClassName += ' error';
    }

    return nextClassName;
  }, [error, isActive, visited]);

  return (
    <div className={classNames}>
      {label ? <label htmlFor={name}>{label}</label> : null}

      <textarea
        name={name}
        value={value || ''}
        placeholder={placeholder || ''}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        spellCheck={spellCheck}
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
