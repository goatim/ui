import { ReactElement, useState, useEffect, useRef, CSSProperties, useCallback } from 'react';
import * as CSS from 'csstype';
import ResizeObserver from 'resize-observer-polyfill';
import { AspectRatio, calcHeight, calcWidth, Dimension, Orientation } from '@fridaygame/client';

export function useImageDimensions(src: string | null | undefined): Dimension | undefined {
  const [dimensions, setDimensions] = useState<Dimension | undefined>(undefined);

  function onImageLoad(this: HTMLImageElement) {
    setDimensions({
      width: this.width,
      height: this.height,
      ratio: this.width / this.height,
    });
  }

  useEffect(() => {
    if (src) {
      const newImage = new Image();
      newImage.src = src;
      newImage.addEventListener('load', onImageLoad);
    }
  }, [src]);

  return dimensions;
}

export interface Props {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  aspectRatio?: AspectRatio;
  orientation?: Orientation;
  objectFit?: CSS.Property.ObjectFit;
  objectPosition?: CSS.Property.ObjectPosition;
  backgroundColor?: CSS.Property.BackgroundColor;
  placeholder?: boolean;
}

export default function Img({
  src,
  alt,
  width,
  height,
  aspectRatio = 'fit',
  orientation = 'landscape',
  objectFit = 'cover',
  objectPosition = 'center center',
  backgroundColor,
  placeholder,
}: Props): ReactElement | null {
  const imageDimension = useImageDimensions(src);

  const [style, setStyle] = useState<CSSProperties>({
    width,
    height,
    objectFit,
    objectPosition,
    backgroundColor,
  });

  const [DOMRect, setDOMRect] = useState<DOMRect | DOMRectReadOnly | undefined>();

  const resizeObserver = useRef<ResizeObserver | undefined>();

  const observeElement = useCallback((element: HTMLElement) => {
    if (!resizeObserver.current) {
      resizeObserver.current = new ResizeObserver(([entry]: ResizeObserverEntry[]): void => {
        setDOMRect(entry.contentRect);
      });
    }
    resizeObserver.current?.observe(element);
  }, []);

  const ref = useCallback(
    (element: HTMLImageElement | HTMLDivElement | null) => {
      if (element) {
        setDOMRect(element.getBoundingClientRect());
        observeElement(element);
      }
    },
    [observeElement],
  );

  useEffect(() => {
    if (DOMRect) {
      if (width && !height) {
        if (imageDimension && aspectRatio === 'fit') {
          setStyle((s) => ({
            ...s,
            height: DOMRect.width / (imageDimension.ratio || 1),
          }));
        } else if (aspectRatio !== 'fit' && aspectRatio !== 'cover') {
          setStyle((s) => ({
            ...s,
            height: calcHeight(DOMRect.width, aspectRatio, orientation),
          }));
        }
      } else if (height && !width) {
        if (imageDimension && aspectRatio === 'fit') {
          setStyle((s) => ({
            ...s,
            width: DOMRect.height / (imageDimension.ratio || 1),
          }));
        } else if (aspectRatio !== 'fit' && aspectRatio !== 'cover') {
          setStyle((s) => ({
            ...s,
            width: calcWidth(DOMRect.height, aspectRatio, orientation),
          }));
        }
      }
    }
  }, [aspectRatio, DOMRect, height, imageDimension, orientation, width]);

  useEffect(() => {
    return () => {
      resizeObserver.current?.disconnect();
      resizeObserver.current = undefined;
    };
  }, []);

  if (src) {
    return <img ref={ref} src={src} alt={alt} style={style} />;
  }

  if (placeholder) {
    return <div ref={ref} style={style} />;
  }

  return null;
}
