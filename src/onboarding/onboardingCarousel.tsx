import { ReactElement, useCallback, useState } from 'react';
import { Button, ModalComponentProps, StepIndicator } from '../general';

export interface OnboardingCarouselSlideData {
  image?: string;
  title?: string;
  description?: string;
}

export interface OnboardingCarouselSlideProps {
  slide: OnboardingCarouselSlideData;
}

export function OnboardingCarouselSlide({ slide }: OnboardingCarouselSlideProps): ReactElement {
  return (
    <div className="friday-ui-onboarding-carousel-slide">
      {slide.image ? (
        <div className="header">
          <img src={slide.image} alt={`onboarding ${slide.title}`} />
        </div>
      ) : null}
      <div className="body">
        <h1 className="title">{slide.title}</h1>
        <p className="description">{slide.description}</p>
      </div>
    </div>
  );
}

export type OnboardingCarouselSize = 'narrow' | 'big';

export interface OnboardingCarouselProps extends ModalComponentProps {
  slides?: OnboardingCarouselSlideData[];
  size?: OnboardingCarouselSize;
}

export function OnboardingCarousel({
  slides,
  size = 'big',
  dismissModal,
}: OnboardingCarouselProps): ReactElement {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const previousSlide = useCallback(() => {
    setTimeout(() => {
      setSlideIndex((i) => (i > 0 ? i - 1 : i));
    }, 5);
  }, []);

  const nextSlide = useCallback(() => {
    if (slides?.length) {
      setTimeout(() => {
        setSlideIndex((i) => (i < slides.length - 1 ? i + 1 : i));
      }, 5);
    }
  }, [slides?.length]);

  const [slideHeight, setSlideHeight] = useState<number | undefined>();

  const calcHeight = useCallback(
    (index: number, ref?: HTMLDivElement | null) => {
      if (ref) {
        const { height } = ref.getBoundingClientRect();
        if (index === slideIndex) {
          setSlideHeight(height);
        }
      }
    },
    [slideIndex],
  );

  return (
    <div className={`friday-ui-onboarding-carousel ${size}`}>
      <div
        className="slides"
        style={{ transform: `translateX(-${slideIndex * 100}%)`, height: slideHeight }}>
        {slides?.map((slide, index) => (
          <div key={slide.title} className="slide" ref={(ref) => calcHeight(index, ref)}>
            <OnboardingCarouselSlide slide={slide} />
          </div>
        ))}
      </div>
      <div className="navigation">
        <div className="previous">
          {slideIndex > 0 ? (
            <Button onClick={previousSlide} leftIcon="chevron-left" shape="text" size="large">
              Précédent
            </Button>
          ) : null}
        </div>
        <div className="steps">
          <StepIndicator nbSteps={slides?.length} step={slideIndex} onClickStep={setSlideIndex} />
        </div>
        <div className="next">
          {slides && slideIndex < slides.length - 1 ? (
            <div className="button">
              <Button onClick={nextSlide} rightIcon="chevron-right" shape="text" size="large">
                Suivant
              </Button>
            </div>
          ) : (
            <div className="button">
              <Button onClick={dismissModal} shape="text" size="large">
                Let’s gooooo !
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
