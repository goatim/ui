import React, { ReactElement, useCallback, useMemo, useState, useEffect } from 'react';
import { Property } from 'csstype';

export interface Props {
  children?: ReactElement | ReactElement[];
  spacing?: number;
  padding?: number;
  clickThreshold?: number;
}

export default function Gutter({
  children,
  spacing = 20,
  padding = 20,
  clickThreshold = 5,
}: Props): ReactElement {
  const elements = useMemo<ReactElement | ReactElement[]>(() => {
    if (Array.isArray(children)) {
      return children.map((child, index) => (
        <div
          key={Math.random().toString(36).substring(2, 7)}
          className="element"
          style={{ marginLeft: index ? spacing : 0 }}>
          {child}
        </div>
      ));
    }
    return <div className="element">{children}</div>;
  }, [children, spacing]);

  const [gutterWidth, setGutterWidth] = useState<number | undefined>();
  const gutterRef = useCallback((gutter?: HTMLDivElement | null) => {
    if (gutter) {
      setGutterWidth(gutter.offsetWidth);
    }
  }, []);

  const [containerWidth, setContainerWidth] = useState<number | undefined>();

  const containerRef = useCallback(
    (container?: HTMLDivElement | null) => {
      if (children && container) {
        console.log('Here !', container.scrollWidth);
        setContainerWidth(container.scrollWidth);
      }
    },
    [children],
  );

  const maxTranslation = useMemo<number>(() => {
    return -(containerWidth || 0) + (gutterWidth || 0) - padding;
  }, [containerWidth, gutterWidth, padding]);

  const [translation, setTranslation] = useState<number>(0);
  const [lastTranslation, setLastTranslation] = useState<number>(0);

  const [pointerStartPosition, setPointerStartPosition] = useState<number | undefined>();

  const [moving, setMoving] = useState<boolean>();

  const pointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    setPointerStartPosition(event.pageX);
  }, []);

  const pointerMove = useCallback(
    (event: PointerEvent) => {
      if (pointerStartPosition !== undefined) {
        event.preventDefault();
        let nextTranslation = lastTranslation + event.pageX - pointerStartPosition;
        const delta = nextTranslation - lastTranslation;
        if (delta < -clickThreshold || delta > clickThreshold) {
          setMoving(true);
        }
        if (nextTranslation > 0) {
          nextTranslation = 0;
        } else if (nextTranslation < maxTranslation) {
          nextTranslation = maxTranslation;
        }
        setTranslation(nextTranslation);
      }
    },
    [clickThreshold, lastTranslation, maxTranslation, pointerStartPosition],
  );

  const pointerUp = useCallback(() => {
    if (pointerStartPosition !== undefined) {
      setPointerStartPosition(undefined);
      setLastTranslation(translation);
      if (moving) {
        setTimeout(() => {
          setMoving(false);
        }, 500);
      }
    }
  }, [moving, pointerStartPosition, translation]);

  useEffect(() => {
    window.addEventListener('pointerup', pointerUp);
    window.addEventListener('pointermove', pointerMove);
    return () => {
      window.removeEventListener('pointerup', pointerUp);
      window.removeEventListener('pointermove', pointerMove);
    };
  }, [pointerMove, pointerUp]);

  const transform = useMemo<Property.Transform>(() => {
    return `translateX(${translation}px)`;
  }, [translation]);

  const sidePadding = useMemo<Property.Padding>(() => {
    return `0 ${padding}px`;
  }, [padding]);

  const width = useMemo<number | undefined>(() => {
    if (containerWidth) {
      return containerWidth + padding;
    }
    return undefined;
  }, [containerWidth, padding]);

  const pointerEvents = useMemo<Property.PointerEvents>(() => {
    if (moving) {
      return 'none';
    }
    return 'all';
  }, [moving]);

  const justifyContent = useMemo<Property.JustifyContent>(() => {
    if (
      containerWidth !== undefined &&
      gutterWidth !== undefined &&
      containerWidth <= gutterWidth
    ) {
      return 'center';
    }
    return 'flex-start';
  }, [containerWidth, gutterWidth]);

  const cursor = useMemo<Property.Cursor>(() => {
    if (moving) {
      return 'grab';
    }
    return 'default';
  }, [moving]);

  return (
    <div className="friday-ui-gutter" ref={gutterRef}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        role="list"
        className="container"
        ref={containerRef}
        style={{
          transform,
          padding: sidePadding,
          width,
          pointerEvents,
          cursor,
          justifyContent,
        }}
        onPointerDown={pointerDown}
        onKeyDown={() => undefined}>
        {elements}
      </div>
    </div>
  );
}
