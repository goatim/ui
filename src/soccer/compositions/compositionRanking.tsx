import { MouseEvent, ReactElement } from 'react';
import { Composition, Wallet } from '@goatim/client';
import { UrlObject } from 'url';
import { CompositionThumbnail } from './compositionThumbnail';
import { Icon } from '../../general';
import { GameParticipantListItem } from '../../football/match/gameParticipantListItem';

export type CompositionRankingTheme = 'dark' | 'light';

export interface CompositionRankingProps {
  compositions?: Composition[];
  compositionHref?: string | UrlObject;
  onClickComposition?: (composition: Composition, event: MouseEvent<HTMLButtonElement>) => unknown;
  pinned?: Composition;
  theme?: CompositionRankingTheme;
}

export function CompositionRanking({
  compositions,
  compositionHref,
  onClickComposition,
  pinned,
  theme = 'dark',
}: CompositionRankingProps): ReactElement {
  if (!compositions?.length) {
    return (
      <div className={`goatim-ui-composition-ranking-empty ${theme}`}>
        <Icon name="meh" size={25} />
        <span>Aucun participant</span>
      </div>
    );
  }

  return (
    <div className={`goatim-ui-composition-ranking ${theme}`}>
      <div className="compositions">
        {compositions.map((composition) => (
          <div className="composition" key={composition.id}>
            <GameParticipantListItem
              wallet={composition.wallet as Wallet}
              position={composition.position}
              score={composition.score}
              href={compositionHref}
              theme={theme}
              onClick={
                onClickComposition ? (event) => onClickComposition(composition, event) : undefined
              }
            />
          </div>
        ))}
      </div>
      {pinned ? (
        <div className="pinned">
          <CompositionThumbnail
            composition={pinned}
            theme={theme}
            href={compositionHref}
            onClick={onClickComposition ? (event) => onClickComposition(pinned, event) : undefined}
            showScore
            showGains
          />
        </div>
      ) : null}
    </div>
  );
}
