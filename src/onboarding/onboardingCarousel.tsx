import { ReactElement, useCallback, useState } from 'react';
import { Button } from '../general';

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
    <div className="goatim-ui-onboarding-carousel-slide">
      {slide.image ? (
        <div className="illustration">
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

export interface OnboardingCarouselProps {
  slides?: OnboardingCarouselSlideData[];
  dismissModal?: () => unknown;
  dismissLabel?: string;
}

export function OnboardingCarousel({
  slides,
  dismissModal,
  dismissLabel = "C'est parti !",
}: OnboardingCarouselProps): ReactElement {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const nextSlide = useCallback(() => {
    if (slides?.length && slideIndex < slides.length - 1) {
      setTimeout(() => {
        setSlideIndex((i) => (i < slides.length - 1 ? i + 1 : i));
      }, 5);
    } else if (dismissModal) {
      dismissModal();
    }
  }, [dismissModal, slideIndex, slides?.length]);

  const [slideHeight, setSlideHeight] = useState<number | undefined>();

  const calcHeight = useCallback(
    (index: number, entries: ResizeObserverEntry[]) => {
      if (entries.length && index === slideIndex) {
        setSlideHeight(entries[0].contentRect.height);
      }
    },
    [slideIndex],
  );

  const watchHeight = useCallback(
    (index: number, ref?: HTMLDivElement | null) => {
      if (ref) {
        new ResizeObserver((entries) => calcHeight(index, entries)).observe(ref);
      }
    },
    [calcHeight],
  );

  return (
    <div className="goatim-ui-onboarding-carousel">
      <div
        className="slides"
        style={{ transform: `translateX(-${slideIndex * 100}%)`, height: slideHeight }}>
        {slides?.map((slide, index) => (
          <div key={slide.title} className="slide" ref={(ref) => watchHeight(index, ref)}>
            <OnboardingCarouselSlide slide={slide} />
          </div>
        ))}
      </div>
      <div className="navigation">
        <div className="button">
          <Button onClick={nextSlide} fullWidth theme="light">
            {slides && slideIndex < slides.length - 1 ? 'Suivant' : dismissLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
