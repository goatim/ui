import { HTMLAttributeAnchorTarget, ReactElement } from 'react';
import { MatchStatus } from '@goatim/client';
import { UrlObject } from 'url';
import { Button } from '../../general';

export interface MatchActionProps {
  status?: MatchStatus;
  onCompositionClick?: () => unknown;
  compositionHref?: string | UrlObject;
  compositionTarget?: HTMLAttributeAnchorTarget;
  onFeedClick?: () => unknown;
  feedHref?: string | UrlObject;
  feedTarget?: HTMLAttributeAnchorTarget;
}

export function MatchAction({
  status,
  onCompositionClick,
  compositionHref,
  compositionTarget,
  onFeedClick,
  feedHref,
  feedTarget,
}: MatchActionProps): ReactElement {
  switch (status) {
    case 'open':
      return (
        <div className="goatim-ui-match-action">
          <Button
            theme="buy"
            onClick={onCompositionClick}
            href={compositionHref}
            target={compositionTarget}>
            Faire ma composition
          </Button>
          <span>
            Compose ton équipe et gagne des dividendes grâce aux performances réelles de tes joueurs
          </span>
        </div>
      );
    case 'ongoing':
      return (
        <div className="goatim-ui-match-action">
          <Button theme="sell" onClick={onFeedClick} href={feedHref} target={feedTarget}>
            Suivre le match
          </Button>
          <span>Suis les performances réelles des joueurs sélectionnés sur le terrain.</span>
        </div>
      );
    case 'passed':
    case 'closing':
    case 'closed':
      return (
        <div className="goatim-ui-match-action">
          <Button theme="light" onClick={onFeedClick} href={feedHref} target={feedTarget}>
            Voir le résumé
          </Button>
        </div>
      );
    case 'cancelled':
      return (
        <div className="goatim-ui-match-action">
          <span>Le match a été annulé</span>
        </div>
      );
    default:
      return (
        <div className="goatim-ui-match-action">
          <span>En préparation ...</span>
        </div>
      );
  }
}
