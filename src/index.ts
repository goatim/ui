import './index.scss';
import Loader from './general/loader';
import { ModalsContext, useModals, Modal, ModalComponentProps, ModalsState } from './general/modal';
import Overlay from './general/overlay';
import Placeholder from './general/placeholder';
import Selection from './general/selection';
import Button, { ButtonSize, ButtonShape, ButtonTheme } from './general/button';
import Check from './general/check';
import Icon from './general/icon';
import Heading, { HeadingSize, HeadingTheme, HeadingLevel } from './general/heading';
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
import Radio, { RadioOption } from './fields/radio';
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
import WalletTeam from './market/walletTeam';
import WalletMetrics from './market/walletMetrics';
import WalletOverview from './market/walletOverview';
import WalletList from './market/walletList';
import ItemEditor, { ItemEditorFields } from './market/itemEditor';
import OrderItemEditor, { OrderItemEditorFields } from './market/orderItemEditor';
import OrderItemThumbnail from './market/orderItemThumbnail';
import ItemThumbnail from './market/itemThumbnail';
import ItemList from './market/itemList';
import CartResume from './market/cartResume';
import CartOverview from './market/cartOverview';
import CheckoutBill from './market/checkoutBill';
import LeagueIcon, { LeagueIconSize } from './soccer/leagueIcon';
import LeagueThumbnail, {
  LeagueThumbnailSize,
  LeagueThumbnailTheme,
} from './soccer/leagueThumbnail';
import ClubIcon, { ClubIconSize } from './soccer/clubIcon';
import ClubThumbnail, { ClubThumbnailSize, ClubThumbnailTheme } from './soccer/clubThumbnail';
import ClubList from './soccer/clubList';
import PlayerThumbnail, {
  PlayerThumbnailSize,
  PlayerThumbnailTheme,
} from './soccer/playerThumbnail';
import PlayerList from './soccer/playerList';
import SoccerField, { SoccerFieldTheme } from './soccer/soccerField';
import SoccerFieldPosition, {
  SoccerFieldPositionSize,
  SoccerFieldPositionTheme,
} from './soccer/soccerFieldPosition';
import CompositionField, { CompositionFieldTheme } from './soccer/compositionField';
import Date from './general/date';
import MatchCreatorThumbnail from './soccer/matchCreatorThumbnail';
import MatchStatusThumbnail from './soccer/matchStatusThumbnail';
import MatchThumbnail from './soccer/matchThumbnail';
import AssetThumbnail, { AssetThumbnailSize, AssetThumbnailTheme } from './trading/assetThumbnail';
import AssetOverview from './trading/assetOverview';
import BoosterIcon, { BoosterIconSize, BoosterIconInfos } from './trading/boosterIcon';
import BoosterInUseThumbnail from './trading/boosterInUseThumbnail';
import BoosterInUseStack from './trading/boosterInUseStack';
import OrderThumbnail from './trading/orderThumbnail';
import OrderList from './trading/orderList';
import PortfolioThumbnail from './trading/portfolioThumbnail';
import PortfolioList from './trading/portfolioList';
import QuotationGraph, { DataPoint } from './trading/quotationGraph';
import TransactionThumbnail from './trading/transactionThumbnail';
import AssetList from './trading/assetList';
import RankPosition from './trading/rankPosition';
import CreditCardThumbnail from './payment/creditCardThumbnail';
import PaymentMethodThumbnail from './payment/paymentMethodThumbnail';
import CreditCardForm, { NewCreditCard } from './payment/creditCardForm';
import PaymentMethodList from './payment/paymentMethodList';
import PaymentMethodSelector from './payment/paymentMethodSelector';

/**
 * General
 */

export {
  Button,
  Check,
  Icon,
  Heading,
  Loader,
  ModalsContext,
  useModals,
  Overlay,
  Placeholder,
  Selection,
};

export type {
  ButtonSize,
  ButtonShape,
  ButtonTheme,
  HeadingSize,
  HeadingTheme,
  HeadingLevel,
  Modal,
  ModalComponentProps,
  ModalsState,
};

/**
 * Uploads
 */

export { ImageUpload };

/**
 * Fields
 */

export { CheckBox, Counter, CreditCardInput, Input, Radio };

export type { InputType, InputShape, InputTheme, Adapter, Resolver, Suggestion, RadioOption };

/**
 * Auth
 */

export { UserThumbnail };

export type { UserThumbnailInfos, UserThumbnailSize };

/**
 * Market
 */

export {
  FridayCoins,
  FridayCoinsVariation,
  PercentageVariation,
  WalletThumbnail,
  ItemEditor,
  OrderItemEditor,
  OrderItemThumbnail,
  ItemThumbnail,
  ItemList,
  CartResume,
  CartOverview,
  CheckoutBill,
  WalletTeam,
  WalletMetrics,
  WalletOverview,
  WalletList,
};

export type {
  FridayCoinsSize,
  FridayCoinsTheme,
  FridayCoinsVariationSize,
  PercentageVariationSize,
  PercentageVariationShape,
  WalletThumbnailSize,
  WalletThumbnailInfos,
  ItemEditorFields,
  OrderItemEditorFields,
};

/**
 * Soccer
 */

export {
  LeagueIcon,
  LeagueThumbnail,
  ClubIcon,
  ClubThumbnail,
  ClubList,
  PlayerThumbnail,
  PlayerList,
  SoccerField,
  SoccerFieldPosition,
  CompositionField,
  MatchThumbnail,
  MatchCreatorThumbnail,
  MatchStatusThumbnail,
  Date,
};

export type {
  LeagueIconSize,
  LeagueThumbnailSize,
  LeagueThumbnailTheme,
  ClubIconSize,
  ClubThumbnailSize,
  ClubThumbnailTheme,
  PlayerThumbnailSize,
  PlayerThumbnailTheme,
  SoccerFieldTheme,
  SoccerFieldPositionSize,
  SoccerFieldPositionTheme,
  CompositionFieldTheme,
};

/**
 * Trading
 */

export {
  AssetThumbnail,
  AssetOverview,
  BoosterIcon,
  BoosterInUseThumbnail,
  BoosterInUseStack,
  OrderThumbnail,
  OrderList,
  PortfolioThumbnail,
  PortfolioList,
  QuotationGraph,
  TransactionThumbnail,
  AssetList,
  RankPosition,
};

export type {
  AssetThumbnailSize,
  AssetThumbnailTheme,
  BoosterIconSize,
  BoosterIconInfos,
  DataPoint,
};

/**
 * Payment
 */

export {
  CreditCardThumbnail,
  PaymentMethodThumbnail,
  CreditCardForm,
  PaymentMethodList,
  PaymentMethodSelector,
};

export type { NewCreditCard };
