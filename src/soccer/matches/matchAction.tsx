import { HTMLAttributeAnchorTarget, ReactElement } from 'react';
import { To } from 'react-router';
import { MatchStatus } from '@fridaygame/client';
import Button from '../../general/button';

export interface Props {
  status?: MatchStatus;
  toComposition?: To;
  onCompositionClick?: () => unknown;
  compositionHref?: string;
  compositionTarget?: HTMLAttributeAnchorTarget;
  toFeed?: To;
  onFeedClick?: () => unknown;
  feedHref?: string;
  feedTarget?: HTMLAttributeAnchorTarget;
}

export default function MatchAction({
  status,
  toComposition,
  onCompositionClick,
  compositionHref,
  compositionTarget,
  toFeed,
  onFeedClick,
  feedHref,
  feedTarget,
}: Props): ReactElement {
  switch (status) {
    case 'planned':
      return (
        <div className="friday-ui-match-action">
          <Button
            theme="buy"
            to={toComposition}
            onClick={onCompositionClick}
            href={compositionHref}
            target={compositionTarget}>
            Compose ton équipe et gagne des dividendes grâce aux performances réelles de tes joueurs
          </Button>
        </div>
      );
    case 'ongoing':
      return (
        <div className="friday-ui-match-action">
          <Button
            theme="sell"
            to={toFeed}
            onClick={onFeedClick}
            href={feedHref}
            target={feedTarget}>
            Suivre le match
          </Button>
          <span>Suis les performances réelles des joueurs sélectionnés sur le terrain.</span>
        </div>
      );
    case 'passed':
      return (
        <div className="friday-ui-match-action">
          <Button
            theme="light"
            to={toFeed}
            onClick={onFeedClick}
            href={feedHref}
            target={feedTarget}>
            Voir le résumé
          </Button>
        </div>
      );
    default:
      return (
        <div className="friday-ui-match-action">
          <span>Le match a été annulé</span>
        </div>
      );
  }
}