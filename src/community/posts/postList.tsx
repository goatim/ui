import { ReactElement } from 'react';
import { Post } from '@fridaygame/client';
import PostThumbnail, { PostThumbnailSize } from './postThumbnail';

export interface Props {
  posts?: Post[];
  size?: PostThumbnailSize;
}

export default function PostList({ posts, size = 'normal' }: Props): ReactElement {
  return (
    <div className="friday-ui-post-list">
      {posts?.map((post) => (
        <div key={post.id} className="post">
          <PostThumbnail post={post} size={size} />
        </div>
      ))}
    </div>
  );
}
