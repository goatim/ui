import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { useMemo } from 'react';
import { Button } from '../../general';
import wheelBannerCover from './assets/wheel-banner-cover.png';

export type WheelBannerSize = 'small' | 'medium' | 'big';

export interface WheelBannerProps extends WrapperProps {
  size?: WheelBannerSize;
}

export function WheelBanner({ href, target, onClick, rel, size = 'small' }: WheelBannerProps) {
  const className = useMemo(() => {
    const classNames: string[] = ['goatim-ui-wheel-banner', size];

    return classNames.join(' ');
  }, [size]);

  return (
    <Wrapper className={className} href={href} target={target} onClick={onClick} rel={rel}>
      <img src={wheelBannerCover} alt="Wheel cover" />
      <div className="body">
        <span className="label">Goatim roulette</span>
        <span className="title">Gagne des packs !</span>
        <p>
          Tous les jours tente ta chance en faisant tourner la roulette Goatim et gagne des cadeaux
          pour booster tes performances.
        </p>
        <div className="action">
          <Button shape="text" theme="light">
            C&apos;est parti !
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
