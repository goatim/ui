import { Icon } from './icon';

interface ParticipantsThumbnailsProps {
  nbParticipants: number;
}

// TODO format numbers

export function ParticipantsThumbnail({
  nbParticipants,
}: ParticipantsThumbnailsProps): React.ReactElement {
  return (
    <div className="goatim-ui-participants-thumbnail">
      <Icon name="user" size={20} />
      <span>12k part.</span>
    </div>
  );
}
