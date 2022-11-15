import { ReactElement, ReactNode } from 'react';

export interface Props {
  children?: ReactNode;
}

export default function Tag({ children }: Props): ReactElement {
  return <span className="friday-ui-tag">{children}</span>;
}
