import { ReactElement, useRef, useCallback, useState } from 'react';
import {
  Chart,
  LineController,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import 'chartjs-adapter-luxon';
import { Quotation } from '@fridaygame/client';

export interface Props {
  quotations?: Quotation[];
}

export type DataPoint = { x: number; y: number };

export default function QuotationGraph({ quotations }: Props): ReactElement {
  const chart = useRef<Chart<'line', DataPoint[]> | null>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);

  const initialQuotations = useRef<Quotation[] | undefined>(quotations);

  const [isPositive, setIsPositive] = useState<boolean>(true);

  const createBackground = useCallback(
    (_ctx: CanvasRenderingContext2D, height: number): CanvasGradient => {
      const background = _ctx.createLinearGradient(0, 0, 0, height);

      background.addColorStop(
        0,
        isPositive ? 'rgba(108, 230, 136, .5)' : 'rgba(230, 108, 119, .5)',
      );
      background.addColorStop(1, isPositive ? 'rgba(108, 230, 136, 0)' : 'rgba(230, 108, 119, 0)');

      return background;
    },
    [isPositive],
  );

  const onResize = useCallback(
    (_chart: Chart, size: { width: number; height: number }) => {
      if (!ctx.current) {
        return;
      }

      _chart.data.datasets[0].backgroundColor = createBackground(ctx.current, size.height);
    },
    [createBackground],
  );

  const loadCanvas = useCallback(
    (ref?: HTMLCanvasElement | null) => {
      if (!ref) {
        return;
      }

      ctx.current = ref.getContext('2d');

      if (!ctx.current || !initialQuotations.current) {
        return;
      }

      Chart.register(LineController, LinearScale, TimeScale, PointElement, LineElement, Filler);

      chart.current = new Chart<'line', DataPoint[]>(ctx.current, {
        type: 'line',
        data: {
          datasets: [
            {
              data: initialQuotations.current.map(({ t, v }) => ({
                x: t,
                y: v,
              })),
              backgroundColor: createBackground(ctx.current, 150),
              fill: 'origin',
              borderColor: '#6CE688',
              pointRadius: 0,
              pointHitRadius: 0,
              borderWidth: 1,
              tension: 0,
            },
          ],
        },
        options: {
          onResize,
          scales: {
            x: {
              type: 'time',
              display: false,
            },
            y: {
              type: 'linear',
              min: 0,
              display: false,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          animation: {
            duration: 0,
          },
        },
      });
    },
    [createBackground, onResize],
  );

  // const destroyChart = useCallback(() => {
  //   if (chart.current) {
  //     chart.current.destroy();
  //     chart.current = null;
  //   }
  // }, []);

  // useEffect(() => {
  //   renderChart();
  //
  //   return () => destroyChart();
  // }, [destroyChart, renderChart]);

  return (
    <div className="friday-ui-quotation-graph">
      <canvas ref={loadCanvas} />
    </div>
  );
}
