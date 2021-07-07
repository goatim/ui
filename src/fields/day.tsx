import { ReactElement, useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { FieldComponentProps } from '@cezembre/forms';
import Icon, { IconName } from '../general/icon';
import colors from '../styles/_colors.scss';
import Check from '../general/check';
import CheckboxField from './checkbox';

export type TimeSlot = string[];

export enum StandardTimeSlot {
  MORNING = 'morning',
  MIDDAY = 'midday',
  AFTERNOON = 'afternoon',
  EVENING = 'evening',
}

export interface StandardTimeSlotObject {
  name: StandardTimeSlot;
  label: string;
  long_label: string;
  value: TimeSlot;
}

export const standardsTimeSlots: StandardTimeSlotObject[] = [
  {
    name: StandardTimeSlot.MORNING,
    label: '10h → 12h',
    long_label: 'Entre 10h et 12h',
    value: ['10:00', '12:00'],
  },
  {
    name: StandardTimeSlot.MIDDAY,
    label: '12h → 14h',
    long_label: 'Entre 12h et 14h',
    value: ['12:00', '14:00'],
  },
  {
    name: StandardTimeSlot.AFTERNOON,
    label: '14h → 17h',
    long_label: 'Entre 14h et 17h',
    value: ['14:00', '17:00'],
  },
  {
    name: StandardTimeSlot.EVENING,
    label: '17h → 19h',
    long_label: 'Entre 17h et 19h',
    value: ['17:00', '19:00'],
  },
];

export function isTimeSlotsEquals(a: TimeSlot, b: TimeSlot): boolean {
  if (!a || !b || a.length !== b.length) {
    return false;
  }

  let equal = true;
  a.forEach((slot, i) => {
    if (slot !== b[i]) {
      equal = false;
    }
  });

  return equal;
}

export function containsTimeSlot(
  haystack: TimeSlot[] | null | undefined,
  needle: TimeSlot,
): boolean {
  if (!haystack) {
    return false;
  }

  let contains = false;
  haystack.forEach((timeSlot) => {
    if (isTimeSlotsEquals(timeSlot, needle)) {
      contains = true;
    }
  });

  return contains;
}

export function removeTimeSlot(
  day: TimeSlot[] | null | undefined,
  timeSlot: TimeSlot,
): TimeSlot[] | null {
  return day ? day.filter((ts: TimeSlot) => !isTimeSlotsEquals(ts, timeSlot)) : null;
}

export function addTimeSlot(day: TimeSlot[] | null | undefined, timeSlot: TimeSlot): TimeSlot[] {
  return day ? [...day, timeSlot] : [timeSlot];
}

export function getCurrentStandardTimeSlot(): StandardTimeSlotObject | undefined {
  const now = DateTime.local();

  return standardsTimeSlots.find(
    (standardTimeSlot: StandardTimeSlotObject) =>
      DateTime.fromISO(standardTimeSlot.value[0]) < now &&
      DateTime.fromISO(standardTimeSlot.value[1]) > now,
  );
}

export interface Props extends FieldComponentProps<TimeSlot[] | null> {
  label?: string;
  instructions?: string;
}

export default function DayField({
  value,
  error,
  warning,
  isActive,
  name,
  onChange,
  label,
  instructions,
}: Props): ReactElement {
  const [classNames, setClassNames] = useState<string[]>(['fleuraison-ui-day']);

  useEffect(() => {
    const nextClassNames = ['fleuraison-ui-day'];

    if (isActive) {
      nextClassNames.push('active');
    }

    if (error) {
      nextClassNames.push('error');
    }

    if (warning) {
      nextClassNames.push('warning');
    }

    setClassNames(nextClassNames);
  }, [error, isActive, warning]);

  return (
    <div className={classNames.join(' ')}>
      <div className="container">
        {label ? <label htmlFor={name}>{label}</label> : null}

        <div className="time-slots">
          {Object.values(standardsTimeSlots).map((timeSlot: StandardTimeSlotObject) => (
            <div className="time-slot" key={timeSlot.name}>
              <Check
                active={containsTimeSlot(value, timeSlot.value)}
                onChange={(tsActive) =>
                  onChange(
                    tsActive
                      ? addTimeSlot(value, timeSlot.value)
                      : removeTimeSlot(value, timeSlot.value),
                  )
                }>
                {timeSlot.label}
              </Check>
            </div>
          ))}
        </div>
      </div>

      {instructions ? <p className="instructions">{instructions}</p> : null}

      {error ? (
        <div className="error">
          <Icon name={IconName.ALERT} size={15} color={colors.RED} />
          <span>{error}</span>
        </div>
      ) : null}

      {warning ? (
        <div className="warning">
          <Icon name={IconName.ALERT} size={15} color={colors.RED} />
          <span>{warning}</span>
        </div>
      ) : null}
    </div>
  );
}
