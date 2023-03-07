import { ReactElement, ReactNode, useMemo } from 'react';

export interface OverlayProps {
  children?: ReactNode;
  visible?: boolean;
  closed?: boolean;
}

export function Overlay({ children, visible = false, closed = false }: OverlayProps): ReactElement {
  const className = useMemo<string>(() => {
    let res = 'goatim-ui-overlay';

    if (visible) {
      res += ' visible';
    }

    if (closed) {
      res += ' closed';
    }

    return res;
  }, [closed, visible]);

  return <div className={className}>{children}</div>;
}
