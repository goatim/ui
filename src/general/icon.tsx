import { ReactElement } from 'react';
import { IconProps } from '../icons/icon';
import Alert from '../icons/alert';
import Calendar from '../icons/calendar';
import Camera from '../icons/camera';
import Check from '../icons/check';
import Chevron from '../icons/chevron';
import Lightning from '../icons/lightning';
import Money from '../icons/money';
import Rocket from '../icons/rocket';
import Search from '../icons/search';
import Shirt from '../icons/shirt';
import Trophy from '../icons/trophy';
import User from '../icons/user';
import Cart from '../icons/cart';
import Bell from '../icons/bell';
import Facebook from '../icons/facebook';
import Friday from '../icons/friday';
import Instagram from '../icons/instagram';
import Linkedin from '../icons/linkedin';
import Twitter from '../icons/twitter';
import Youtube from '../icons/youtube';

export type IconName =
  | 'alert'
  | 'bell'
  | 'calendar'
  | 'camera'
  | 'cart'
  | 'check'
  | 'chevron'
  | 'facebook'
  | 'friday'
  | 'instagram'
  | 'lightning'
  | 'linkedin'
  | 'money'
  | 'rocket'
  | 'search'
  | 'shirt'
  | 'trophy'
  | 'twitter'
  | 'user'
  | 'youtube';

export interface Props extends IconProps {
  name?: IconName;
}

export default function Icon({
  name = 'alert',
  size = 15,
  color,
}: Props): ReactElement<SVGElement> {
  switch (name) {
    default:
    case 'alert':
      return <Alert size={size} color={color} />;

    case 'bell':
      return <Bell size={size} color={color} />;

    case 'calendar':
      return <Calendar size={size} color={color} />;

    case 'camera':
      return <Camera size={size} color={color} />;

    case 'cart':
      return <Cart size={size} color={color} />;

    case 'check':
      return <Check size={size} color={color} />;

    case 'chevron':
      return <Chevron size={size} color={color} />;

    case 'facebook':
      return <Facebook size={size} color={color} />;

    case 'friday':
      return <Friday size={size} color={color} />;

    case 'instagram':
      return <Instagram size={size} color={color} />;

    case 'lightning':
      return <Lightning size={size} color={color} />;

    case 'linkedin':
      return <Linkedin size={size} color={color} />;

    case 'money':
      return <Money size={size} color={color} />;

    case 'rocket':
      return <Rocket size={size} color={color} />;

    case 'search':
      return <Search size={size} color={color} />;

    case 'shirt':
      return <Shirt size={size} color={color} />;

    case 'trophy':
      return <Trophy size={size} color={color} />;

    case 'twitter':
      return <Twitter size={size} color={color} />;

    case 'user':
      return <User size={size} color={color} />;

    case 'youtube':
      return <Youtube size={size} color={color} />;
  }
}
