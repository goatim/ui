import { ReactElement, useMemo } from 'react';
import { Post } from '@fridaygame/client';
import { DateTime } from 'luxon';
import rocket from '../../general/assets/rocket.png';
import shakeHands from '../../general/assets/shake-hands.png';
import gift from '../../general/assets/gift.png';

export interface PostHeaderProps {
  post: Post;
}
export function PostHeader({ post }: PostHeaderProps): ReactElement {
  const resolvedIcon = useMemo<ReactElement>(() => {
    switch (post.type) {
      case 'orders':
        return <img alt="rocket" src={rocket} />;
      case 'transaction':
        return <img alt="shake hands" src={shakeHands} />;
      case 'pack':
        return <img alt="gift" src={gift} />;
      default:
        return <div className="placeholder" />;
    }
  }, [post.type]);

  const resolvedTitle = useMemo<string>(() => {
    if (post.title) {
      return post.title;
    }
    switch (post.type) {
      case 'orders':
        return 'Tes ordres sont enregistrés !';
      case 'transaction':
        return 'Ton ordre a matché !';
      case 'pack':
        return 'Tu as reçu un pack !';
      default:
        return 'Post';
    }
  }, [post.title, post.type]);

  const resolvedPublicationDate = useMemo<string | undefined>(() => {
    if (post.publication_date) {
      return DateTime.fromISO(post.publication_date).toLocaleString(DateTime.DATETIME_MED);
    }
    return undefined;
  }, [post.publication_date]);

  return (
    <div className="friday-ui-post-header">
      <div className="icon">{resolvedIcon}</div>
      <div className="content">
        <span className="title">{resolvedTitle}</span>
        {resolvedPublicationDate ? (
          <span className="publication-date">{resolvedPublicationDate}</span>
        ) : null}
      </div>
    </div>
  );
}
