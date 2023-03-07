import { ReactElement } from 'react';
import { Post } from '@goatim/client';
import { PackThumbnail } from '../../trading';

export type PackPostSize = 'narrow' | 'normal';

export interface PackPostProps {
  post: Post<'pack'>;
  size?: PackPostSize;
}

export function PackPost({ post, size = 'normal' }: PackPostProps): ReactElement {
  return (
    <div className="goatim-ui-pack-post">
      {post.payload?.pack && typeof post.payload.pack === 'object' ? (
        <PackThumbnail pack={post.payload.pack} size={size} />
      ) : null}
    </div>
  );
}
