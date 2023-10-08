import { useMemo } from 'react';
import { UIDefaultSizes } from '@src/utils';
import { Icon } from '@src/general/icon';
import { IconColorType } from '@src/general/colors';
import { Button } from '@src/general/button';

interface ToggleDisplayModeProps {
  currentMode?: DisplayMode;
  size?: UIDefaultSizes;
  onToggle: () => void;
  className?: string;
}

export enum DisplayMode {
  List = 1,
  Grid = 2,
}

export function ToggleDisplayMode({
  currentMode,
  size = UIDefaultSizes.Small,
  onToggle,
  className = '',
}: ToggleDisplayModeProps): React.ReactElement {
  const iconSize = useMemo(() => {
    if (size === UIDefaultSizes.Large) {
      return 32;
    }
    if (size === UIDefaultSizes.Medium) {
      return 24;
    }
    return 18;
  }, [size]);

  const displayedIcon = useMemo(
    () =>
      currentMode === DisplayMode.Grid ? (
        <Icon name="list" size={iconSize} color="white" />
      ) : (
        <Icon name="grid" size={iconSize} color="white" />
      ),
    [currentMode, iconSize],
  );

  return (
    <Button
      className={`goatim-ui-toggle-display-mode ${className}`}
      shape="none"
      onClick={onToggle}>
      {displayedIcon}
    </Button>
  );
}
