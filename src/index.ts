import './index.scss';
import Loader from './general/loader';
import Overlay from './general/overlay';
import Placeholder from './general/placeholder';
import Selection from './general/selection';
import Button, { ButtonSize, ButtonShape, ButtonTheme } from './general/button';
import Check from './general/check';
import Icon from './general/icon';
import Img, { useImageDimensions } from './general/image';
import Heading, { HeadingSize, HeadingTheme, HeadingLevel } from './general/heading';
import ImageUpload from './uploads/image';
import CheckBox from './general/checkbox';
import Counter from './general/counter';
import Datetime from './general/datetime';
import Table, {
  TableCellType,
  TableColumn,
  TableSelection,
  TableItemAction,
} from './general/table';
import CreditCardInput from './payment/creditCardInput';
import Input, {
  Adapter,
  Resolver,
  InputType,
  InputShape,
  InputTheme,
  Suggestion,
} from './general/input';
import Textarea from './general/textarea';
import Select, { SelectOption, SelectType, SelectOptionProps } from './general/select';
import Radio, { RadioOption, RadioOptionProps } from './general/radio';
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
} from './market/wallets/walletThumbnail';
import WalletTeam from './market/wallets/walletTeam';
import WalletMetrics from './market/wallets/walletMetrics';
import WalletOverview from './market/wallets/walletOverview';
import WalletList from './market/wallets/walletList';
import WalletRanking, { WalletRankingTheme } from './market/wallets/walletRanking';
import ItemEditor, { ItemEditorFields } from './market/checkouts/itemEditor';
import OrderItemEditor, { OrderItemEditorFields } from './market/checkouts/orderItemEditor';
import OrderItemThumbnail from './market/checkouts/orderItemThumbnail';
import ItemThumbnail from './market/checkouts/itemThumbnail';
import ItemList from './market/checkouts/itemList';
import CartResume from './market/cartResume';
import CartOverview from './market/cartOverview';
import CheckoutBill from './market/checkouts/checkoutBill';
import LeagueIcon, { LeagueIconSize } from './soccer/leagues/leagueIcon';
import LeagueThumbnail, {
  LeagueThumbnailSize,
  LeagueThumbnailTheme,
} from './soccer/leagues/leagueThumbnail';
import ClubIcon, { ClubIconSize } from './soccer/clubs/clubIcon';
import ClubThumbnail, { ClubThumbnailSize, ClubThumbnailTheme } from './soccer/clubs/clubThumbnail';
import ClubList from './soccer/clubs/clubList';
import PlayerThumbnail, {
  PlayerThumbnailSize,
  PlayerThumbnailTheme,
} from './soccer/players/playerThumbnail';
import PlayerList from './soccer/players/playerList';
import SoccerField, { SoccerFieldTheme } from './soccer/compositions/soccerField';
import SoccerFieldPosition, {
  SoccerFieldPositionSize,
  SoccerFieldPositionTheme,
} from './soccer/compositions/soccerFieldPosition';
import CompositionPositionMap, {
  CompositionPositionMapTheme,
} from './soccer/compositions/compositionPositionMap';
import Date, { DateTheme } from './general/date';
import MatchCreator from './soccer/matches/matchCreator';
import MatchStatusThumbnail from './soccer/matches/matchStatusThumbnail';
import MatchIcon from './soccer/matches/matchIcon';
import MatchThumbnail from './soccer/matches/matchThumbnail';
import MatchBoard, { MatchBoardTheme } from './soccer/matches/matchBoard';
import PositionPlayerSelector from './soccer/compositions/positionPlayerSelector';
import CompositionPositionMapField, {
  CompositionPositionMapFieldValue,
  CompositionPositionMapFieldValuePosition,
  GetPositionPlayersFunction,
} from './soccer/compositions/compositionPositionMapField';
import CompositionPositionListField, {
  CompositionPositionListFieldValue,
  CompositionPositionListFieldValuePosition,
} from './soccer/compositions/compositionPositionListField';
import PhysicalEventThumbnail, {
  PhysicalEventThumbnailTheme,
} from './soccer/physicalEvents/physicalEventThumbnail';
import PhysicalEventTimeline, {
  PhysicalEventTimelineTheme,
} from './soccer/physicalEvents/physicalEventTimeline';
import PhysicalEventList from './soccer/physicalEvents/physicalEventList';
import CompositionThumbnail from './soccer/compositions/compositionThumbnail';
import CompositionRanking, {
  CompositionRankingTheme,
} from './soccer/compositions/compositionRanking';
import AssetThumbnail, {
  AssetThumbnailSize,
  AssetThumbnailTheme,
} from './trading/assets/assetThumbnail';
import AssetOverview from './trading/assets/assetOverview';
import BoosterIcon, { BoosterIconSize, BoosterIconInfos } from './trading/boosters/boosterIcon';
import BoosterInUseThumbnail from './trading/boosters/boosterInUseThumbnail';
import BoosterInUseStack from './trading/boosters/boosterInUseStack';
import OrderThumbnail from './trading/orders/orderThumbnail';
import OrderBookThumbnail from './trading/orders/orderBookThumbnail';
import OrderList from './trading/orders/orderList';
import PortfolioThumbnail from './trading/portfolios/portfolioThumbnail';
import PortfolioList from './trading/portfolios/portfolioList';
import QuotationGraph, { DataPoint } from './trading/quotations/quotationGraph';
import TransactionThumbnail from './trading/transactions/transactionThumbnail';
import AssetList from './trading/assets/assetList';
import RankPosition from './trading/ranks/rankPosition';
import DividendThumbnail, { DividendThumbnailTheme } from './trading/dividends/dividendThumbnail';
import DividendList from './trading/dividends/dividendList';
import CreditCardThumbnail from './payment/creditCardThumbnail';
import PaymentMethodThumbnail from './payment/paymentMethodThumbnail';
import CreditCardForm, { NewCreditCard } from './payment/creditCardForm';
import PaymentMethodList from './payment/paymentMethodList';
import PaymentMethodSelector from './payment/paymentMethodSelector';
import NotificationIcon from './notifications/notificationIcon';
import NotificationThumbnail from './notifications/notificationThumbnail';
import NotificationsWindow, {
  useNotificationsContext,
  NotificationsContext,
} from './notifications/notificationsWindow';
import {
  useGoogleMapsApi,
  useAutocompleteService,
  PlacePredictionType,
  usePlacesService,
  usePlacePredictions,
  usePlaceDetails,
  usePlaceDetailsGetter,
} from './utils/googleMaps';
import Place from './utils/place';

