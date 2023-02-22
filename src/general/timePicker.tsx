import { ReactElement, useCallback, useMemo } from 'react';
import { DateTime } from 'luxon';
import { FieldComponentProps } from '@cezembre/forms';

export interface TimePickerProps extends FieldComponentProps<DateTime | string | null> {
  label?: string;
}

const hours = Array<null>(24).fill(null);
const minutes = Array<null>(60).fill(null);

// const seconds = Array<null>(60).fill(null);

export function TimePicker({ label, name, value, onChange }: TimePickerProps): ReactElement {
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
          {hours.map((_, hour: number) => {
            const selected = resolvedValue && resolvedValue.hour === hour;

            return (
              <li key={hour.toString()}>
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
          {minutes.map((_, minute: number) => {
            const selected = resolvedValue && resolvedValue.minute === minute;

            return (
              <li key={minute.toString()}>
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
