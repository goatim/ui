import { ReactElement } from 'react';

export type HeadingSize = 'small' | 'medium' | 'big';

export type HeadingTheme = 'dark' | 'light' | 'live' | 'live-light';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface Props {
  label?: string;
  emoji?: string;
  children?: string;
  size?: HeadingSize;
  theme?: HeadingTheme;
  level?: HeadingLevel;
  align?: AlignSetting;
}

export default function Heading({
  label,
  emoji,
  children,
  size = 'medium',
  theme = 'dark',
  level = 'h2',
  align = 'left',
}: Props): ReactElement {
  return (
    <div className={`friday-ui-heading ${size} ${theme} ${align}`}>
      {label?.length ? <span className="label">{label}</span> : null}
      {emoji?.length ? <span className="emoji">{emoji}</span> : null}
      {children?.length && level === 'h1' ? <h1 className="title">{children}</h1> : null}
      {children?.length && level === 'h2' ? <h2 className="title">{children}</h2> : null}
      {children?.length && level === 'h3' ? <h3 className="title">{children}</h3> : null}
      {children?.length && level === 'h4' ? <h4 className="title">{children}</h4> : null}
      {children?.length && level === 'h5' ? <h5 className="title">{children}</h5> : null}
      {children?.length && level === 'h6' ? <h6 className="title">{children}</h6> : null}
    </div>
  );
}
