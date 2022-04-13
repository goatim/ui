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
import Input, {
  Adapter,
  Resolver,
  InputType,
  InputShape,
  InputTheme,
  Suggestion,
} from './fields/input';
import UserThumbnail, { UserThumbnailSize, UserThumbnailInfos } from './auth/userThumbnail';
import FridayCoins, { FridayCoinsTheme, FridayCoinsSize } from './market/fridayCoins';
import FridayCoinsVariation, { FridayCoinsVariationSize } from './market/fridayCoinsVariation';
import PercentageVariation, {
  PercentageVariationShape,
  PercentageVariationSize,
} from './market/percentageVariation';
import WalletThumbnail, {
  WalletThumbnailInfos,
  WalletThumbnailSize,
} from './market/walletThumbnail';
import LeagueIcon, { LeagueIconSize } from './soccer/leagueIcon';
import LeagueThumbnail, {
  LeagueThumbnailSize,
  LeagueThumbnailTheme,
} from './soccer/leagueThumbnail';
import ClubIcon, { ClubIconSize } from './soccer/clubIcon';
import ClubThumbnail, { ClubThumbnailSize, ClubThumbnailTheme } from './soccer/clubThumbnail';
import ClubsGrid from './soccer/clubsGrid';
import PlayerThumbnail, {
  PlayerThumbnailSize,
  PlayerThumbnailTheme,
} from './soccer/playerThumbnail';
import AssetThumbnail, { AssetThumbnailSize, AssetThumbnailTheme } from './trading/assetThumbnail';
import BoosterIcon, { BoosterIconSize, BoosterIconInfos } from './trading/boosterIcon';
import BoosterInUseThumbnail from './trading/boosterInUseThumbnail';
import BoostersInUseStack from './trading/boostersInUseStack';
import OrderThumbnail from './trading/orderThumbnail';
import PortfolioThumbnail from './trading/portfolioThumbnail';
import QuotationGraph, { DataPoint } from './trading/quotationGraph';
import TransactionThumbnail from './trading/transactionThumbnail';
import AssetsGrid from './trading/assetsGrid';

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

export type { InputType, InputShape, InputTheme, Adapter, Resolver, Suggestion };

/**
 * Auth
 */

export { UserThumbnail };

export type { UserThumbnailInfos, UserThumbnailSize };

/**
 * Market
 */

export { FridayCoins, FridayCoinsVariation, PercentageVariation, WalletThumbnail };

export type {
  FridayCoinsSize,
  FridayCoinsTheme,
  FridayCoinsVariationSize,
  PercentageVariationSize,
  PercentageVariationShape,
  WalletThumbnailSize,
  WalletThumbnailInfos,
};

/**
 * Soccer
 */

export { LeagueIcon, LeagueThumbnail, ClubIcon, ClubThumbnail, ClubsGrid, PlayerThumbnail };

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

export {
  AssetThumbnail,
  BoosterIcon,
  BoosterInUseThumbnail,
  BoostersInUseStack,
  OrderThumbnail,
  PortfolioThumbnail,
  QuotationGraph,
  TransactionThumbnail,
  AssetsGrid,
};

export type {
  AssetThumbnailSize,
  AssetThumbnailTheme,
  BoosterIconSize,
  BoosterIconInfos,
  DataPoint,
};
