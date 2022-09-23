import { ReactElement, useMemo } from 'react';

export interface Props {
  nbSteps?: number;
  step?: number;
  onClickStep?: (step: number) => void;
}

export default function StepIndicator({ nbSteps, step, onClickStep }: Props): ReactElement {
  const steps = useMemo<string[]>(
    () => Array(nbSteps).fill((Math.random() + 1).toString(36).substring(4)),
    [nbSteps],
  );

  return (
    <div className="friday-ui-step-indicator">
      {nbSteps
        ? steps.map((key, i: number) =>
            onClickStep ? (
              <button
                key={key}
                type="button"
                className={`step${i === step ? ' active' : ''}`}
                onClick={() => (onClickStep ? onClickStep(i) : undefined)}>
                <span />
              </button>
            ) : (
              <div key={key} className={`step${i === step ? ' active' : ''}`} />
            ),
          )
        : null}
    </div>
  );
}
