import './index.scss';
import Loader from './feedbacks/loader';
import { ModalContext, useModal, Modal } from './feedbacks/modal';
import Overlay from './feedbacks/overlay';
import Placeholder from './feedbacks/placeholder';
import Selection from './feedbacks/selection';
import Button, { ButtonType, ButtonSize, ButtonShape, ButtonTheme } from './general/button';
import Wrapper, { WrapperProps } from './general/wrapper';
import Check from './general/check';
import Icon from './general/icon';
import ImageUpload from './uploads/image';
import CheckBox from './fields/checkbox';
import Counter from './fields/counter';
import CreditCardInput from './fields/creditCardInput';
import Input, { Adapter, Resolver, InputType, InputShape, InputTheme } from './fields/input';
import LeagueIcon, { LeagueIconSize } from './soccer/leagueIcon';
import LeagueThumbnail, {
  LeagueThumbnailSize,
  LeagueThumbnailTheme,
} from './soccer/leagueThumbnail';
import ClubIcon, { ClubIconSize } from './soccer/clubIcon';
import ClubThumbnail, { ClubThumbnailSize, ClubThumbnailTheme } from './soccer/clubThumbnail';
import PlayerThumbnail, {
  PlayerThumbnailSize,
  PlayerThumbnailTheme,
} from './soccer/playerThumbnail';
import AssetThumbnail, { AssetThumbnailSize, AssetThumbnailTheme } from './trading/assetThumbnail';
import BoosterIcon, { BoosterIconSize, BoosterIconInfos } from './trading/boosterIcon';
import OrderThumbnail from './trading/orderThumbnail';

/**
 * Feedback
 */

export { Loader, ModalContext, useModal, Overlay, Placeholder, Selection };

export type { Modal };

/**
 * General
 */

export { Button, Wrapper, Check, Icon };

export type { ButtonType, ButtonSize, ButtonShape, ButtonTheme, WrapperProps };

/**
 * Uploads
 */

export { ImageUpload };

/**
 * Fields
 */

export { CheckBox, Counter, CreditCardInput, Input };

export type { InputType, InputShape, InputTheme, Adapter, Resolver };

/**
 * Soccer
 */

export { LeagueIcon, LeagueThumbnail, ClubIcon, ClubThumbnail, PlayerThumbnail };

export type {
  LeagueIconSize,
  LeagueThumbnailSize,
  LeagueThumbnailTheme,
  ClubIconSize,
  ClubThumbnailSize,
  ClubThumbnailTheme,
  PlayerThumbnailSize,
  PlayerThumbnailTheme,
};

/**
 * Trading
 */

export { AssetThumbnail, BoosterIcon, OrderThumbnail };

export type { AssetThumbnailSize, AssetThumbnailTheme, BoosterIconSize, BoosterIconInfos };
