import { ReactElement, useMemo, useState } from 'react';
import Button, { ButtonSize } from '../general/button';
import { getOnboardingCarouselItems, OnboardingCarouselItem } from './onboardingCarouselItems';

export type OnboardingCarouselSize = 'narrow' | 'medium' | 'large';

export interface Props {
  onDismiss: () => unknown;
  size?: OnboardingCarouselSize;
  username: string;
}

export default function OnboardingCarousel({
  onDismiss,
  size = 'large',
  username,
}: Props): ReactElement {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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

  const onPreviousClick = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const onNextClick = () => {
    if (currentIndex === onboardingItems.length - 1) {
      onDismiss();
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onSkipButtonClick = () => {
    onDismiss();
  };

  const renderHypertextDescription = () => {
    if (description === '') return description;

    const splittedDescription = description.split('**');

    return splittedDescription?.map((child: string, index: number) => (
      <span key={child} className={`${index % 2 === 1 ? 'highlight' : ''}`}>
        {child}
      </span>
    ));
  };

  const renderIndexIndication = () => (
    <div className="indications">
      {onboardingItems.map((onboardingItem, index: number) => (
        <div
          key={`indication${onboardingItem.title}`}
          className={`indication ${
            index === currentIndex ? 'selected-indication' : 'unselected-indication'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className={`friday-ui-onboarding-carousel ${size}`}>
      <div className="top-container">
        <img src={image} alt={`onboarding ${currentIndex}`} />
        <div className="skip-button">
          <Button onClick={onSkipButtonClick} shape="text" theme="dark" size={buttonSize}>
            Passer
          </Button>
        </div>
      </div>
      <div className="bottom-container">
        <span className="title">{title}</span>
        <div className="description-container">{renderHypertextDescription()}</div>
      </div>
      <div className="navigation">
        <div className="button">
          {currentIndex > 0 && (
            <Button
              onClick={onPreviousClick}
              leftIcon="arrow-left"
              shape="text"
              theme="dark"
              size={buttonSize}>
              Précédent
            </Button>
          )}
        </div>
        {renderIndexIndication()}
        <div className="button">
          <Button
            onClick={onNextClick}
            rightIcon="arrow-right"
            shape="text"
            theme="dark"
            size={buttonSize}>
            Suivant
          </Button>
        </div>
      </div>
    </div>
  );
}
