import { ReactElement } from 'react';
import { Post } from '@fridaygame/client';
import TransactionThumbnail from '../../trading/transactions/transactionThumbnail';

export type TransactionPostSize = 'narrow' | 'normal';

export interface Props {
  post: Post<'transaction'>;
  size?: TransactionPostSize;
}
export default function TransactionPost({ post, size = 'normal' }: Props): ReactElement {
  return (
    <div className="friday-ui-transaction-post">
      {post.payload?.transaction && typeof post.payload.transaction === 'object' ? (
        <div className="transaction">
          <TransactionThumbnail transaction={post.payload.transaction} size={size} />
        </div>
      ) : null}
    </div>
  );
}
