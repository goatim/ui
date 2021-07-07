import { ReactElement, useCallback, useEffect, useState } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import Icon, { IconName } from '../general/icon';
import colors from '../styles/_colors.scss';

export interface Props extends FieldComponentProps {
  label?: string | null;
  instructions?: string | null;
}

export default function SwitchField({
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
  const [classNames, setClassNames] = useState<string[]>(['fleuraison-ui-switch']);

  useEffect(() => {
    const nextClassNames = ['fleuraison-ui-switch'];

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
    (event: React.KeyboardEvent<HTMLDivElement>) => {
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
