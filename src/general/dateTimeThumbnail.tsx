import { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DateTime, Duration } from 'luxon';
import { Icon } from './icon';

export type DateTimeThumbnailTheme = 'dark' | 'light' | 'transparent-dark' | 'transparent-light';

export type DateTimeThumbnailSize = 'small' | 'medium' | 'big';

export interface DateTimeThumbnailProps {
  label?: string;
  dateTime?: DateTime | string;
  countdown?: boolean;
  align?: AlignSetting;
  theme?: DateTimeThumbnailTheme;
  size?: DateTimeThumbnailSize;
}

export function DateTimeThumbnail({
  label,
  dateTime,
  countdown = false,
  align,
  theme,
  size = 'medium',
}: DateTimeThumbnailProps): ReactElement {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const resolvedDateTime = useMemo<DateTime | undefined>(
    () => (typeof dateTime === 'string' ? DateTime.fromISO(dateTime) : dateTime),
    [dateTime],
  );

  const [remainingTime, setRemainingTime] = useState<Duration | undefined>(
    resolvedDateTime?.diffNow(),
  );

  const resolveRemainingTime = useCallback(() => {
    if (countdown) {
      setRemainingTime(resolvedDateTime?.diffNow());
      timeout.current = setTimeout(resolveRemainingTime, 1000);
    }
  }, [countdown, resolvedDateTime]);

  useEffect(() => {
    if (countdown) {
      resolveRemainingTime();
    }
    return () => (timeout.current ? clearTimeout(timeout.current) : undefined);
  }, [countdown, resolveRemainingTime]);

  const isPast = useMemo<boolean>(() => {
    return (remainingTime?.toMillis() || 0) < 0;
  }, [remainingTime]);

  return (
    <div className={`goatim-ui-date-time-thumbnail ${align} ${theme} ${size}`}>
      {label && <span className="label">{label}</span>}
      {countdown && !isPast ? (
        <div className="flex flex-row items-center gap-1 text-sm countdown">
          <Icon name="clock" />
          <span className="leading-none">{remainingTime?.toFormat('d:hh:mm:ss')}</span>
        </div>
      ) : (
        <span>
          {resolvedDateTime?.toLocaleString(DateTime.DATE_SHORT)}
          <br />
          {resolvedDateTime?.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
        </span>
      )}
    </div>
  );
}

export function DateTimeThumbnailShort({ dateTime }: DateTimeThumbnailProps): ReactElement {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const resolvedDateTime = useMemo<DateTime | undefined>(
    () => (typeof dateTime === 'string' ? DateTime.fromISO(dateTime) : dateTime),
    [dateTime],
  );

  const [remainingTime, setRemainingTime] = useState<Duration | undefined>(
    resolvedDateTime?.diffNow(),
  );

  const resolveRemainingTime = useCallback(() => {
    setRemainingTime(resolvedDateTime?.diffNow());
    timeout.current = setTimeout(resolveRemainingTime, 1000);
  }, [resolvedDateTime]);

  useEffect(() => {
    resolveRemainingTime();
    return () => (timeout.current ? clearTimeout(timeout.current) : undefined);
  }, [resolveRemainingTime]);

  const isPast = useMemo<boolean>(() => {
    return (remainingTime?.toMillis() || 0) < 0;
  }, [remainingTime]);

  return (
    <div className={`goatim-ui-date-time-thumbnail`}>
      {!isPast ? (
        <span className="countdown">{remainingTime?.toFormat('d:hh:mm:ss')}</span>
      ) : (
        <span>
          {resolvedDateTime?.toLocaleString(DateTime.DATE_SHORT)}
          <br />
          {resolvedDateTime?.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
        </span>
      )}
    </div>
  );
}
