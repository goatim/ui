import { ReactElement, useCallback, useMemo } from 'react';
import { DateTime } from 'luxon';
import { FieldComponentProps } from '@cezembre/forms';

export interface TimePickerProps extends FieldComponentProps<DateTime | string | null> {
  label?: string;
}

export function TimePicker({ label, name, value, onChange }: TimePickerProps): ReactElement {
  const hours = useMemo<string[]>(() => {
    return Array<null>(24)
      .fill(null)
      .map(() => Math.random().toString(36).substring(2, 7));
  }, []);

  const minutes = useMemo<string[]>(() => {
    return Array<null>(60)
      .fill(null)
      .map(() => Math.random().toString(36).substring(2, 7));
  }, []);

  const resolvedValue = useMemo<DateTime | null | undefined>(() => {
    return typeof value === 'string' ? DateTime.fromISO(value) : value;
  }, [value]);

  const selectHour = useCallback(
    (hour: number) => {
      if (!resolvedValue) {
        onChange(DateTime.fromObject({ hour }));
      } else {
        onChange(
          DateTime.fromObject({
            year: resolvedValue.year,
            month: resolvedValue.month,
            day: resolvedValue.day,
            hour,
            minute: resolvedValue.minute,
            second: resolvedValue.second,
            millisecond: resolvedValue.millisecond,
          }),
        );
      }
    },
    [onChange, resolvedValue],
  );

  const selectMinute = useCallback(
    (minute: number) => {
      if (!resolvedValue) {
        onChange(DateTime.fromObject({ minute }));
      } else {
        onChange(
          DateTime.fromObject({
            year: resolvedValue.year,
            month: resolvedValue.month,
            day: resolvedValue.day,
            hour: resolvedValue.hour,
            minute,
            second: resolvedValue.second,
            millisecond: resolvedValue.millisecond,
          }),
        );
      }
    },
    [onChange, resolvedValue],
  );

  return (
    <div className="friday-ui-time-picker">
      {label ? <label htmlFor={name}>{label}</label> : null}

      <div className="container">
        <ul>
          {hours.map((key, hour: number) => {
            const selected = resolvedValue && resolvedValue.hour === hour;

            return (
              <li key={key}>
                <button
                  onClick={() => selectHour(hour)}
                  className={selected ? ' selected' : ''}
                  type="button">
                  {hour < 10 ? `0${hour}` : hour}
                </button>
              </li>
            );
          })}
        </ul>

        <ul>
          {minutes.map((key, minute: number) => {
            const selected = resolvedValue && resolvedValue.minute === minute;

            return (
              <li key={key}>
                <button
                  onClick={() => selectMinute(minute)}
                  className={selected ? 'selected' : ''}
                  type="button">
                  {minute < 10 ? `0${minute}` : minute}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
