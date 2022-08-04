import './index.scss';
import Loader from './general/loader';
import Overlay from './general/overlay';
import Placeholder from './general/placeholder';
import Selection from './general/selection';
import Button, { ButtonSize, ButtonShape, ButtonTheme } from './general/button';
import Check from './general/check';
import Icon from './general/icon';
import Heading, { HeadingSize, HeadingTheme, HeadingLevel } from './general/heading';
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
  InputAdapter,
  InputResolver,
  InputType,
  InputShape,
  InputTheme,
  Suggestion,
} from './general/input';
import Textarea from './general/textarea';
import Select, { SelectOption, SelectType, SelectOptionProps } from './general/select';
import Radio, { RadioOption, RadioOptionProps } from './general/radio';
import Toggle from './general/toggle';
import DatePicker from './general/datePicker';
import TimePicker from './general/timePicker';
import DateTimePicker from './general/dateTimePicker';
import Upload from './general/upload';
import {
  ModalsContext,
  useModals,
  Modal,
  ModalComponentProps,
  ModalsState,
  PushModalParams,
  PushModalFunction,
} from './general/modal';
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
import WalletMetrics, { WalletMetricsSize } from './market/wallets/walletMetrics';
import WalletOverview, { WalletOverviewSize } from './market/wallets/walletOverview';
import WalletList from './market/wallets/walletList';
import WalletRanking, { WalletRankingTheme } from './market/wallets/walletRanking';
import ItemEditor, { ItemEditorFields, ItemEditorSize } from './market/checkouts/itemEditor';
import OrderItemEditor, {
  OrderItemEditorFields,
  OrderItemEditorSize,
} from './market/checkouts/orderItemEditor';
import OrderItemThumbnail, { OrderItemThumbnailSize } from './market/checkouts/orderItemThumbnail';
import ItemThumbnail, { ItemThumbnailSize } from './market/checkouts/itemThumbnail';
import ItemList from './market/checkouts/itemList';
import CartResume, { CartResumeSize } from './market/cartResume';
import CartOverview, { CartOverviewSize } from './market/cartOverview';
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
  PlayerThumbnailFormat,
} from './soccer/players/playerThumbnail';
import PlayerList from './soccer/players/playerList';
import SpotlightThumbnail, { SpotlightThumbnailSize } from './soccer/spotlights/spotlightThumbnail';
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
import AssetOverview, { AssetOverviewSize } from './trading/assets/assetOverview';
import BoosterIcon, { BoosterIconSize, BoosterIconInfos } from './trading/boosters/boosterIcon';
import BoosterInUseThumbnail from './trading/boosters/boosterInUseThumbnail';
import BoosterInUseStack from './trading/boosters/boosterInUseStack';
import OrderThumbnail, { OrderThumbnailSize } from './trading/orders/orderThumbnail';
import OrderBookThumbnail, { OrderBookThumbnailSize } from './trading/orders/orderBookThumbnail';
import OrderList from './trading/orders/orderList';
import ShareBulkThumbnail from './trading/shareBulks/shareBulkThumbnail';
import ShareBulkList from './trading/shareBulks/shareBulkList';
import PackIcon from './trading/packs/packIcon';
import PackThumbnail from './trading/packs/packThumbnail';
import PackModal from './trading/packs/packModal';
import PortfolioThumbnail, {
  PortfolioThumbnailSize,
} from './trading/portfolios/portfolioThumbnail';
import PortfolioList from './trading/portfolios/portfolioList';
import QuotationHistoryGraph, {
  DataPoint,
  QuotationHistoryGraphTheme,
} from './trading/quotations/quotationHistoryGraph';
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
  Toggle,
  DatePicker,
  TimePicker,
  DateTimePicker,
  Upload,
  ModalsContext,
  useModals,
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
  InputAdapter,
  InputResolver,
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
  Modal,
  ModalComponentProps,
  ModalsState,
  PushModalParams,
  PushModalFunction,
};

/**
 * Auth
 */

export { UserThumbnail };

export type { UserThumbnailInfos, UserThumbnailSize, WalletMetricsSize, WalletOverviewSize };

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
  ItemEditorSize,
  OrderItemEditorSize,
  OrderItemThumbnailSize,
  ItemThumbnailSize,
  CartResumeSize,
  CartOverviewSize,
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
  SpotlightThumbnail,
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
  PlayerThumbnailFormat,
  SpotlightThumbnailSize,
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
  ShareBulkThumbnail,
  ShareBulkList,
  PackIcon,
  PackThumbnail,
  PackModal,
  PortfolioThumbnail,
  PortfolioList,
  QuotationHistoryGraph,
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
  QuotationHistoryGraphTheme,
  DividendThumbnailTheme,
  AssetOverviewSize,
  PortfolioThumbnailSize,
  OrderThumbnailSize,
  OrderBookThumbnailSize,
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
