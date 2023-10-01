import Link from 'next/link';
import { ReactElement } from 'react';

export interface NavigationBarProps {
  items: { id: string; name: string; link: string }[];
  pathName: string;
  elementRef?: React.RefObject<HTMLUListElement>;
}

export interface NavigationBarPropsItem {
  id: string;
  label: string;
  link: string;
  isActive?: boolean;
}

export function NavigationBarItem({
  id,
  label,
  link,
  isActive,
}: NavigationBarPropsItem): ReactElement {
  return (
    <li id={id} className="navbar-item" data-active={isActive}>
      <Link href={link} className="navbar-item-label">
        {label}
      </Link>
    </li>
  );
}

export function NavigationBar({ items, pathName, elementRef }: NavigationBarProps): ReactElement {
  // TODO scroll on current tab

  return (
    <nav className="goatim-ui-navbar">
      <ul className="navbar" ref={elementRef}>
        {items.map((x) => (
          <NavigationBarItem
            key={x.name}
            id={x.id}
            label={x.name}
            link={x.link}
            isActive={x.link === pathName}
          />
        ))}
      </ul>
    </nav>
  );
}
