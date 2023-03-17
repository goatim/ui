import { ReactElement, useCallback, useEffect, useRef } from 'react';

export interface ThreeDSecureProps {
  url: string;
  returnUrl?: string;
  onDone?: () => unknown;
}

export function ThreeDSecure({ url, returnUrl, onDone }: ThreeDSecureProps): ReactElement {
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
    if (iframe.current) {
      iframe.current.contentWindow?.addEventListener('message', handleMessage);
    }
    return iframe.current
      ? iframe.current.contentWindow?.removeEventListener('message', handleMessage)
      : undefined;
  }, [handleMessage]);

  return (
    <div className="goatim-ui-three-d-secure">
      <iframe ref={iframe} src={url} title="3DSecure" width="100%" height={500} />
    </div>
  );
}
