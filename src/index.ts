import './index.scss';
import Loader, { LoaderTheme } from './general/loader';
import SoccerLoader, { SoccerLoaderTheme } from './general/soccerLoader';
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
import Input, {
  InputAdapter,
  InputResolver,
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
import Gutter from './general/gutter';
import Tag from './general/tag';
import Wallpaper from './general/wallpaper';
import TradingBanner from './navigation/tradingBanner';
import A2HSBanner from './navigation/a2hsBanner';
import UserPicture, { UserPictureSize, UserPictureTheme } from './auth/users/userPicture';
import UserThumbnail, { UserThumbnailSize, UserThumbnailTheme } from './auth/users/userThumbnail';
import UserEditor, { UserEditorFields } from './auth/users/userEditor';
import FridayCoins, { FridayCoinsTheme, FridayCoinsSize } from './market/fridayCoins';
import FridayCoinsVariation, {
  FridayCoinsVariationSize,
  FridayCoinsVariationTheme,
} from './market/fridayCoinsVariation';
import PercentageVariation, {
  PercentageVariationShape,
  PercentageVariationSize,
} from './market/percentageVariation';
import WalletPicture, {
  WalletPictureSize,
  WalletPictureTheme,
  WalletPictureOutline,
} from './market/wallets/walletPicture';
import WalletThumbnail, {
  WalletThumbnailSize,
  WalletThumbnailTheme,
} from './market/wallets/walletThumbnail';
import WalletEditor, { WalletEditorFields } from './market/wallets/walletEditor';
import WalletTeam from './market/wallets/walletTeam';
import WalletMetrics, { WalletMetricsSize } from './market/wallets/walletMetrics';
import WalletOverview, { WalletOverviewSize } from './market/wallets/walletOverview';
import WalletList from './market/wallets/walletList';
import WalletRank from './market/wallets/walletRank';
import WalletRanking, { WalletRankingTheme } from './market/wallets/walletRanking';
import WalletAmountDetail, { WalletAmountDetailSize } from './market/wallets/walletAmountDetail';
import CurrenciesRateThumbnail, {
  CurrenciesRateThumbnailTheme,
} from './market/currenciesRates/currenciesRateThumbnail';
import ItemEditor, { ItemEditorFields, ItemEditorSize } from './market/checkouts/itemEditor';
import OrderItemEditor, {
  OrderItemEditorFields,
  OrderItemEditorSize,
} from './market/checkouts/orderItemEditor';
import OrderItemThumbnail, { OrderItemThumbnailSize } from './market/checkouts/orderItemThumbnail';
import PackItemThumbnail, { PackItemThumbnailSize } from './market/checkouts/packItemThumbnail';
import BoosterItemThumbnail, {
  BoosterItemThumbnailSize,
} from './market/checkouts/boosterItemThumbnail';
import ItemThumbnail, { ItemThumbnailSize } from './market/checkouts/itemThumbnail';
import ItemList from './market/checkouts/itemList';
import CartResume, { CartResumeSize } from './market/cartResume';
import CartOverview, { CartOverviewSize } from './market/cartOverview';
import CheckoutBill from './market/checkouts/checkoutBill';
import ShopBanner from './market/shopBanner';
import LeagueIcon, { LeagueIconSize } from './soccer/leagues/leagueIcon';
import LeagueThumbnail, {
  LeagueThumbnailSize,
  LeagueThumbnailTheme,
} from './soccer/leagues/leagueThumbnail';
import LeagueCarousel, { LeagueCarouselSize } from './soccer/leagues/leagueCarousel';
import LeagueOverview, { LeagueOverviewSize } from './soccer/leagues/leagueOverview';
import ClubIcon, { ClubIconSize } from './soccer/clubs/clubIcon';
import ClubThumbnail, {
  ClubThumbnailSize,
  ClubThumbnailTheme,
  ClubThumbnailShape,
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
import TournamentParticipantThumbnail from './soccer/tournamentParticipants/tournamentParticipantThumbnail';
import TournamentParticipantPodium from './soccer/tournamentParticipants/tournamentParticipantPodium';
import TournamentBanner, { TournamentBannerSize } from './soccer/tournaments/tournamentBanner';
import DateTimeThumbnail, { DateTimeThumbnailTheme } from './general/dateTimeThumbnail';
import MatchCreator from './soccer/matches/matchCreator';
import MatchStatusThumbnail, {
  MatchStatusThumbnailTheme,
} from './soccer/matches/matchStatusThumbnail';
import MatchIcon from './soccer/matches/matchIcon';
import MatchParticipants from './soccer/matches/matchParticipants';
import MatchLive from './soccer/matches/matchLive';
import MatchAction from './soccer/matches/matchAction';
import MatchHeader, { MatchHeaderTheme } from './soccer/matches/matchHeader';
import MatchThumbnail from './soccer/matches/matchThumbnail';
import MatchCarousel, { MatchCarouselSize } from './soccer/matches/matchCarousel';
import MatchBoard, { MatchBoardTheme, MatchBoardSize } from './soccer/matches/matchBoard';
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
import BoosterIcon, { BoosterIconSize } from './trading/boosters/boosterIcon';
import BoosterFactoryThumbnail, {
  BoosterFactoryThumbnailSize,
  BoosterFactoryThumbnailShape,
} from './trading/boosters/boosterFactoryThumbnail';
import BoosterThumbnail from './trading/boosters/boosterThumbnail';
import BoosterStack from './trading/boosters/boosterStack';
import OrderThumbnail, { OrderThumbnailSize } from './trading/orders/orderThumbnail';
import OrderBookThumbnail, {
  OrderBookThumbnailSize,
  OrderBookThumbnailTheme,
} from './trading/orders/orderBookThumbnail';
import OrderList from './trading/orders/orderList';
import ShareBulkThumbnail, {
  ShareBulkThumbnailSize,
} from './trading/shareBulks/shareBulkThumbnail';
import ShareBulkList from './trading/shareBulks/shareBulkList';
import PackFactoryThumbnail from './trading/packs/packFactoryThumbnail';
import PackFactoryCarousel, { PackFactoryCarouselSize } from './trading/packs/packFactoryCarousel';
import PackThumbnail from './trading/packs/packThumbnail';
import PackModal from './trading/packs/packModal';
import PortfolioThumbnail, {
  PortfolioThumbnailSize,
} from './trading/portfolios/portfolioThumbnail';
import PortfolioList from './trading/portfolios/portfolioList';
import PortfolioCarousel, { PortfolioCarouselSize } from './trading/portfolios/portfolioCarousel';
import QuotationHistoryGraph, {
  DataPoint,
  QuotationHistoryGraphTheme,
} from './trading/quotations/quotationHistoryGraph';
import TransactionThumbnail, {
  TransactionThumbnailSize,
} from './trading/transactions/transactionThumbnail';
import AssetList from './trading/assets/assetList';
import RankPosition from './trading/ranks/rankPosition';
import DividendThumbnail, { DividendThumbnailTheme } from './trading/dividends/dividendThumbnail';
import DividendList from './trading/dividends/dividendList';
import IpoThumbnail, { IpoThumbnailShape, IpoThumbnailSize } from './trading/ipos/ipoThumbnail';
import CreditCardThumbnail from './payment/creditCardThumbnail';
import PaymentMethodThumbnail from './payment/paymentMethodThumbnail';
import CreditCardInput from './payment/creditCardInput';
import CreditCardForm, { CreditCardFields } from './payment/creditCardForm';
import PaymentMethodList from './payment/paymentMethodList';
import StripePaymentMethodList from './payment/stripePaymentMethodList';
import PaymentMethodSelector from './payment/paymentMethodSelector';
import StripeCreditCardInput from './payment/stripeCreditCardInput';
import StripeCreditCardForm, { NewStripeCard } from './payment/stripeCreditCardForm';
import StripePaymentMethodSelector from './payment/stripePaymentMethodSelector';
import NotificationIcon from './community/notifications/notificationIcon';
import NotificationThumbnail from './community/notifications/notificationThumbnail';
import NotificationList from './community/notifications/notificationList';
import NotificationsContext, {
  useNotificationsContext,
  NotificationsContextState,
} from './community/notifications/notificationsContext';
import PostHeader from './community/posts/postHeader';
import OrdersPost, { OrdersPostSize } from './community/posts/ordersPost';
import PackPost, { PackPostSize } from './community/posts/packPost';
import TransactionPost, { TransactionPostSize } from './community/posts/transactionPost';
import MatchSummaryPost from './community/posts/matchSummaryPost';
import PostThumbnail, { PostThumbnailSize } from './community/posts/postThumbnail';
import PostList from './community/posts/postList';
import OnboardingCarousel, {
  OnboardingCarouselSize,
  OnboardingCarouselSlideData,
} from './onboarding/onboardingCarousel';
import SearchInput, { SearchInputTheme } from './search/searchInput';
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
import Client, { getClient, getBrowser, Browser, Device, getDevice } from './utils/client';
import ThreeDSecure from './payment/threeDSecure';

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
  SoccerLoader,
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
  Gutter,
  Tag,
  Wallpaper,
};

export type {
  LoaderTheme,
  SoccerLoaderTheme,
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
 * Navigation
 */

export { TradingBanner, A2HSBanner };

/**
 * Auth
 */

export { UserPicture, UserThumbnail, UserEditor };

export type {
  UserPictureSize,
  UserPictureTheme,
  UserThumbnailTheme,
  UserThumbnailSize,
  UserEditorFields,
};

/**
 * Market
 */

export {
  CartOverview,
  CartResume,
  CurrenciesRateThumbnail,
  CheckoutBill,
  ShopBanner,
  FridayCoins,
  FridayCoinsVariation,
  ItemEditor,
  ItemList,
  ItemThumbnail,
  OrderItemEditor,
  OrderItemThumbnail,
  PackItemThumbnail,
  BoosterItemThumbnail,
  PercentageVariation,
  WalletAmountDetail,
  WalletList,
  WalletMetrics,
  WalletOverview,
  WalletRank,
  WalletPicture,
  WalletRanking,
  WalletTeam,
  WalletThumbnail,
  WalletEditor,
};

export type {
  CartOverviewSize,
  CartResumeSize,
  FridayCoinsSize,
  FridayCoinsTheme,
  FridayCoinsVariationSize,
  FridayCoinsVariationTheme,
  CurrenciesRateThumbnailTheme,
  ItemEditorFields,
  ItemEditorSize,
  ItemThumbnailSize,
  OrderItemEditorFields,
  OrderItemEditorSize,
  OrderItemThumbnailSize,
  PackItemThumbnailSize,
  BoosterItemThumbnailSize,
  PercentageVariationShape,
  PercentageVariationSize,
  WalletAmountDetailSize,
  WalletMetricsSize,
  WalletOverviewSize,
  WalletRankingTheme,
  WalletThumbnailSize,
  WalletThumbnailTheme,
  WalletPictureSize,
  WalletPictureTheme,
  WalletPictureOutline,
  WalletEditorFields,
};

/**
 * Soccer
 */

export {
  LeagueIcon,
  LeagueThumbnail,
  LeagueOverview,
  LeagueCarousel,
  ClubIcon,
  ClubThumbnail,
  ClubList,
  PlayerThumbnail,
  PlayerList,
  SpotlightThumbnail,
  SoccerField,
  SoccerFieldPosition,
  CompositionPositionMap,
  MatchHeader,
  MatchThumbnail,
  MatchCarousel,
  MatchCreator,
  MatchStatusThumbnail,
  MatchIcon,
  MatchBoard,
  MatchParticipants,
  MatchLive,
  MatchAction,
  PositionPlayerSelector,
  CompositionPositionMapField,
  CompositionPositionListField,
  PhysicalEventThumbnail,
  PhysicalEventTimeline,
  PhysicalEventList,
  CompositionThumbnail,
  CompositionRanking,
  TournamentParticipantThumbnail,
  TournamentParticipantPodium,
  TournamentBanner,
};

export type {
  LeagueIconSize,
  LeagueThumbnailSize,
  LeagueThumbnailTheme,
  LeagueOverviewSize,
  LeagueCarouselSize,
  ClubIconSize,
  ClubThumbnailSize,
  ClubThumbnailTheme,
  ClubThumbnailShape,
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
  MatchStatusThumbnailTheme,
  MatchHeaderTheme,
  MatchBoardTheme,
  MatchBoardSize,
  MatchCarouselSize,
  CompositionRankingTheme,
  SpotlightThumbnailSize,
  TournamentBannerSize,
};

/**
 * Trading
 */

export {
  AssetThumbnail,
  AssetOverview,
  BoosterIcon,
  BoosterFactoryThumbnail,
  BoosterThumbnail,
  BoosterStack,
  OrderThumbnail,
  OrderBookThumbnail,
  OrderList,
  ShareBulkThumbnail,
  ShareBulkList,
  PackFactoryThumbnail,
  PackFactoryCarousel,
  PackThumbnail,
  PackModal,
  PortfolioThumbnail,
  PortfolioList,
  PortfolioCarousel,
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
  BoosterFactoryThumbnailSize,
  BoosterFactoryThumbnailShape,
  DataPoint,
  QuotationHistoryGraphTheme,
  DividendThumbnailTheme,
  IpoThumbnailShape,
  IpoThumbnailSize,
  AssetOverviewSize,
  PackFactoryCarouselSize,
  PortfolioThumbnailSize,
  PortfolioCarouselSize,
  OrderThumbnailSize,
  OrderBookThumbnailSize,
  OrderBookThumbnailTheme,
  TransactionThumbnailSize,
  ShareBulkThumbnailSize,
};

/**
 * Payment
 */

export {
  CreditCardThumbnail,
  PaymentMethodThumbnail,
  PaymentMethodList,
  CreditCardInput,
  CreditCardForm,
  PaymentMethodSelector,
  StripePaymentMethodSelector,
  StripeCreditCardInput,
  StripeCreditCardForm,
  StripePaymentMethodList,
  ThreeDSecure,
};

export type { CreditCardFields, NewStripeCard };

/**
 * Community
 */

export {
  NotificationIcon,
  NotificationThumbnail,
  NotificationList,
  NotificationsContext,
  useNotificationsContext,
  PostHeader,
  OrdersPost,
  PackPost,
  TransactionPost,
  MatchSummaryPost,
  PostThumbnail,
  PostList,
};

export type {
  NotificationsContextState,
  OrdersPostSize,
  PackPostSize,
  TransactionPostSize,
  PostThumbnailSize,
};

/**
 * Onboarding
 */

export { OnboardingCarousel };

export type { OnboardingCarouselSize, OnboardingCarouselSlideData };

/**
 * Search
 */

export { SearchInput };

export type { SearchInputTheme };

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
  getClient,
  getDevice,
  getBrowser,
};

export type { Place, PlacePredictionType, Client, Device, Browser };
