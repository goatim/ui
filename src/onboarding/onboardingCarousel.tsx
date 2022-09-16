import { ReactElement, useMemo, useState } from 'react';
import { getOnboardingCarouselItems, OnboardingCarouselItem } from './onboardingCarouselItems';

export type OnboardingCarouselSize = 'narrow' | 'medium' | 'big';

export interface Props {
  username: string;
  size?: OnboardingCarouselSize;
}

export default function OnboardingCarousel({ size = 'big', username }: Props): ReactElement {
  const [currentIndex, setCurrentIndex] = useState<number>(3);

  const onboardingItems = useMemo<OnboardingCarouselItem[]>(
    () => getOnboardingCarouselItems(username),
    [username],
  );

  const { description, image, title } = onboardingItems[currentIndex];

  return (
    <div className={`friday-ui-onboarding-carousel ${size}`}>
      <div className="topContainer">
        <img src={image} alt={`onboarding ${currentIndex}`} />
      </div>
      <div className="bottomContainer">
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>
    </div>
  );
}
