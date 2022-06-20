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
import CreditCardInput from './payment/creditCardInput';
import Input, {
  Adapter,
  Resolver,
  InputType,
  InputShape,
  InputTheme,
  Suggestion,
} from './general/input';
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
} from './market/walletThumbnail';
import WalletTeam from './market/walletTeam';
import WalletMetrics from './market/walletMetrics';
import WalletOverview from './market/walletOverview';
import WalletList from './market/walletList';
import WalletRanking, { WalletRankingTheme } from './market/walletRanking';
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
import CompositionPositionMap, {
  CompositionPositionMapTheme,
} from './soccer/compositionPositionMap';
import Date, { DateTheme } from './general/date';
import MatchCreator from './soccer/matchCreator';
import MatchStatusThumbnail from './soccer/matchStatusThumbnail';
import MatchIcon from './soccer/matchIcon';
import MatchThumbnail from './soccer/matchThumbnail';
import MatchBoard, { MatchBoardTheme } from './soccer/matchBoard';
import PositionPlayerSelector from './soccer/positionPlayerSelector';
import CompositionPositionMapField, {
  CompositionPositionMapFieldValue,
  CompositionPositionMapFieldValuePosition,
  GetPositionPlayersFunction,
} from './soccer/compositionPositionMapField';
import CompositionPositionListField, {
  CompositionPositionListFieldValue,
  CompositionPositionListFieldValuePosition,
} from './soccer/compositionPositionListField';
import PhysicalEventThumbnail, {
  PhysicalEventThumbnailTheme,
} from './soccer/physicalEventThumbnail';
import PhysicalEventTimeline, { PhysicalEventTimelineTheme } from './soccer/physicalEventTimeline';
import PhysicalEventList from './soccer/physicalEventList';
import CompositionThumbnail from './soccer/compositionThumbnail';
import CompositionRanking, { CompositionRankingTheme } from './soccer/compositionRanking';
import AssetThumbnail, { AssetThumbnailSize, AssetThumbnailTheme } from './trading/assetThumbnail';
import AssetOverview from './trading/assetOverview';
import BoosterIcon, { BoosterIconSize, BoosterIconInfos } from './trading/boosterIcon';
import BoosterInUseThumbnail from './trading/boosterInUseThumbnail';
import BoosterInUseStack from './trading/boosterInUseStack';
import OrderThumbnail from './trading/orderThumbnail';
import OrderBookThumbnail from './trading/orderBookThumbnail';
import OrderList from './trading/orderList';
import PortfolioThumbnail from './trading/portfolioThumbnail';
import PortfolioList from './trading/portfolioList';
import QuotationGraph, { DataPoint } from './trading/quotationGraph';
import TransactionThumbnail from './trading/transactionThumbnail';
import AssetList from './trading/assetList';
import RankPosition from './trading/rankPosition';
import DividendThumbnail, { DividendThumbnailTheme } from './trading/dividendThumbnail';
import DividendList from './trading/dividendList';
import CreditCardThumbnail from './payment/creditCardThumbnail';
import PaymentMethodThumbnail from './payment/paymentMethodThumbnail';
import CreditCardForm, { NewCreditCard } from './payment/creditCardForm';
import PaymentMethodList from './payment/paymentMethodList';
import PaymentMethodSelector from './payment/paymentMethodSelector';
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
  Select,
  Radio,
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

export {
  usePlacesService,
  useGoogleMapsApi,
  useAutocompleteService,
  usePlacePredictions,
  usePlaceDetails,
  usePlaceDetailsGetter,
};

export type { Place, PlacePredictionType };
