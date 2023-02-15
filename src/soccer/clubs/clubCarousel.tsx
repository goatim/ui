import { ReactElement } from 'react';
import { Club } from '@fridaygame/client';
import ClubList from './clubList';

export interface Props {
  pages?: Club[];
}

export default function ClubCarousel(): ReactElement {
  return (
    <div className="friday-ui-club-carousel">
      <ClubList />
    </div>
  );
}
