import React, { ReactElement, useCallback, useMemo, useState, useEffect } from 'react';

export interface Props {
  children?: ReactElement | ReactElement[];
  spacing?: number;
  padding?: number;
}

export default function Gutter({ children, spacing = 20, padding = 20 }: Props): ReactElement {
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
  const containerRef = useCallback((container?: HTMLDivElement | null) => {
    if (container) {
      setContainerWidth(container.scrollWidth);
    }
  }, []);

  const maxTranslation = useMemo<number>(() => {
    return -(containerWidth || 0) + (gutterWidth || 0) - padding;
  }, [containerWidth, gutterWidth, padding]);

  const [translation, setTranslation] = useState<number>(0);
  const [lastTranslation, setLastTranslation] = useState<number>(0);

  const [pointerStartPosition, setPointerStartPosition] = useState<number | undefined>();

  const pointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    setPointerStartPosition(event.pageX);
  }, []);

  const pointerMove = useCallback(
    (event: PointerEvent) => {
      if (pointerStartPosition !== undefined) {
        let nextTranslation = lastTranslation + event.pageX - pointerStartPosition;
        if (nextTranslation > 0) {
          nextTranslation = 0;
        } else if (nextTranslation < maxTranslation) {
          nextTranslation = maxTranslation;
        }
        setTranslation(nextTranslation);
      }
    },
    [lastTranslation, maxTranslation, pointerStartPosition],
  );

  const pointerUp = useCallback(() => {
    setPointerStartPosition(undefined);
    setLastTranslation(translation);
  }, [translation]);

  useEffect(() => {
    window.addEventListener('pointerup', pointerUp);
    window.addEventListener('pointermove', pointerMove);
    return () => {
      window.removeEventListener('pointerup', pointerUp);
      window.removeEventListener('pointermove', pointerMove);
    };
  }, [pointerMove, pointerUp]);

  return (
    <div className="friday-ui-gutter" ref={gutterRef}>
      <div
        className="container"
        ref={containerRef}
        style={{
          transform: `translateX(${translation}px)`,
          padding: `0 ${padding}px`,
          width: containerWidth ? containerWidth + padding : undefined,
        }}
        onPointerDown={pointerDown}>
        {elements}
      </div>
    </div>
  );
}
