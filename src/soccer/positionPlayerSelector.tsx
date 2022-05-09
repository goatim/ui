import { ReactElement } from 'react';
import { Player } from '@fridaygame/client';
import Select, { Props as SelectProps } from '../general/select';
import PlayerThumbnail from './playerThumbnail';

export interface Props extends SelectProps<Player | undefined> {
  players?: Player[];
  compositionSetting?: string;
  position?: string;
}

export default function PositionPlayerSelector({
  name,
  value,
  form,
  onChange,
  onFocus,
  onBlur,
  players,
  compositionSetting,
  position,
}: Props): ReactElement {
  return (
    <div className="friday-ui-position-player-selector">
      <div className="header">
        <span className="composition-setting">{compositionSetting || 'Joueur'}</span>
        <span className="position">{position || 'Sélectionner un joueur'}</span>
      </div>

      <div className="players">
        <Select
          name={name}
          form={form}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          canCancel
          fullWidth
          type="flat"
          options={players?.map((player: Player) => ({
            value: player,
            element: <PlayerThumbnail player={player} size="medium" />,
          }))}
        />
      </div>
    </div>
  );
}
