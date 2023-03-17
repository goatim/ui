import { ReactElement, useCallback, useEffect, useRef } from 'react';

export interface ThreeDSecureProps {
  url: string;
  onDone?: () => unknown;
}

export function ThreeDSecure({ url, onDone }: ThreeDSecureProps): ReactElement {
  const iframe = useRef<HTMLIFrameElement>(null);

  const handleMessage = useCallback(
    (event: MessageEvent) => {
      if (event.data === 'done' && onDone) {
        onDone();
      }
    },
    [onDone],
  );

  useEffect(() => {
    const currentIframe = iframe.current;
    if (currentIframe) {
      try {
        currentIframe.contentWindow?.addEventListener('message', handleMessage);
      } catch (error) {
        if (onDone) {
          onDone();
        }
      }
    }
    return () => {
      if (currentIframe) {
        try {
          currentIframe.contentWindow?.removeEventListener('message', handleMessage);
        } catch (error) {
          if (onDone) {
            onDone();
          }
        }
      }
    };
  }, [handleMessage, onDone]);

  return (
    <div className="goatim-ui-three-d-secure">
      <iframe ref={iframe} src={url} title="3DSecure" width="100%" height={500} />
    </div>
  );
}
