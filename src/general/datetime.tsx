import { ReactElement, useMemo } from 'react';
import { DateTime } from 'luxon';

export interface DatetimeProps {
  value: DateTime | string;
  date?: boolean;
  time?: boolean;
  relative?: boolean;
}

export function formatDateTime(dateTime: string): string {
  if (dateTime) {
    const dt = DateTime.fromISO(dateTime);
    return `${dt.toLocaleString(DateTime.DATE_SHORT)} ${dt.toLocaleString(
      DateTime.TIME_24_SIMPLE,
    )}`;
  }
  return dateTime;
}

export function Datetime({
  value,
  date = true,
  time = false,
  relative = false,
}: DatetimeProps): ReactElement {
  const resolvedValue = useMemo<DateTime>(() => {
    if (typeof value === 'string') {
      return DateTime.fromISO(value);
    }
    return value;
  }, [value]);

  return (
    <span className="goatim-ui-datetime">
      {date ? resolvedValue.toLocaleString(DateTime.DATE_SHORT) : null}
      {date && time ? <br /> : null}
      {time ? (
        <span className="time">{resolvedValue.toLocaleString(DateTime.TIME_SIMPLE)}</span>
      ) : null}
    </span>
  );
}
