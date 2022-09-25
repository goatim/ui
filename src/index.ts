import './index.scss';
import Loader from './general/loader';
import Overlay from './general/overlay';
import Placeholder from './general/placeholder';
import Selection from './general/selection';
import StepIndicator from './general/stepIndicator';
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
  InputSize,
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
import WalletAmountDetail, { WalletAmountDetailSize } from './market/wallets/walletAmountDetail';
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
import ClubThumbnail, {
  ClubThumbnailSize,
  ClubThumbnailTheme,
  ClubThumbnailDisposition,
} from './soccer/clubs/clubThumbnail';
import ClubList from './soccer/clubs/clubList';
import PlayerThumbnail, {
  PlayerThumbnailSize,
  PlayerThumbnailTheme,
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
import DateTimeThumbnail, { DateTimeThumbnailTheme } from './general/dateTimeThumbnail';
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
import SubscriptionThumbnail, {
  SubscriptionThumbnailTheme,
} from './subscriptions/subscriptionThumbnail';
import AssetThumbnail, {
  AssetThumbnailShape,
  AssetThumbnailSize,
  AssetThumbnailTheme,
} from './trading/assets/assetThumbnail';
import AssetOverview, { AssetOverviewSize } from './trading/assets/assetOverview';
import BoosterIcon, { BoosterIconSize, BoosterIconInfos } from './trading/boosters/boosterIcon';
import BoosterThumbnail, { BoosterThumbnailTheme } from './trading/boosters/boosterThumbnail';
import BoosterInUseThumbnail from './trading/boosters/boosterInUseThumbnail';
import BoosterInUseStack from './trading/boosters/boosterInUseStack';
import OrderThumbnail, { OrderThumbnailSize } from './trading/orders/orderThumbnail';
import OrderBookThumbnail, {
  OrderBookThumbnailSize,
  OrderBookThumbnailTheme,
} from './trading/orders/orderBookThumbnail';
import OrderList from './trading/orders/orderList';
import ShareBulkThumbnail from './trading/shareBulks/shareBulkThumbnail';
import ShareBulkList from './trading/shareBulks/shareBulkList';
import PackFactoryThumbnail, {
  PackFactoryThumbnailTheme,
} from './trading/packs/packFactoryThumbnail';
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
import IpoThumbnail, { IpoThumbnailShape, IpoThumbnailSize } from './trading/ipos/ipoThumbnail';
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
import OnboardingCarousel, {
  OnboardingCarouselSize,
  OnboardingCarouselSlideData,
} from './onboarding/onboardingCarousel';
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
  CheckBox,
  Counter,
  DateTimeThumbnail,
  DatePicker,
  DateTimePicker,
  Datetime,
  Heading,
  Icon,
  Input,
  Loader,
  ModalsContext,
  Overlay,
  Placeholder,
  Radio,
  Select,
  Selection,
  StepIndicator,
  Table,
  Textarea,
  TimePicker,
  Toggle,
  Upload,
  useModals,
};

export type {
  ButtonShape,
  ButtonSize,
  ButtonTheme,
  DateTimeThumbnailTheme,
  HeadingLevel,
  HeadingSize,
  HeadingTheme,
  InputAdapter,
  InputResolver,
  InputShape,
  InputTheme,
  InputSize,
  InputType,
  Modal,
  ModalComponentProps,
  ModalsState,
  PushModalFunction,
  PushModalParams,
  RadioOption,
  RadioOptionProps,
  SelectOption,
  SelectOptionProps,
  SelectType,
  Suggestion,
  TableCellType,
  TableColumn,
  TableItemAction,
  TableSelection,
};

/**
 * Auth
 */

export { UserThumbnail };

export type { UserThumbnailInfos, UserThumbnailSize };

/**
 * Market
 */

export {
  CartOverview,
  CartResume,
  CheckoutBill,
  FridayCoins,
  FridayCoinsVariation,
  ItemEditor,
  ItemList,
  ItemThumbnail,
  OrderItemEditor,
  OrderItemThumbnail,
  PercentageVariation,
  WalletAmountDetail,
  WalletList,
  WalletMetrics,
  WalletOverview,
  WalletRanking,
  WalletTeam,
  WalletThumbnail,
};

export type {
  CartOverviewSize,
  CartResumeSize,
  FridayCoinsSize,
  FridayCoinsTheme,
  FridayCoinsVariationSize,
  ItemEditorFields,
  ItemEditorSize,
  ItemThumbnailSize,
  OrderItemEditorFields,
  OrderItemEditorSize,
  OrderItemThumbnailSize,
  PercentageVariationShape,
  PercentageVariationSize,
  WalletAmountDetailSize,
  WalletMetricsSize,
  WalletOverviewSize,
  WalletRankingTheme,
  WalletThumbnailInfos,
  WalletThumbnailSize,
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
  ClubThumbnailDisposition,
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
  BoosterThumbnail,
  OrderThumbnail,
  OrderBookThumbnail,
  OrderList,
  ShareBulkThumbnail,
  ShareBulkList,
  PackFactoryThumbnail,
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
  IpoThumbnail,
};

export type {
  AssetThumbnailShape,
  AssetThumbnailSize,
  AssetThumbnailTheme,
  BoosterIconSize,
  BoosterIconInfos,
  BoosterThumbnailTheme,
  DataPoint,
  QuotationHistoryGraphTheme,
  DividendThumbnailTheme,
  IpoThumbnailShape,
  IpoThumbnailSize,
  AssetOverviewSize,
  PortfolioThumbnailSize,
  OrderThumbnailSize,
  OrderBookThumbnailSize,
  OrderBookThumbnailTheme,
  PackFactoryThumbnailTheme,
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
 * Notifications
 */

export { NotificationIcon, NotificationThumbnail, NotificationsWindow, useNotificationsContext };

export type { NotificationsContext };

/**
 * Onboarding
 */

export { OnboardingCarousel };

export type { OnboardingCarouselSize, OnboardingCarouselSlideData };

/**
 * Subscriptions
 */

export { SubscriptionThumbnail };

export type { SubscriptionThumbnailTheme };

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
