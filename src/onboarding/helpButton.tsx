import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { Icon } from '../general';

export type HelpButtonTheme = 'dark' | 'light' | 'dark-discreet';

export interface HelpButtonProps extends WrapperProps {
  theme?: HelpButtonTheme;
}

export function HelpButton({ href, onClick, theme = 'dark' }: HelpButtonProps) {
  return (
    <Wrapper href={href} onClick={onClick} className={`goatim-ui-help-button ${theme}`}>
      <Icon name="help-circle" />
    </Wrapper>
  );
}
