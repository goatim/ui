import { ReactElement, useCallback, useEffect, useRef } from 'react';
import {
  Chart,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-luxon';
import { QuotationHistory } from '@goatim/client';
import { Icon } from '../../general';
import { GoatimCoins } from '../../market';

Chart.register(LineController, LinearScale, TimeScale, PointElement, LineElement, Filler);

export type QuotationHistoryGraphTheme = 'light' | 'dark';

export interface QuotationHistoryGraphProps {
  quotationHistory?: QuotationHistory;
  theme?: QuotationHistoryGraphTheme;
}

export type DataPoint = { x: number; y: number };

export function QuotationHistoryGraph({
  quotationHistory,
  theme = 'light',
}: QuotationHistoryGraphProps): ReactElement {
  const chart = useRef<Chart<'line', DataPoint[]> | null>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);

  const createBackground = useCallback(
    (_ctx: CanvasRenderingContext2D, height: number): CanvasGradient => {
      const background = _ctx.createLinearGradient(0, 0, 0, height);

      background.addColorStop(
        0,
        (quotationHistory?.variation || 0) >= 0
          ? 'rgba(78, 183, 120, .5)'
          : 'rgba(211, 103, 103, .5)',
      );
      background.addColorStop(
        1,
        (quotationHistory?.variation || 0) >= 0
          ? 'rgba(78, 183, 120, 0)'
          : 'rgba(211, 103, 103, 0)',
      );

      return background;
    },
    [quotationHistory?.variation],
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

  const loadCanvas = useCallback((ref?: HTMLCanvasElement | null) => {
    if (!ref) {
      return;
    }

    ctx.current = ref.getContext('2d');
  }, []);

  const drawChart = useCallback(() => {
    if (!ctx.current || !quotationHistory) {
      return;
    }

    chart.current = new Chart<'line', DataPoint[]>(ctx.current, {
      type: 'line',
      data: {
        datasets: [
          {
            data: quotationHistory?.data.map(({ t, a }) => ({
              x: t,
              y: a,
            })),
            backgroundColor: createBackground(ctx.current, 150),
            fill: 'origin',
            borderColor: quotationHistory.variation >= 0 ? '#4EB778' : '#D36767',
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
  }, [createBackground, onResize, quotationHistory]);

  const destroyChart = useCallback(() => {
    if (chart.current) {
      chart.current.destroy();
      chart.current = null;
    }
  }, []);

  useEffect(() => {
    drawChart();
    return () => destroyChart();
  }, [destroyChart, drawChart]);

  if ((quotationHistory?.data.length || 0) > 1) {
    return (
      <div className={`goatim-ui-quotation-history-graph ${theme}`}>
        <canvas ref={loadCanvas} />
      </div>
    );
  }

  return (
    <div className={`goatim-ui-quotation-history-graph ${theme}`}>
      {quotationHistory?.data.length === 1 ? (
        <div className="placeholder">
          <Icon name="git-commit" size={20} />
          <GoatimCoins amount={quotationHistory.data[0].a} />
        </div>
      ) : (
        <div className="placeholder">
          <Icon name="activity" size={20} />
          <span>Aucune transaction</span>
        </div>
      )}
    </div>
  );
}
