import { CSSProperties, ReactElement, useCallback, useRef, useState } from 'react';
import { DateTime } from 'luxon';
import { FieldComponentProps } from '@cezembre/forms';
import { formatRelativeDateTime, useClickOutside } from '@cezembre/fronts';
import DatePicker from './datePicker';
import TimePicker from './timePicker';
import { IconName } from '../general/icon';
import Index from '../general/button';

export interface Props extends FieldComponentProps<DateTime | null> {
  placeholder?: string;
  format?: string | ((value: DateTime | null | undefined) => string);
  buttonType?: 'button' | 'submit' | 'reset';
  buttonStyle?: CSSProperties;
  buttonIcon?: IconName;
  expanded?: boolean;
}

export default function DateTimePickerField({
  value,
  onChange,
  onBlur,
  onFocus,
  initialValue,
  isActive,
  isValid,
  hasChanged,
  error,
  warning,
  submitted,
  form,
  name,
  visited,
  placeholder,
  format,
  expanded = false,
  buttonType = 'button',
  buttonStyle = {},
  buttonIcon = 'calendar',
}: Props): ReactElement {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const picker = useRef<HTMLDivElement>(null);

  useClickOutside(picker, () => setIsExpanded(false));

  const getLabel = useCallback(() => {
    if (!value) {
      return placeholder || 'Chosissez une date';
    }
    if (format && typeof format === 'string') {
      return value.toFormat(format);
    }
    if (format && typeof format === 'function') {
      return format(value);
    }
    return formatRelativeDateTime(value);
  }, [format, placeholder, value]);

  return (
    <div ref={picker} className="friday-ui-date-time-picker">
      {!expanded ? (
        <Index
          type={buttonType}
          style={buttonStyle}
          onClick={() => setIsExpanded(true)}
          leftIcon={buttonIcon}>
          {getLabel()}
        </Index>
      ) : null}

      <div className={`picker${!expanded ? ' expandable' : ''}${isExpanded ? ' expanded' : ''}`}>
        <div className="date">
          <DatePicker
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            initialValue={initialValue}
            isActive={isActive}
            isValid={isValid}
            hasChanged={hasChanged}
            error={error}
            warning={warning}
            submitted={submitted}
            form={form}
            name={name}
            visited={visited}
            expanded
          />
        </div>

        <div className="time">
          <TimePicker
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            initialValue={initialValue}
            isActive={isActive}
            isValid={isValid}
            hasChanged={hasChanged}
            error={error}
            warning={warning}
            submitted={submitted}
            form={form}
            name={name}
            visited={visited}
          />
        </div>
      </div>
    </div>
  );
}
