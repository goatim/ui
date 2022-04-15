import { ReactElement, useEffect, useState } from 'react';
import { BoosterInUse } from '@fridaygame/client';
import BoosterInUseThumbnail from './boosterInUseThumbnail';

export interface Props {
  boostersInUse: BoosterInUse[];
  onStopBooster?: (boosterInUse?: BoosterInUse) => void | Promise<void>;
}

export default function BoosterInUseStack({ boostersInUse, onStopBooster }: Props): ReactElement {
  const [activeBoosters, setActiveBoosters] = useState<BoosterInUse[]>(
    boostersInUse.filter(({ stopped_at }) => !stopped_at),
  );
  const [inactiveBoosters, setInactiveBoosters] = useState<BoosterInUse[]>(
    boostersInUse.filter(({ stopped_at }) => stopped_at),
  );

  useEffect(() => {
    setActiveBoosters(boostersInUse.filter(({ stopped_at }) => !stopped_at));
    setInactiveBoosters(boostersInUse.filter(({ stopped_at }) => stopped_at));
  }, [boostersInUse]);

  // TODO : Collapse boosters if > 1

  return (
    <div className="friday-ui-booster-in-use-stack">
      {inactiveBoosters.map((boosterInUse) => (
        <div className="booster" key={boosterInUse.id}>
          <BoosterInUseThumbnail boosterInUse={boosterInUse} />
        </div>
      ))}
      {activeBoosters.map((boosterInUse) => (
        <div className="booster" key={boosterInUse.id}>
          <BoosterInUseThumbnail
            boosterInUse={boosterInUse}
            onStop={onStopBooster ? () => onStopBooster(boosterInUse) : undefined}
          />
        </div>
      ))}
    </div>
  );
}
