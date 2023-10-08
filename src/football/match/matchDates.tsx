import { DateTime } from 'luxon';
import { UIDefaultSizes, UISizeLabels } from '../../utils';
import { formatDateTime } from '../../general';

interface MatchDatesProps {
  startDate: string;
  endDate: string;
  size: UIDefaultSizes;
}

export function MatchDates({ startDate, endDate, size }: MatchDatesProps): React.ReactElement {
  const isSmallView = size < UIDefaultSizes.Medium;
  const sizeLabel = UISizeLabels[size];

  return (
    <div className={`goatim-ui-match-dates size-${sizeLabel}`}>
      <div className="match-date">
        {!isSmallView && <span className="label">DÉBUT</span>}
        <span className="date">{formatDateTime(startDate)}</span>
      </div>
      {isSmallView && <div className="hyphen">➡️</div>}
      <div className="match-date">
        {!isSmallView && <span className="label">FIN</span>}
        <span className="date">{formatDateTime(endDate)}</span>
      </div>
    </div>
  );
}
