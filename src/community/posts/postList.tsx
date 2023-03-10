import { ReactElement } from 'react';
import { Post } from '@goatim/client';
import { PostThumbnail, PostThumbnailSize } from './postThumbnail';

export interface PostListProps {
  posts?: Post[];
  size?: PostThumbnailSize;
}

export function PostList({ posts, size = 'normal' }: PostListProps): ReactElement {
  return (
    <div className="goatim-ui-post-list">
      {posts?.map((post) => (
        <div key={post.id} className="post">
          <PostThumbnail post={post} size={size} />
        </div>
      ))}
    </div>
  );
}
