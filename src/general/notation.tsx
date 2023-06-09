import { useMemo } from 'react';
import { Icon } from './icon';

export interface NotationProps {
  children?: number;
  notation?: number;
}

export function Notation({ children, notation }: NotationProps) {
  const nbStars = useMemo<number>(() => {
    const n: number = children || notation || 0;

    return [0.25, 0.5, 0.75, 1].findIndex((x) => n <= x) + 1;
  }, [children, notation]);

  return (
    <div className="goatim-ui-notation">
      <div className={`star${nbStars >= 1 ? ' active' : ''}`}>
        <Icon name="star" />
      </div>
      <div className={`star${nbStars >= 2 ? ' active' : ''}`}>
        <Icon name="star" />
      </div>
      <div className={`star${nbStars >= 3 ? ' active' : ''}`}>
        <Icon name="star" />
      </div>
      <div className={`star${nbStars >= 4 ? ' active' : ''}`}>
        <Icon name="star" />
      </div>
    </div>
  );
}
