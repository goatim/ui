import { ReactElement, useMemo } from 'react';
import { DateTime } from 'luxon';

export interface DatetimeProps {
  value: DateTime | string;
  date?: boolean;
  time?: boolean;
  relative?: boolean;
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
      {date ? resolvedValue.toLocaleString(DateTime.DATE_MED) : null}
      {date && time ? <br /> : null}
      {time ? (
        <span className="time">{resolvedValue.toLocaleString(DateTime.TIME_SIMPLE)}</span>
      ) : null}
    </span>
  );
}
