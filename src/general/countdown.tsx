import { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DateTime, Duration } from 'luxon';

export type CountdownTheme = 'default' | 'light';

export interface Props {
  label?: string;
  date?: DateTime | string;
  theme?: CountdownTheme;
  align?: AlignSetting;
}

export default function Countdown({
  label,
  date,
  theme = 'default',
  align = 'center',
}: Props): ReactElement {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const resolvedDate = useMemo<DateTime | undefined>(
    () => (typeof date === 'string' ? DateTime.fromISO(date) : date),
    [date],
  );

  const [remainingTime, setRemainingTime] = useState<Duration | undefined>(resolvedDate?.diffNow());

  const resolveRemainingTime = useCallback(() => {
    setRemainingTime(resolvedDate?.diffNow());
    timeout.current = setTimeout(resolveRemainingTime, 1000);
  }, [resolvedDate]);

  useEffect(() => {
    resolveRemainingTime();
    return () => (timeout.current ? clearTimeout(timeout.current) : undefined);
  }, [resolveRemainingTime]);

  return (
    <div className={`friday-ui-countdown ${theme} ${align}`}>
      <span className="label">{label}</span>
      <span className="remaining">{remainingTime?.toFormat('d:hh:mm:ss')}</span>
    </div>
  );
}
