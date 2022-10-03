import React, { ReactElement, useCallback, useMemo, useState, useEffect } from 'react';

export interface Props {
  children?: ReactElement | ReactElement[];
  spacing?: number;
}

export default function Gutter({ children, spacing = 20 }: Props): ReactElement {
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

  const [translation, setTranslation] = useState<number>(0);
  const [lastTranslation, setLastTranslation] = useState<number>(0);

  const [pointerStartPosition, setPointerStartPosition] = useState<number | undefined>();

  const pointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    setPointerStartPosition(event.pageX);
  }, []);

  const pointerMove = useCallback(
    (event: PointerEvent) => {
      if (pointerStartPosition !== undefined) {
        setTranslation(lastTranslation + event.pageX - pointerStartPosition);
      }
    },
    [lastTranslation, pointerStartPosition],
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
    <div className="friday-ui-gutter">
      <div
        className="container"
        style={{ transform: `translateX(${translation}px)` }}
        onPointerDown={pointerDown}>
        {elements}
      </div>
    </div>
  );
}
