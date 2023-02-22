import { ReactElement, useMemo, useRef } from 'react';
import { useDOMRect } from '@cezembre/fronts';

export interface WallpaperProps {
  children?: string;
  lineHeight?: number;
}

export function Wallpaper({ children, lineHeight = 18 }: WallpaperProps): ReactElement {
  const wallpaper = useRef<HTMLDivElement>(null);

  const wallpaperDomRect = useDOMRect(wallpaper);

  const lines = useMemo<string[]>(() => {
    if (!wallpaperDomRect?.height) {
      return [];
    }
    let nb = Math.ceil(wallpaperDomRect.height / lineHeight);
    nb += nb % 2 ? 0 : 1;
    return new Array(nb).fill('').map(() => Math.random().toString(36).substring(2, 7));
  }, [wallpaperDomRect?.height, lineHeight]);

  const words = useMemo<string[]>(() => {
    if (!wallpaperDomRect?.width || !children?.length) {
      return [];
    }
    let nb = Math.ceil(wallpaperDomRect.width / (children.length * 12));
    nb += nb % 2 ? 0 : 1;
    return new Array(nb).fill('').map(() => Math.random().toString(36).substring(2, 7));
  }, [children?.length, wallpaperDomRect?.width]);

  return (
    <div ref={wallpaper} className="friday-ui-wallpaper">
      <div className="container">
        {lines.map((line, lineIndex) => (
          <div key={line} className="line">
            {words.map((word, wordIndex) => (
              <span
                key={word}
                className={`phrase${
                  lineIndex === Math.floor(lines.length / 2) &&
                  wordIndex === Math.floor(words.length / 2)
                    ? ' active'
                    : ''
                }`}
                style={{ lineHeight: `${lineHeight}px` }}>
                {children}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
