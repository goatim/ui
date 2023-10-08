import { TournamentParticipantList } from '@goatim/client';
import { useWindowInfiniteScroll } from '@cezembre/fronts';
import { TournamentParticipantThumbnail } from '../soccer/tournamentParticipants/tournamentParticipantThumbnail';
import { UIDefaultSizes } from '..';

interface RankingTableProps {
  size?: UIDefaultSizes;
  usersPages: TournamentParticipantList[];
  onLoadNextItems?: () => void;
}

export function RankingTable({
  size = UIDefaultSizes.Large,
  usersPages,
  onLoadNextItems,
}: RankingTableProps): React.ReactElement {
  const { ref: tableContainer } = useWindowInfiniteScroll<HTMLDivElement>({
    loadNextPage: onLoadNextItems,
  });

  return (
    <div className={`goatim-ui-ranking-table ${size}`}>
      <div className="table-container" ref={tableContainer}>
        {usersPages.map((userPage) => (
          <div className="tournament-participants-page" key={userPage.page}>
            {userPage.tournament_participants.map((user) => (
              <div className="tournament-participant" key={user.id}>
                <TournamentParticipantThumbnail tournamentParticipant={user} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
