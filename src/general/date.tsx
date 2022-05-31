import { ReactElement, useMemo } from 'react';
import { DateTime } from 'luxon';

export type DateTheme = 'default' | 'light';

export interface Props {
  label?: string;
  date?: DateTime | string;
  align?: AlignSetting;
  theme?: DateTheme;
}

export default function Date({ label, date, align, theme }: Props): ReactElement {
  const resolvedDate = useMemo<DateTime | undefined>((): DateTime | undefined => {
    if (typeof date === 'string') {
      return DateTime.fromISO(date);
    }
    return date;
  }, [date]);

  return (
    <div className={`friday-ui-date ${align} ${theme}`}>
      <span className="label">{label}</span>
      <span>{resolvedDate?.toLocaleString(DateTime.DATE_SHORT)}</span>
      <span>{resolvedDate?.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}</span>
    </div>
  );
}
