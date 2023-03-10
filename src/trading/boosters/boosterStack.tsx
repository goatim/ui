import { ReactElement, useEffect, useState } from 'react';
import { Booster } from '@goatim/client';
import { BoosterThumbnail } from './boosterThumbnail';

export interface BoosterStackProps {
  boosters: Booster[];
  onStopBooster?: (booster?: Booster) => unknown;
}

export function BoosterStack({ boosters, onStopBooster }: BoosterStackProps): ReactElement {
  const [activeBoosters, setActiveBoosters] = useState<Booster[]>(
    boosters.filter(({ stopped_at }) => !stopped_at),
  );
  const [inactiveBoosters, setInactiveBoosters] = useState<Booster[]>(
    boosters.filter(({ stopped_at }) => stopped_at),
  );

  useEffect(() => {
    setActiveBoosters(boosters.filter(({ stopped_at }) => !stopped_at));
    setInactiveBoosters(boosters.filter(({ stopped_at }) => stopped_at));
  }, [boosters]);

  // TODO : Collapse boosters if > 1

  return (
    <div className="goatim-ui-booster-stack">
      {inactiveBoosters.map((booster) => (
        <div className="booster" key={booster.id}>
          <BoosterThumbnail booster={booster} />
        </div>
      ))}
      {activeBoosters.map((booster) => (
        <div className="booster" key={booster.id}>
          <BoosterThumbnail
            booster={booster}
            onStop={onStopBooster ? () => onStopBooster(booster) : undefined}
          />
        </div>
      ))}
    </div>
  );
}
