import './index.scss';
import Loader from './feedbacks/loader';
import {
  ModalsContext,
  useModals,
  Modal,
  ModalComponentProps,
  ModalsState,
} from './feedbacks/modal';
import Overlay from './feedbacks/overlay';
import Placeholder from './feedbacks/placeholder';
import Selection from './feedbacks/selection';
import Button, { ButtonType, ButtonSize, ButtonShape, ButtonTheme } from './general/button';
import Wrapper, { WrapperProps } from './general/wrapper';
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
import AssetThumbnail, { AssetThumbnailSize, AssetThumbnailTheme } from './trading/assetThumbnail';
import AssetOverview from './trading/assetOverview';
import BoosterIcon, { BoosterIconSize, BoosterIconInfos } from './trading/boosterIcon';
import BoosterInUseThumbnail from './trading/boosterInUseThumbnail';
import BoosterInUseStack from './trading/boosterInUseStack';
import OrderThumbnail from './trading/orderThumbnail';
import PortfolioThumbnail from './trading/portfolioThumbnail';
import QuotationGraph, { DataPoint } from './trading/quotationGraph';
import TransactionThumbnail from './trading/transactionThumbnail';
import AssetList from './trading/assetList';
import CreditCardThumbnail from './payment/creditCardThumbnail';
import PaymentMethodThumbnail from './payment/paymentMethodThumbnail';
import CreditCardForm, { NewCreditCard } from './payment/creditCardForm';
import PaymentMethodList from './payment/paymentMethodList';
import PaymentMethodSelector from './payment/paymentMethodSelector';

/**
 * Feedback
 */

export { Loader, ModalsContext, useModals, Overlay, Placeholder, Selection };

export type { Modal, ModalComponentProps, ModalsState };

/**
 * General
 */

export { Button, Wrapper, Check, Icon, Heading };

export type {
  ButtonType,
  ButtonSize,
  ButtonShape,
  ButtonTheme,
  WrapperProps,
  HeadingSize,
  HeadingTheme,
  HeadingLevel,
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

export { LeagueIcon, LeagueThumbnail, ClubIcon, ClubThumbnail, ClubList, PlayerThumbnail };

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
  AssetOverview,
  BoosterIcon,
  BoosterInUseThumbnail,
  BoosterInUseStack,
  OrderThumbnail,
  PortfolioThumbnail,
  QuotationGraph,
  TransactionThumbnail,
  AssetList,
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
