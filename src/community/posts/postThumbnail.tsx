import { ReactElement, useMemo } from 'react';
import { Post } from '@fridaygame/client';
import PostHeader from './postHeader';
import OrdersPost from './ordersPost';
import TransactionPost from './transactionPost';
import PackPost from './packPost';

export type PostThumbnailSize = 'narrow' | 'normal';

export interface Props {
  post: Post;
  size?: PostThumbnailSize;
}

export default function PostThumbnail({ post, size = 'normal' }: Props): ReactElement {
  const body = useMemo<ReactElement>(() => {
    switch (post.type) {
      case 'orders':
        return <OrdersPost post={post as Post<'orders'>} size={size} />;
      case 'transaction':
        return <TransactionPost post={post as Post<'transaction'>} size={size} />;
      case 'pack':
        return <PackPost post={post as Post<'pack'>} size={size} />;
      default:
        return <p>{post.message}</p>;
    }
  }, [post]);

  return (
    <div className="friday-ui-post-thumbnail">
      <div className="header">
        <PostHeader post={post} />
      </div>
      <div className="body">{body}</div>
    </div>
  );
}
