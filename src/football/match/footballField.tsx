import { ReactElement } from 'react';

export type FootballFieldTheme = 'dark' | 'light';

export interface FootballFieldProps {
  theme?: FootballFieldTheme;
}

export function FootballField({ theme = 'dark' }: FootballFieldProps): ReactElement {
  return (
    <svg className={`goatim-ui-football-field ${theme}`} viewBox="0 0 608.36 829.78">
      <path d="M359.53,6V0H248.83V6H0v817.8H248.83v6h110.7v-6H608.36V6ZM251.82,3H356.54V6H251.82ZM230.88,9h146.6v36.9H230.88ZM137.63,9h90.25V48.87h152.6V9h90.25V97.74H137.63Zm210.62,91.75a56.83,56.83,0,0,1-88.14,0ZM3,9H134.64v91.75H256.31a59.83,59.83,0,0,0,95.74,0H473.72V9H605.37V413.39H384a79.8,79.8,0,0,0-159.58,0H3ZM310.67,413.39a6.66,6.66,0,0,0-13,0h-70.3a76.8,76.8,0,0,1,153.58,0Zm70.3,3a76.8,76.8,0,0,1-153.58,0h70.3a6.66,6.66,0,0,0,13,0ZM356.54,826.78H251.82v-3H356.54Zm20.94-6H230.88V783.9h146.6Zm93.25,0H380.48V780.91H227.88V820.8H137.63V732h333.1ZM260.11,729.05a56.83,56.83,0,0,1,88.14,0ZM605.37,820.8H473.72V729.05H352.05a59.83,59.83,0,0,0-95.74,0H134.64V820.8H3V416.39h221.4a79.8,79.8,0,0,0,159.58,0h221.4Z" />
    </svg>
  );
}
