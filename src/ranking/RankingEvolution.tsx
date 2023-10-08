import { Icon } from '..';

interface RankingEvolutionProps {
  nbEvo: number;
}

export function RankingEvolution({ nbEvo }: RankingEvolutionProps): React.ReactElement {
  if (nbEvo > 0) {
    return (
      <div className="goatim-ui-ranking-evolution">
        <span>+{nbEvo}</span>
        <Icon name="arrow-up" color="green" />
      </div>
    );
  }
  if (nbEvo < 0) {
    return (
      <div className="goatim-ui-ranking-evolution">
        <span>{nbEvo}</span>
        <Icon name="arrow-down" color="red" />
      </div>
    );
  }
  return (
    <div className="goatim-ui-ranking-evolution">
      <span>={nbEvo}</span>
      <Icon name="arrow-right" color="blue" />
    </div>
  );
}
