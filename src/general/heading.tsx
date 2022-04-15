import { ReactElement } from 'react';

export type HeadingSize = 'small' | 'medium' | 'big';

export type HeadingTheme = 'default' | 'light' | 'live' | 'live-light';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface Props {
  label?: string;
  emoji?: string;
  title?: string;
  size?: HeadingSize;
  theme?: HeadingTheme;
  level?: HeadingLevel;
  align?: AlignSetting;
}

export default function Heading({
  label,
  emoji,
  title,
  size = 'medium',
  theme = 'default',
  level = 'h2',
  align = 'left',
}: Props): ReactElement {
  return (
    <div className={`friday-ui-heading ${size} ${theme} ${align}`}>
      {label?.length ? <span className="label">{label}</span> : null}
      {emoji?.length ? <span className="emoji">{emoji}</span> : null}
      {title?.length && level === 'h1' ? <h1 className="title">{title}</h1> : null}
      {title?.length && level === 'h2' ? <h2 className="title">{title}</h2> : null}
      {title?.length && level === 'h3' ? <h3 className="title">{title}</h3> : null}
      {title?.length && level === 'h4' ? <h4 className="title">{title}</h4> : null}
      {title?.length && level === 'h5' ? <h5 className="title">{title}</h5> : null}
      {title?.length && level === 'h6' ? <h6 className="title">{title}</h6> : null}
    </div>
  );
}
