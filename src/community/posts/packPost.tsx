import { ReactElement } from 'react';
import { Post } from '@fridaygame/client';
import PackThumbnail from '../../trading/packs/packThumbnail';

export type PackPostSize = 'narrow' | 'normal';

export interface Props {
  post: Post<'pack'>;
  size?: PackPostSize;
}

export default function PackPost({ post, size = 'normal' }: Props): ReactElement {
  return (
    <div className="friday-ui-pack-post">
      {post.payload?.pack && typeof post.payload.pack === 'object' ? (
        <PackThumbnail pack={post.payload.pack} size={size} />
      ) : null}
    </div>
  );
}
