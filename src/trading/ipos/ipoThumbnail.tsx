import { ReactElement, useMemo } from 'react';
import { Ipo } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import FridayCoins, { FridayCoinsSize } from '../../market/fridayCoins';
import Countdown from '../../general/countdown';
import AssetThumbnail, { AssetThumbnailSize } from '../assets/assetThumbnail';

export type IpoThumbnailSize = 'narrow' | 'small' | 'big';

export type IpoThumbnailShape = 'box' | 'banner';

export interface Props extends WrapperProps {
  ipo: Ipo;
  size?: IpoThumbnailSize;
  shape?: IpoThumbnailShape;
}

export default function IpoThumbnail({
  ipo,
  size = 'big',
  shape = 'box',
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  const assetThumbnailSize = useMemo<AssetThumbnailSize>(() => {
    switch (size) {
      case 'narrow':
        return 'small';
      case 'small':
        return 'medium';
      default:
        return 'full';
    }
  }, [size]);

  const quotationSize = useMemo<FridayCoinsSize>(() => {
    switch (size) {
      case 'narrow':
      case 'small':
        return 'medium';
      default:
        return 'large';
    }
  }, [size]);

  return (
    <Wrapper
      className={`friday-ui-ipo-thumbnail ${size} ${shape}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      <div className="header">
        <span className="title">Nouvelle entrée en bourse !</span>
      </div>

      {shape === 'box' && ipo.asset && typeof ipo.asset === 'object' ? (
        <div className="body">
          <div className="asset">
            <AssetThumbnail
              asset={ipo.asset}
              shape="text"
              size={assetThumbnailSize}
              showQuotation={false}
            />
          </div>
          <div className="quotation">
            <FridayCoins amount={ipo.asset.quotation} size={quotationSize} />
          </div>
        </div>
      ) : null}

      <div className="countdown">
        <Countdown label="Ouverture" date={ipo.beginning} />
      </div>
    </Wrapper>
  );
}