/**
 * General
 */

export {
  Button,
  Check,
  Icon,
  Img,
  useImageDimensions,
  Heading,
  Loader,
  Overlay,
  Placeholder,
  Selection,
  Date,
  CheckBox,
  Counter,
  Input,
  Textarea,
  Select,
  Radio,
  Datetime,
  Table,
};

export type {
  ButtonSize,
  ButtonShape,
  ButtonTheme,
  DateTheme,
  HeadingSize,
  HeadingTheme,
  HeadingLevel,
  InputType,
  InputShape,
  InputTheme,
  Adapter,
  Resolver,
  Suggestion,
  SelectOptionProps,
  SelectType,
  SelectOption,
  RadioOption,
  RadioOptionProps,
  TableCellType,
  TableColumn,
  TableSelection,
  TableItemAction,
};

/**
 * Uploads
 */

export { ImageUpload };

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
  WalletRanking,
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
  WalletRankingTheme,
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
  CompositionPositionMap,
  MatchThumbnail,
  MatchCreator,
  MatchStatusThumbnail,
  MatchIcon,
  MatchBoard,
  PositionPlayerSelector,
  CompositionPositionMapField,
  CompositionPositionListField,
  PhysicalEventThumbnail,
  PhysicalEventTimeline,
  PhysicalEventList,
  CompositionThumbnail,
  CompositionRanking,
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
  CompositionPositionMapTheme,
  CompositionPositionMapFieldValue,
  CompositionPositionMapFieldValuePosition,
  GetPositionPlayersFunction,
  CompositionPositionListFieldValue,
  CompositionPositionListFieldValuePosition,
  PhysicalEventThumbnailTheme,
  PhysicalEventTimelineTheme,
  MatchBoardTheme,
  CompositionRankingTheme,
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
  OrderBookThumbnail,
  OrderList,
  PortfolioThumbnail,
  PortfolioList,
  QuotationGraph,
  TransactionThumbnail,
  AssetList,
  RankPosition,
  DividendThumbnail,
  DividendList,
};

export type {
  AssetThumbnailSize,
  AssetThumbnailTheme,
  BoosterIconSize,
  BoosterIconInfos,
  DataPoint,
  DividendThumbnailTheme,
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
  CreditCardInput,
};

export type { NewCreditCard };

/**
 * Utils
 */

export { NotificationIcon, NotificationThumbnail, NotificationsWindow, useNotificationsContext };

export type { NotificationsContext };

/**
 * Utils
 */

export {
  usePlacesService,
  useGoogleMapsApi,
  useAutocompleteService,
  usePlacePredictions,
  usePlaceDetails,
  usePlaceDetailsGetter,
};

export type { Place, PlacePredictionType };
