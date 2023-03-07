import { ReactElement, useMemo } from 'react';
import { Post } from '@goatim/client';
import { PostHeader } from './postHeader';
import { OrdersPost } from './ordersPost';
import { TransactionPost } from './transactionPost';
import { PackPost } from './packPost';
import { MatchSummaryPost } from './matchSummaryPost';

export type PostThumbnailSize = 'narrow' | 'normal';

export interface PostThumbnailProps {
  post: Post;
  size?: PostThumbnailSize;
}

export function PostThumbnail({ post, size = 'normal' }: PostThumbnailProps): ReactElement {
  const body = useMemo<ReactElement>(() => {
    switch (post.type) {
      case 'orders':
        return <OrdersPost post={post as Post<'orders'>} size={size} />;
      case 'transaction':
        return <TransactionPost post={post as Post<'transaction'>} size={size} />;
      case 'pack':
        return <PackPost post={post as Post<'pack'>} size={size} />;
      case 'match_summary':
        return <MatchSummaryPost post={post as Post<'match_summary'>} />;
      default:
        return <p>{post.message}</p>;
    }
  }, [post, size]);

  return (
    <div className="goatim-ui-post-thumbnail">
      <div className="header">
        <PostHeader post={post} />
      </div>
      <div className="body">{body}</div>
    </div>
  );
}
