import { ReactElement } from 'react';
import { Post } from '@goatim/client';
import { TransactionThumbnail } from '../../trading';

export type TransactionPostSize = 'narrow' | 'normal';

export interface TransactionPostProps {
  post: Post<'transaction'>;
  size?: TransactionPostSize;
}

export function TransactionPost({ post, size = 'normal' }: TransactionPostProps): ReactElement {
  return (
    <div className="goatim-ui-transaction-post">
      {post.payload?.transaction && typeof post.payload.transaction === 'object' ? (
        <div className="transaction">
          <TransactionThumbnail transaction={post.payload.transaction} size={size} />
        </div>
      ) : null}
    </div>
  );
}
