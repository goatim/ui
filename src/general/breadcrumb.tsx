import { ReactElement, useMemo } from 'react';
import { WrapperProps } from '@cezembre/fronts';
import { Button, ButtonTheme } from './button';
import { Icon } from './icon';

export interface Crumb extends WrapperProps {
  key?: string;
  label?: string;
}

export type BreadcrumbTheme = 'dark' | 'light';

export interface BreadcrumbProps {
  crumbs?: Crumb[];
  theme?: BreadcrumbTheme;
}

export function Breadcrumb({ crumbs, theme }: BreadcrumbProps): ReactElement {
  const keyedCrumbs = useMemo<Crumb[] | undefined>(() => {
    return crumbs?.map((crumb) => {
      crumb.key = crumb.key || Math.random().toString(36).substring(5);
      return crumb;
    });
  }, [crumbs]);

  const discreetButtonTheme = useMemo<ButtonTheme>(() => {
    switch (theme) {
      case 'light':
        return 'transparent-light';
      case 'dark':
      default:
        return 'transparent-dark';
    }
  }, [theme]);

  const currentButtonTheme = useMemo<ButtonTheme>(() => {
    switch (theme) {
      case 'light':
        return 'light';
      case 'dark':
      default:
        return 'dark';
    }
  }, [theme]);

  return (
    <nav aria-label="Breadcrumb" className={`goatim-ui-breadcrumb ${theme}`}>
      <ol>
        {keyedCrumbs?.map((crumb, index) => (
          <li key={crumb.key}>
            {index ? <Icon name="chevron-right" /> : null}
            <Button
              shape="text"
              theme={index === (crumbs?.length || 0) - 1 ? currentButtonTheme : discreetButtonTheme}
              href={crumb.href}
              target={crumb.target}
              onClick={crumb.onClick}
              onFocus={crumb.onFocus}
              onBlur={crumb.onBlur}
              rel={crumb.rel}
              disabled={crumb.disabled}
              referrerPolicy={crumb.referrerPolicy}>
              {crumb.label}
            </Button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
