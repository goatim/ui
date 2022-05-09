import { ReactElement, ReactNode, useMemo } from 'react';

export interface Props {
  children?: ReactNode;
  visible?: boolean;
  closed?: boolean;
}

export default function Overlay({
  children,
  visible = false,
  closed = false,
}: Props): ReactElement {
  const className = useMemo<string>(() => {
    let res = 'friday-ui-overlay';

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
