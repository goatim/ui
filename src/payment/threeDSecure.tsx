import { ReactElement, useCallback, useEffect } from 'react';

export interface ThreeDSecureProps {
  url: string;
  onDone?: () => unknown;
}

export function ThreeDSecure({ url, onDone }: ThreeDSecureProps): ReactElement {
  const handleMessage = useCallback(
    (event: MessageEvent) => {
      if (event.data === '3DSecureCompleted' && onDone) {
        onDone();
      }
    },
    [onDone],
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('message', handleMessage);
    }
    return () => {
      if (typeof window !== undefined) {
        window.removeEventListener('message', handleMessage);
      }
    };
  }, [handleMessage]);

  return (
    <div className="goatim-ui-three-d-secure">
      <iframe src={url} title="3DSecure" width="100%" height="100%" />
    </div>
  );
}
