import { ReactElement, ReactNode } from 'react';

export interface TagProps {
  children?: ReactNode;
}

export function Tag({ children }: TagProps): ReactElement {
  return <span className="friday-ui-tag">{children}</span>;
}
