import { ReactElement, useCallback, useMemo, useRef } from 'react';
import { DateTime } from 'luxon';
import { formatRelativeDateTime, useClickOutside } from '@cezembre/fronts';
import { DatePicker, DatePickerProps } from './datePicker';
import { TimePicker } from './timePicker';
import { Button } from './button';

export type DateTimePickerProps = DatePickerProps;

export function DateTimePicker({
  label,
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
  buttonIcon = 'calendar',
  expanded = false,
  disablePast = false,
  disableToday = false,
  disableFuture = false,
  disableBefore,
  disableAfter,
  disabledDays,
  disabledPeriods,
}: DateTimePickerProps): ReactElement {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const pickerRef = useRef<HTMLDivElement>(null);

  const toggleFocus = useCallback(() => {
    if (!isActive) {
      onFocus();
    } else {
      onBlur();
    }
  }, [isActive, onBlur, onFocus]);

  const clickOutside = useCallback(() => {
    if (isActive) {
      onBlur();
    }
  }, [isActive, onBlur]);

  useClickOutside([buttonRef, pickerRef], clickOutside);

  const resolvedValue = useMemo<DateTime | null | undefined>(() => {
    return typeof value === 'string' ? DateTime.fromISO(value) : value;
  }, [value]);

  const actionLabel = useMemo<string>(() => {
    if (!resolvedValue) {
      return placeholder || 'Choisissez une date';
    }
    if (format && typeof format === 'string') {
      return resolvedValue.toFormat(format);
    }
    if (format && typeof format === 'function') {
      return format(resolvedValue);
    }
    return formatRelativeDateTime(resolvedValue);
  }, [format, placeholder, resolvedValue]);

  return (
    <div className="goatim-ui-date-time-picker">
      {label ? <label htmlFor={name}>{label}</label> : null}

      {!expanded ? (
        <Button
          ref={buttonRef}
          onClick={toggleFocus}
          shape="filled"
          theme="light"
          leftIcon={buttonIcon}>
          {actionLabel}
        </Button>
      ) : null}

      <div
        ref={pickerRef}
        className={`picker${!expanded ? ' expandable' : ''}${isActive ? ' active' : ''}`}>
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
            disablePast={disablePast}
            disableToday={disableToday}
            disableFuture={disableFuture}
            disableBefore={disableBefore}
            disableAfter={disableAfter}
            disabledDays={disabledDays}
            disabledPeriods={disabledPeriods}
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
