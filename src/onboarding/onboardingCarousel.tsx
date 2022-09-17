import { ReactElement, useMemo, useState } from 'react';
import Button, { ButtonSize } from '../general/button';
import { getOnboardingCarouselItems, OnboardingCarouselItem } from './onboardingCarouselItems';

export type OnboardingCarouselSize = 'narrow' | 'medium' | 'large';

export interface Props {
  username: string;
  size?: OnboardingCarouselSize;
}

export default function OnboardingCarousel({ size = 'large', username }: Props): ReactElement {
  const [currentIndex, setCurrentIndex] = useState<number>(3);

  const onboardingItems = useMemo<OnboardingCarouselItem[]>(
    () => getOnboardingCarouselItems(username),
    [username],
  );

  const { description, image, title } = onboardingItems[currentIndex];

  const buttonSize = useMemo<ButtonSize>(() => {
    switch (size) {
      case 'narrow':
        return 'small';
      case 'medium':
        return 'medium';
      default:
        return 'large';
    }
  }, [size]);

  const decrementIndex = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const incrementIndex = () => {
    if (currentIndex === onboardingItems.length - 1) {
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className={`friday-ui-onboarding-carousel ${size}`}>
      <div className="topContainer">
        <img src={image} alt={`onboarding ${currentIndex}`} />
      </div>
      <div className="bottomContainer">
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>
      <div className="navigation">
        {currentIndex > 0 ? (
          <Button
            onClick={decrementIndex}
            leftIcon="arrow-left-circle"
            shape="text"
            theme="dark"
            size={buttonSize}>
            Précédent
          </Button>
        ) : (
          <div />
        )}
        {currentIndex < onboardingItems.length - 1 ? (
          <Button
            onClick={incrementIndex}
            rightIcon="arrow-right-circle"
            shape="text"
            theme="dark"
            size={buttonSize}>
            Suivant
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
