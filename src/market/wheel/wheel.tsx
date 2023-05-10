import { useCallback, useMemo, useState } from 'react';
import { WheelDraw } from '@goatim/client';
import { Button } from '../../general';
import wheelCover from './assets/wheel-cover.png';
import wheel from './assets/wheel.png';
import gift from '../../general/assets/gift.png';
import chance from '../../general/assets/chance.png';
import sad from '../../general/assets/sad.png';

export type WheelPropsSize = 'small' | 'medium' | 'big';

export interface WheelProps {
  size?: WheelPropsSize;
  hasTicket?: boolean;
  onWheelSpin: () => Promise<WheelDraw>;
  onWheelEnd?: () => void;
}

export function Wheel({ size = 'big', hasTicket, onWheelSpin, onWheelEnd }: WheelProps) {
  const [wheelDraw, setWheelDraw] = useState<WheelDraw | undefined>();
  const [spinning, setSpinning] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const spinWheel = useCallback(async () => {
    setSpinning(true);
    setWheelDraw(await onWheelSpin());
    setTimeout(() => {
      setSpinning(false);
      setShowResult(true);

      setTimeout(() => {
        setShowResult(false);
        if (onWheelEnd) {
          onWheelEnd();
        }
      }, 4000);
    }, 5000);
  }, [onWheelEnd, onWheelSpin]);

  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-wheel', size];

    if (!hasTicket) {
      classNames.push('no-ticket');
    }

    if (spinning) {
      classNames.push('spinning');
    }

    if (showResult) {
      classNames.push('show-result');
    }

    if (wheelDraw?.type) {
      classNames.push(wheelDraw.type);
    }

    return classNames.join(' ');
  }, [size, hasTicket, spinning, showResult, wheelDraw?.type]);

  const icon = useMemo<string | undefined>(() => {
    switch (wheelDraw?.type) {
      case 'pack':
        return gift;
      case 'ticket':
        return chance;
      default:
        return sad;
    }
  }, [wheelDraw?.type]);

  const title = useMemo<string>(() => {
    if (showResult && wheelDraw?.type) {
      switch (wheelDraw.type) {
        case 'pack':
        case 'ticket':
          return 'Bravo !';
        default:
          return 'Dommage !';
      }
    }
    return hasTicket ? 'Tente ta chance !' : 'Retente ta chance demain !';
  }, [hasTicket, showResult, wheelDraw?.type]);

  const description = useMemo<string>(() => {
    if (showResult && wheelDraw?.type) {
      switch (wheelDraw.type) {
        case 'pack':
          return 'Tu as gagné un pack !';
        case 'ticket':
          return 'Tu as gagné un lancé supplémentaire !';
        default:
          return "Tu n'as rien gagné cette fois";
      }
    }
    return hasTicket
      ? 'Lance la roue pour tenter de gagner des packs.'
      : 'Un lancé offert tous les jours. Et un lancé supplémentaire à la fin de chaque match si tu as fait ta composition.';
  }, [hasTicket, showResult, wheelDraw?.type]);

  if (showResult) {
    return (
      <div className={className}>
        <img className="icon" src={icon} alt="Result icon" />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }

  if (spinning) {
    return (
      <div className={className}>
        <img className="wheel" src={wheel} alt="Wheel" />
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="header">
        <h1>{title}</h1>
        <p>{description}</p>
        {hasTicket ? (
          <div className="action">
            <Button theme="gold" onClick={spinWheel}>
              Lancer la roue
            </Button>
          </div>
        ) : null}
      </div>
      <img className="wheel-cover" src={wheelCover} alt="Wheel cover" />
    </div>
  );
}
