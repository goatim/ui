import { ReactElement } from 'react';
import Fleuraison from '../icons/fleuraison';
import Alert from '../icons/alert';
import AppleStore from '../icons/appleStore';
import Arrow from '../icons/arrow';
import Bouquet from '../icons/bouquet';
import Delivery from '../icons/delivery';
import Marker from '../icons/marker';
import Mastercard from '../icons/mastercard';
import Plus from '../icons/plus';
import Search from '../icons/search';
import Shop from '../icons/shop';
import Time from '../icons/time';
import User from '../icons/user';
import Visa from '../icons/visa';
import Download from '../icons/download';
import Cart from '../icons/cart';
import Cff from '../icons/cff';
import Desiree from '../icons/desiree';
import Check from '../icons/check';
import Chevron from '../icons/chevron';
import Camera from '../icons/camera';
import Sides from '../icons/sides';
import Bin from '../icons/bin';
import Edit from '../icons/edit';
import Refresh from '../icons/refresh';
import Phone from '../icons/phone';
import Info from '../icons/info';
import Message from '../icons/message';
import Calendar from '../icons/calendar';

export enum IconName {
  FLEURAISON = 'fleuraison',
  ALERT = 'alert',
  APPLE_STORE = 'apple-store',
  ARROW = 'arrow',
  BOUQUET = 'bouquet',
  DELIVERY = 'delivery',
  MARKER = 'marker',
  MASTERCARD = 'mastercard',
  PLUS = 'plus',
  SEARCH = 'search',
  SHOP = 'shop',
  TIME = 'time',
  USER = 'user',
  VISA = 'visa',
  DOWNLOAD = 'download',
  CART = 'cart',
  CFF = 'cff',
  DESIREE = 'desiree',
  CHECK = 'check',
  CHEVRON = 'chevron',
  CAMERA = 'camera',
  SIDES = 'sides',
  BIN = 'bin',
  EDIT = 'edit',
  REFRESH = 'refresh',
  PHONE = 'phone',
  INFO = 'info',
  MESSAGE = 'message',
  CALENDAR = 'calendar',
}

export interface Props {
  name?: IconName | string;
  size?: number;
  color?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  color5?: string;
  rotate?: number;
}

export default function Icon({
  name = IconName.ALERT,
  size = 40,
  color,
  color2,
  color3,
  color4,
  color5,
  rotate,
}: Props): ReactElement {
  let Svg: ReactElement;

  switch (name) {
    default:
    case IconName.ALERT:
      Svg = <Alert size={size} color={color as string} />;
      break;
    case IconName.APPLE_STORE:
      Svg = <AppleStore size={size} color={color as string} color2={color2} color3={color3} />;
      break;
    case IconName.ARROW:
      Svg = <Arrow size={size} color={color as string} />;
      break;
    case IconName.BOUQUET:
      Svg = <Bouquet size={size} color={color as string} />;
      break;
    case IconName.DELIVERY:
      Svg = <Delivery size={size} color={color as string} />;
      break;
    case IconName.MARKER:
      Svg = <Marker size={size} color={color as string} />;
      break;
    case IconName.MASTERCARD:
      Svg = <Mastercard size={size} color={color as string} color2={color2} />;
      break;
    case IconName.PLUS:
      Svg = <Plus size={size} color={color as string} />;
      break;
    case IconName.SEARCH:
      Svg = <Search size={size} color={color as string} />;
      break;
    case IconName.SHOP:
      Svg = <Shop size={size} color={color as string} />;
      break;
    case IconName.TIME:
      Svg = <Time size={size} color={color as string} />;
      break;
    case IconName.USER:
      Svg = <User size={size} color={color as string} />;
      break;
    case IconName.VISA:
      Svg = <Visa size={size} color={color as string} color2={color2} />;
      break;
    case IconName.DOWNLOAD:
      Svg = <Download size={size} color={color as string} />;
      break;
    case IconName.CART:
      Svg = <Cart size={size} color={color as string} />;
      break;
    case IconName.PHONE:
      Svg = <Phone size={size} color={color as string} />;
      break;
    case IconName.INFO:
      Svg = <Info size={size} color={color as string} />;
      break;
    case IconName.CFF:
      Svg = (
        <Cff
          size={size}
          color={color as string}
          color2={color2}
          color3={color3}
          color4={color4}
          color5={color5}
        />
      );
      break;
    case IconName.DESIREE:
      Svg = <Desiree size={size} color={color as string} />;
      break;
    case IconName.CHECK:
      Svg = <Check size={size} color={color as string} />;
      break;
    case IconName.CHEVRON:
      Svg = <Chevron size={size} color={color as string} />;
      break;
    case IconName.CAMERA:
      Svg = <Camera size={size} color={color as string} />;
      break;
    case IconName.SIDES:
      Svg = <Sides size={size} color={color as string} />;
      break;
    case IconName.BIN:
      Svg = <Bin size={size} color={color as string} />;
      break;
    case IconName.EDIT:
      Svg = <Edit size={size} color={color as string} />;
      break;
    case IconName.REFRESH:
      Svg = <Refresh size={size} color={color as string} />;
      break;
    case IconName.MESSAGE:
      Svg = <Message size={size} color={color as string} />;
      break;
    case IconName.CALENDAR:
      Svg = <Calendar size={size} color={color as string} />;
      break;
    case IconName.FLEURAISON:
      Svg = <Fleuraison size={size} color={color as string} />;
      break;
  }

  return (
    <div
      className={`theme-icon ${name}`}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}>
      {Svg}
    </div>
  );
}
