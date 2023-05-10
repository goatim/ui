import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import { Asset } from '@goatim/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { QuotationHistory } from '@goatim/client/dist/trading/quotations/model';
import { UrlObject } from 'url';
import { PlayerThumbnail, PlayerThumbnailSize, PlayerThumbnailTheme } from '../../soccer';
import {
  GoatimCoinsAmount,
  GoatimCoinsSize,
  GoatimCoinsTheme,
  PercentageVariation,
  PercentageVariationSize,
} from '../../market';
import { QuotationHistoryGraph } from '../quotations';

export type AssetThumbnailShape = 'box' | 'text';

export type AssetThumbnailSize = 'narrow' | 'small' | 'medium' | 'big' | 'large' | 'full';

export type AssetThumbnailTheme = 'default' | 'darker' | 'lighter';

export interface AssetThumbnailProps extends WrapperProps {
  asset: Asset;
  quotationHistory?: QuotationHistory;
  shape?: AssetThumbnailShape;
  size?: AssetThumbnailSize;
  theme?: AssetThumbnailTheme;
  showQuotation?: boolean;
  secondaryHref?: string | UrlObject;
}

export const AssetThumbnail = forwardRef<
  HTMLAnchorElement | HTMLButtonElement | HTMLDivElement,
  AssetThumbnailProps
>(function AssetThumbnail(
  {
    asset,
    quotationHistory,
    shape = 'box',
    size = 'small',
    theme = 'default',
    showQuotation = true,
    onClick,
    type,
    href,
    target,
    secondaryHref,
  }: AssetThumbnailProps,
  ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
): ReactElement {
  const playerThumbnailSize = useMemo<PlayerThumbnailSize>(() => {
    switch (size) {
      case 'narrow':
      case 'small':
      case 'medium':
        return 'small';
      case 'big':
      case 'large':
        return 'medium';
      case 'full':
        return 'full';
      default:
        return 'small';
    }
  }, [size]);

  const playerThumbnailTheme = useMemo<PlayerThumbnailTheme>(() => {
    if (theme === 'default') {
      return 'dark';
    }
    return 'light';
  }, [theme]);

  const dayVariationSize = useMemo<PercentageVariationSize>(() => {
    switch (size) {
      case 'narrow':
      case 'small':
      case 'medium':
        return 'small';
      case 'big':
      case 'full':
        return 'medium';
      default:
        return 'small';
    }
  }, [size]);

  const quotationSize = useMemo<GoatimCoinsSize>(() => {
    switch (size) {
      case 'narrow':
      case 'small':
      case 'medium':
        return 'small';
      case 'big':
      case 'full':
        return 'medium';
      default:
        return 'small';
    }
  }, [size]);

  const quotationTheme = useMemo<GoatimCoinsTheme>(() => {
    if (theme === 'default') {
      return 'dark';
    }
    return 'light';
  }, [theme]);

  return (
    <Wrapper
      ref={ref}
      className={`goatim-ui-asset-thumbnail ${shape} ${size} ${theme}`}
      onClick={onClick}
      type={type}
      href={href}
      target={target}>
      {showQuotation &&
      size === 'large' &&
      shape === 'box' &&
      (quotationHistory?.data.length || 0) > 1 ? (
        <div className="quotation">
          <QuotationHistoryGraph quotationHistory={quotationHistory} />
        </div>
      ) : null}

      <div className="container">
        {asset.type === 'player' && asset.player && typeof asset.player === 'object' ? (
          <PlayerThumbnail
            player={asset.player}
            size={playerThumbnailSize}
            theme={playerThumbnailTheme}
            clubHref={secondaryHref}
          />
        ) : null}

        {showQuotation ? (
          <div className="metrics">
            <div className="day-variation">
              <PercentageVariation
                variation={asset.day_variation}
                shape="filled"
                size={dayVariationSize}
              />
            </div>
            <div className="quotation">
              <GoatimCoinsAmount
                amount={asset.quotation}
                size={quotationSize}
                theme={quotationTheme}
              />
            </div>
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
});
