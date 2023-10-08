import { useCallback } from 'react';
import { IconColorType } from './colors';
import { Icon } from './icon';
import { Button } from './button';

interface SwitchDisplayModeProps {
  currentMode: DisplayMode;
  size?: number;
  onClickMode: (newMode) => void;
}

export enum DisplayMode {
  List = 1,
  Grid = 2,
}

export function SwitchDisplayMode({
  currentMode,
  size = 18,
}: SwitchDisplayModeProps): React.ReactElement {
  const onItemClick = (item) => {
    console.log(item);
  };

  return (
    <div className="goatim-ui-switch-display-mode">
      <Icon
        name="list"
        size={size}
        color={currentMode === DisplayMode.List ? IconColorType.selected : IconColorType.default}
        onClick={onItemClick}
      />

      <Icon
        name="grid"
        size={size}
        color={currentMode === DisplayMode.Grid ? IconColorType.selected : IconColorType.default}
        onClick={onItemClick}
      />
    </div>
  );
}
