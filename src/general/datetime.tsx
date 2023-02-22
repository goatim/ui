import { ReactElement } from 'react';
import { DateTime } from 'luxon';

export interface DatetimeProps {
  value: DateTime;
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
  return (
    <span className="friday-ui-datetime">
      {date ? value.toLocaleString(DateTime.DATE_MED) : null}
      {date && time ? <br /> : null}
      {time ? <span className="time">{value.toLocaleString(DateTime.TIME_SIMPLE)}</span> : null}
    </span>
  );
}
