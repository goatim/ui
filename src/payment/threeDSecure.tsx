import { ReactElement, useCallback, useEffect, useRef } from 'react';

export interface ThreeDSecureProps {
  url: string;
  returnUrl?: string;
  onReturn?: () => unknown;
}

export function ThreeDSecure({ url, returnUrl, onReturn }: ThreeDSecureProps): ReactElement {
  const iframe = useRef<HTMLIFrameElement>(null);

  const iframeLoad = useCallback(() => {
    if (iframe.current && onReturn && returnUrl) {
      try {
        if (iframe.current.contentWindow?.location.href === returnUrl) {
          onReturn();
        }
      } catch (error) {
        // Silence is golden
      }
    }
  }, [onReturn, returnUrl]);

  useEffect(() => {
    if (iframe.current) {
      iframe.current.addEventListener('load', iframeLoad);
    }
    return iframe.current ? iframe.current.removeEventListener('load', iframeLoad) : undefined;
  }, [iframeLoad]);

  return (
    <div className="goatim-ui-three-d-secure">
      <iframe ref={iframe} src={url} title="3DSecure" width="100%" height={500} />
    </div>
  );
}
