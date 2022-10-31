import { ReactElement } from 'react';
import * as FeatherIcons from 'react-feather';
import { Slash } from 'react-feather';
import IconProps from './icons/props';
import Friday from './icons/friday';
import Money from './icons/money';
import Rocket from './icons/rocket';
import Shirt from './icons/shirt';
import Trophy from './icons/trophy';
import FridayIcon from './icons/fridayIcon';
import Visa from './icons/visa';
import Mastercard from './icons/mastercard';
import SoccerBall from './icons/soccerBall';
import SoccerField from './icons/soccerField';
import Tiktok from './icons/tiktok';

export type IconName =
  | 'activity'
  | 'airplay'
  | 'alert-circle'
  | 'alert-octagon'
  | 'alert-triangle'
  | 'align-center'
  | 'align-justify'
  | 'align-left'
  | 'align-right'
  | 'anchor'
  | 'aperture'
  | 'archive'
  | 'arrow-down'
  | 'arrow-down-circle'
  | 'arrow-down-left'
  | 'arrow-down-right'
  | 'arrow-left'
  | 'arrow-left-circle'
  | 'arrow-right'
  | 'arrow-right-circle'
  | 'arrow-up'
  | 'arrow-up-circle'
  | 'arrow-up-left'
  | 'arrow-up-right'
  | 'at-sign'
  | 'award'
  | 'bar-chart'
  | 'bar-chart-2'
  | 'battery'
  | 'battery-charging'
  | 'bell'
  | 'bell-off'
  | 'bluetooth'
  | 'bold'
  | 'book'
  | 'book-open'
  | 'bookmark'
  | 'box'
  | 'briefcase'
  | 'calendar'
  | 'camera'
  | 'camera-off'
  | 'cast'
  | 'check'
  | 'check-circle'
  | 'check-square'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevrons-down'
  | 'chevrons-left'
  | 'chevrons-right'
  | 'chevrons-up'
  | 'chrome'
  | 'circle'
  | 'clipboard'
  | 'clock'
  | 'cloud'
  | 'cloud-drizzle'
  | 'cloud-lightning'
  | 'cloud-off'
  | 'cloud-rain'
  | 'cloud-snow'
  | 'code'
  | 'codepen'
  | 'codesandbox'
  | 'coffee'
  | 'columns'
  | 'command'
  | 'compass'
  | 'copy'
  | 'corner-down-left'
  | 'corner-down-right'
  | 'corner-left-down'
  | 'corner-left-up'
  | 'corner-right-down'
  | 'corner-right-up'
  | 'corner-up-left'
  | 'corner-up-right'
  | 'cpu'
  | 'credit-card'
  | 'crop'
  | 'crosshair'
  | 'database'
  | 'delete'
  | 'disc'
  | 'divide'
  | 'divide-circle'
  | 'divide-square'
  | 'dollar-sign'
  | 'download'
  | 'download-cloud'
  | 'dribbble'
  | 'droplet'
  | 'edit'
  | 'edit-2'
  | 'edit-3'
  | 'external-link'
  | 'eye'
  | 'eye-off'
  | 'facebook'
  | 'fast-forward'
  | 'feather'
  | 'figma'
  | 'file'
  | 'file-minus'
  | 'file-plus'
  | 'file-text'
  | 'film'
  | 'filter'
  | 'flag'
  | 'folder'
  | 'folder-minus'
  | 'folder-plus'
  | 'framer'
  | 'frown'
  | 'gift'
  | 'git-branch'
  | 'git-commit'
  | 'git-merge'
  | 'git-pull-request'
  | 'github'
  | 'gitlab'
  | 'globe'
  | 'grid'
  | 'hard-drive'
  | 'hash'
  | 'headphones'
  | 'heart'
  | 'help-circle'
  | 'hexagon'
  | 'home'
  | 'image'
  | 'inbox'
  | 'info'
  | 'instagram'
  | 'italic'
  | 'key'
  | 'layers'
  | 'layout'
  | 'life-buoy'
  | 'link'
  | 'link-2'
  | 'linkedin'
  | 'list'
  | 'loader'
  | 'lock'
  | 'log-in'
  | 'log-out'
  | 'mail'
  | 'map'
  | 'map-pin'
  | 'maximize'
  | 'maximize-2'
  | 'meh'
  | 'menu'
  | 'message-circle'
  | 'message-square'
  | 'mic'
  | 'mic-off'
  | 'minimize'
  | 'minimize-2'
  | 'minus'
  | 'minus-circle'
  | 'minus-square'
  | 'monitor'
  | 'moon'
  | 'more-horizontal'
  | 'more-vertical'
  | 'mouse-pointer'
  | 'move'
  | 'music'
  | 'navigation'
  | 'navigation-2'
  | 'octagon'
  | 'package'
  | 'paperclip'
  | 'pause'
  | 'pause-circle'
  | 'pen-tool'
  | 'percent'
  | 'phone'
  | 'phone-call'
  | 'phone-forwarded'
  | 'phone-incoming'
  | 'phone-missed'
  | 'phone-off'
  | 'phone-outgoing'
  | 'pie-chart'
  | 'play'
  | 'play-circle'
  | 'plus'
  | 'plus-circle'
  | 'plus-square'
  | 'pocket'
  | 'power'
  | 'printer'
  | 'radio'
  | 'refresh-ccw'
  | 'refresh-cw'
  | 'repeat'
  | 'rewind'
  | 'rotate-ccw'
  | 'rotate-cw'
  | 'rss'
  | 'save'
  | 'scissors'
  | 'search'
  | 'send'
  | 'server'
  | 'settings'
  | 'share'
  | 'share-2'
  | 'shield'
  | 'shield-off'
  | 'shopping-bag'
  | 'shopping-cart'
  | 'shuffle'
  | 'sidebar'
  | 'skip-back'
  | 'skip-forward'
  | 'slack'
  | 'slash'
  | 'sliders'
  | 'smartphone'
  | 'smile'
  | 'speaker'
  | 'square'
  | 'star'
  | 'stop-circle'
  | 'sun'
  | 'sunrise'
  | 'sunset'
  | 'tablet'
  | 'tag'
  | 'target'
  | 'terminal'
  | 'thermometer'
  | 'thumbs-down'
  | 'thumbs-up'
  | 'toggle-left'
  | 'toggle-right'
  | 'tool'
  | 'trash'
  | 'trash-2'
  | 'trello'
  | 'trending-down'
  | 'trending-up'
  | 'triangle'
  | 'truck'
  | 'tv'
  | 'twitch'
  | 'twitter'
  | 'type'
  | 'umbrella'
  | 'underline'
  | 'unlock'
  | 'upload'
  | 'upload-cloud'
  | 'user'
  | 'user-check'
  | 'user-minus'
  | 'user-plus'
  | 'user-x'
  | 'users'
  | 'video'
  | 'video-off'
  | 'voicemail'
  | 'volume'
  | 'volume-1'
  | 'volume-2'
  | 'volume-x'
  | 'watch'
  | 'wifi'
  | 'wifi-off'
  | 'wind'
  | 'x'
  | 'x-circle'
  | 'x-octagon'
  | 'x-square'
  | 'youtube'
  | 'zap'
  | 'zap-off'
  | 'zoom-in'
  | 'zoom-out'
  | 'friday'
  | 'friday-icon'
  | 'money'
  | 'rocket'
  | 'shirt'
  | 'trophy'
  | 'visa'
  | 'mastercard'
  | 'soccer-ball'
  | 'soccer-field'
  | 'tiktok';

export interface Props extends IconProps {
  color?: string;
  name?: IconName;
}

export default function Icon({
  color,
  name = 'activity',
  size = 15,
  strokeWidth = 2,
}: Props): ReactElement<SVGElement> {
  switch (name) {
    case 'activity':
      return <FeatherIcons.Activity size={size} strokeWidth={strokeWidth} color={color} />;
    case 'airplay':
      return <FeatherIcons.Airplay size={size} strokeWidth={strokeWidth} color={color} />;
    case 'alert-circle':
      return <FeatherIcons.AlertCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'alert-octagon':
      return <FeatherIcons.AlertOctagon size={size} strokeWidth={strokeWidth} color={color} />;
    case 'alert-triangle':
      return <FeatherIcons.AlertTriangle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'align-center':
      return <FeatherIcons.AlignCenter size={size} strokeWidth={strokeWidth} color={color} />;
    case 'align-justify':
      return <FeatherIcons.AlignJustify size={size} strokeWidth={strokeWidth} color={color} />;
    case 'align-left':
      return <FeatherIcons.AlignLeft size={size} strokeWidth={strokeWidth} color={color} />;
    case 'align-right':
      return <FeatherIcons.AlignRight size={size} strokeWidth={strokeWidth} color={color} />;
    case 'anchor':
      return <FeatherIcons.Anchor size={size} strokeWidth={strokeWidth} color={color} />;
    case 'aperture':
      return <FeatherIcons.Aperture size={size} strokeWidth={strokeWidth} color={color} />;
    case 'archive':
      return <FeatherIcons.Archive size={size} strokeWidth={strokeWidth} color={color} />;
    case 'arrow-down':
      return <FeatherIcons.ArrowDown size={size} strokeWidth={strokeWidth} color={color} />;
    case 'arrow-down-circle':
      return <FeatherIcons.ArrowDownCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'arrow-down-left':
      return <FeatherIcons.ArrowDownLeft size={size} strokeWidth={strokeWidth} color={color} />;
    case 'arrow-down-right':
      return <FeatherIcons.ArrowDownRight size={size} strokeWidth={strokeWidth} color={color} />;
    case 'arrow-left':
      return <FeatherIcons.ArrowLeft size={size} strokeWidth={strokeWidth} color={color} />;
    case 'arrow-left-circle':
      return <FeatherIcons.ArrowLeftCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'arrow-right':
      return <FeatherIcons.ArrowRight size={size} strokeWidth={strokeWidth} color={color} />;
    case 'arrow-right-circle':
      return <FeatherIcons.ArrowRightCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'arrow-up':
      return <FeatherIcons.ArrowUp size={size} strokeWidth={strokeWidth} color={color} />;
    case 'arrow-up-circle':
      return <FeatherIcons.ArrowUpCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'arrow-up-left':
      return <FeatherIcons.ArrowUpLeft size={size} strokeWidth={strokeWidth} color={color} />;
    case 'arrow-up-right':
      return <FeatherIcons.ArrowUpRight size={size} strokeWidth={strokeWidth} color={color} />;
    case 'at-sign':
      return <FeatherIcons.AtSign size={size} strokeWidth={strokeWidth} color={color} />;
    case 'award':
      return <FeatherIcons.Award size={size} strokeWidth={strokeWidth} color={color} />;
    case 'bar-chart':
      return <FeatherIcons.BarChart size={size} strokeWidth={strokeWidth} color={color} />;
    case 'bar-chart-2':
      return <FeatherIcons.BarChart2 size={size} strokeWidth={strokeWidth} color={color} />;
    case 'battery':
      return <FeatherIcons.Battery size={size} strokeWidth={strokeWidth} color={color} />;
    case 'battery-charging':
      return <FeatherIcons.BatteryCharging size={size} strokeWidth={strokeWidth} color={color} />;
    case 'bell':
      return <FeatherIcons.Bell size={size} strokeWidth={strokeWidth} color={color} />;
    case 'bell-off':
      return <FeatherIcons.BellOff size={size} strokeWidth={strokeWidth} color={color} />;
    case 'bluetooth':
      return <FeatherIcons.Bluetooth size={size} strokeWidth={strokeWidth} color={color} />;
    case 'bold':
      return <FeatherIcons.Bold size={size} strokeWidth={strokeWidth} color={color} />;
    case 'book':
      return <FeatherIcons.Book size={size} strokeWidth={strokeWidth} color={color} />;
    case 'book-open':
      return <FeatherIcons.BookOpen size={size} strokeWidth={strokeWidth} color={color} />;
    case 'bookmark':
      return <FeatherIcons.Bookmark size={size} strokeWidth={strokeWidth} color={color} />;
    case 'box':
      return <FeatherIcons.Box size={size} strokeWidth={strokeWidth} color={color} />;
    case 'briefcase':
      return <FeatherIcons.Briefcase size={size} strokeWidth={strokeWidth} color={color} />;
    case 'calendar':
      return <FeatherIcons.Calendar size={size} strokeWidth={strokeWidth} color={color} />;
    case 'camera':
      return <FeatherIcons.Camera size={size} strokeWidth={strokeWidth} color={color} />;
    case 'camera-off':
      return <FeatherIcons.CameraOff size={size} strokeWidth={strokeWidth} color={color} />;
    case 'cast':
      return <FeatherIcons.Cast size={size} strokeWidth={strokeWidth} color={color} />;
    case 'check':
      return <FeatherIcons.Check size={size} strokeWidth={strokeWidth} color={color} />;
    case 'check-circle':
      return <FeatherIcons.CheckCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'check-square':
      return <FeatherIcons.CheckSquare size={size} strokeWidth={strokeWidth} color={color} />;
    case 'chevron-down':
      return <FeatherIcons.ChevronDown size={size} strokeWidth={strokeWidth} color={color} />;
    case 'chevron-left':
      return <FeatherIcons.ChevronLeft size={size} strokeWidth={strokeWidth} color={color} />;
    case 'chevron-right':
      return <FeatherIcons.ChevronRight size={size} strokeWidth={strokeWidth} color={color} />;
    case 'chevron-up':
      return <FeatherIcons.ChevronUp size={size} strokeWidth={strokeWidth} color={color} />;
    case 'chevrons-down':
      return <FeatherIcons.ChevronsDown size={size} strokeWidth={strokeWidth} color={color} />;
    case 'chevrons-left':
      return <FeatherIcons.ChevronsLeft size={size} strokeWidth={strokeWidth} color={color} />;
    case 'chevrons-right':
      return <FeatherIcons.ChevronsRight size={size} strokeWidth={strokeWidth} color={color} />;
    case 'chevrons-up':
      return <FeatherIcons.ChevronsUp size={size} strokeWidth={strokeWidth} color={color} />;
    case 'chrome':
      return <FeatherIcons.Chrome size={size} strokeWidth={strokeWidth} color={color} />;
    case 'circle':
      return <FeatherIcons.Circle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'clipboard':
      return <FeatherIcons.Clipboard size={size} strokeWidth={strokeWidth} color={color} />;
    case 'clock':
      return <FeatherIcons.Clock size={size} strokeWidth={strokeWidth} color={color} />;
    case 'cloud':
      return <FeatherIcons.Cloud size={size} strokeWidth={strokeWidth} color={color} />;
    case 'cloud-drizzle':
      return <FeatherIcons.CloudDrizzle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'cloud-lightning':
      return <FeatherIcons.CloudLightning size={size} strokeWidth={strokeWidth} color={color} />;
    case 'cloud-off':
      return <FeatherIcons.CloudOff size={size} strokeWidth={strokeWidth} color={color} />;
    case 'cloud-rain':
      return <FeatherIcons.CloudRain size={size} strokeWidth={strokeWidth} color={color} />;
    case 'cloud-snow':
      return <FeatherIcons.CloudSnow size={size} strokeWidth={strokeWidth} color={color} />;
    case 'code':
      return <FeatherIcons.Code size={size} strokeWidth={strokeWidth} color={color} />;
    case 'codepen':
      return <FeatherIcons.Codepen size={size} strokeWidth={strokeWidth} color={color} />;
    case 'codesandbox':
      return <FeatherIcons.Codesandbox size={size} strokeWidth={strokeWidth} color={color} />;
    case 'coffee':
      return <FeatherIcons.Coffee size={size} strokeWidth={strokeWidth} color={color} />;
    case 'columns':
      return <FeatherIcons.Columns size={size} strokeWidth={strokeWidth} color={color} />;
    case 'command':
      return <FeatherIcons.Command size={size} strokeWidth={strokeWidth} color={color} />;
    case 'compass':
      return <FeatherIcons.Compass size={size} strokeWidth={strokeWidth} color={color} />;
    case 'copy':
      return <FeatherIcons.Copy size={size} strokeWidth={strokeWidth} color={color} />;
    case 'corner-down-left':
      return <FeatherIcons.CornerDownLeft size={size} strokeWidth={strokeWidth} color={color} />;
    case 'corner-down-right':
      return <FeatherIcons.CornerDownRight size={size} strokeWidth={strokeWidth} color={color} />;
    case 'corner-left-down':
      return <FeatherIcons.CornerLeftDown size={size} strokeWidth={strokeWidth} color={color} />;
    case 'corner-left-up':
      return <FeatherIcons.CornerLeftUp size={size} strokeWidth={strokeWidth} color={color} />;
    case 'corner-right-down':
      return <FeatherIcons.CornerRightDown size={size} strokeWidth={strokeWidth} color={color} />;
    case 'corner-right-up':
      return <FeatherIcons.CornerRightUp size={size} strokeWidth={strokeWidth} color={color} />;
    case 'corner-up-left':
      return <FeatherIcons.CornerUpLeft size={size} strokeWidth={strokeWidth} color={color} />;
    case 'corner-up-right':
      return <FeatherIcons.CornerUpRight size={size} strokeWidth={strokeWidth} color={color} />;
    case 'cpu':
      return <FeatherIcons.Cpu size={size} strokeWidth={strokeWidth} color={color} />;
    case 'credit-card':
      return <FeatherIcons.CreditCard size={size} strokeWidth={strokeWidth} color={color} />;
    case 'crop':
      return <FeatherIcons.Crop size={size} strokeWidth={strokeWidth} color={color} />;
    case 'crosshair':
      return <FeatherIcons.Crosshair size={size} strokeWidth={strokeWidth} color={color} />;
    case 'database':
      return <FeatherIcons.Database size={size} strokeWidth={strokeWidth} color={color} />;
    case 'delete':
      return <FeatherIcons.Delete size={size} strokeWidth={strokeWidth} color={color} />;
    case 'disc':
      return <FeatherIcons.Disc size={size} strokeWidth={strokeWidth} color={color} />;
    case 'divide':
      return <FeatherIcons.Divide size={size} strokeWidth={strokeWidth} color={color} />;
    case 'divide-circle':
      return <FeatherIcons.DivideCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'divide-square':
      return <FeatherIcons.DivideSquare size={size} strokeWidth={strokeWidth} color={color} />;
    case 'dollar-sign':
      return <FeatherIcons.DollarSign size={size} strokeWidth={strokeWidth} color={color} />;
    case 'download':
      return <FeatherIcons.Download size={size} strokeWidth={strokeWidth} color={color} />;
    case 'download-cloud':
      return <FeatherIcons.DownloadCloud size={size} strokeWidth={strokeWidth} color={color} />;
    case 'dribbble':
      return <FeatherIcons.Dribbble size={size} strokeWidth={strokeWidth} color={color} />;
    case 'droplet':
      return <FeatherIcons.Droplet size={size} strokeWidth={strokeWidth} color={color} />;
    case 'edit':
      return <FeatherIcons.Edit size={size} strokeWidth={strokeWidth} color={color} />;
    case 'edit-2':
      return <FeatherIcons.Edit2 size={size} strokeWidth={strokeWidth} color={color} />;
    case 'edit-3':
      return <FeatherIcons.Edit3 size={size} strokeWidth={strokeWidth} color={color} />;
    case 'external-link':
      return <FeatherIcons.ExternalLink size={size} strokeWidth={strokeWidth} color={color} />;
    case 'eye':
      return <FeatherIcons.Eye size={size} strokeWidth={strokeWidth} color={color} />;
    case 'eye-off':
      return <FeatherIcons.EyeOff size={size} strokeWidth={strokeWidth} color={color} />;
    case 'facebook':
      return <FeatherIcons.Facebook size={size} strokeWidth={strokeWidth} color={color} />;
    case 'fast-forward':
      return <FeatherIcons.FastForward size={size} strokeWidth={strokeWidth} color={color} />;
    case 'feather':
      return <FeatherIcons.Feather size={size} strokeWidth={strokeWidth} color={color} />;
    case 'figma':
      return <FeatherIcons.Figma size={size} strokeWidth={strokeWidth} color={color} />;
    case 'file':
      return <FeatherIcons.File size={size} strokeWidth={strokeWidth} color={color} />;
    case 'file-minus':
      return <FeatherIcons.FileMinus size={size} strokeWidth={strokeWidth} color={color} />;
    case 'file-plus':
      return <FeatherIcons.FilePlus size={size} strokeWidth={strokeWidth} color={color} />;
    case 'file-text':
      return <FeatherIcons.FileText size={size} strokeWidth={strokeWidth} color={color} />;
    case 'film':
      return <FeatherIcons.Film size={size} strokeWidth={strokeWidth} color={color} />;
    case 'filter':
      return <FeatherIcons.Filter size={size} strokeWidth={strokeWidth} color={color} />;
    case 'flag':
      return <FeatherIcons.Flag size={size} strokeWidth={strokeWidth} color={color} />;
    case 'folder':
      return <FeatherIcons.Folder size={size} strokeWidth={strokeWidth} color={color} />;
    case 'folder-minus':
      return <FeatherIcons.FolderMinus size={size} strokeWidth={strokeWidth} color={color} />;
    case 'folder-plus':
      return <FeatherIcons.FolderPlus size={size} strokeWidth={strokeWidth} color={color} />;
    case 'framer':
      return <FeatherIcons.Framer size={size} strokeWidth={strokeWidth} color={color} />;
    case 'frown':
      return <FeatherIcons.Frown size={size} strokeWidth={strokeWidth} color={color} />;
    case 'gift':
      return <FeatherIcons.Gift size={size} strokeWidth={strokeWidth} color={color} />;
    case 'git-branch':
      return <FeatherIcons.GitBranch size={size} strokeWidth={strokeWidth} color={color} />;
    case 'git-commit':
      return <FeatherIcons.GitCommit size={size} strokeWidth={strokeWidth} color={color} />;
    case 'git-merge':
      return <FeatherIcons.GitMerge size={size} strokeWidth={strokeWidth} color={color} />;
    case 'git-pull-request':
      return <FeatherIcons.GitPullRequest size={size} strokeWidth={strokeWidth} color={color} />;
    case 'github':
      return <FeatherIcons.GitHub size={size} strokeWidth={strokeWidth} color={color} />;
    case 'gitlab':
      return <FeatherIcons.Gitlab size={size} strokeWidth={strokeWidth} color={color} />;
    case 'globe':
      return <FeatherIcons.Globe size={size} strokeWidth={strokeWidth} color={color} />;
    case 'grid':
      return <FeatherIcons.Grid size={size} strokeWidth={strokeWidth} color={color} />;
    case 'hard-drive':
      return <FeatherIcons.HardDrive size={size} strokeWidth={strokeWidth} color={color} />;
    case 'hash':
      return <FeatherIcons.Hash size={size} strokeWidth={strokeWidth} color={color} />;
    case 'headphones':
      return <FeatherIcons.Headphones size={size} strokeWidth={strokeWidth} color={color} />;
    case 'heart':
      return <FeatherIcons.Heart size={size} strokeWidth={strokeWidth} color={color} />;
    case 'help-circle':
      return <FeatherIcons.HelpCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'hexagon':
      return <FeatherIcons.Hexagon size={size} strokeWidth={strokeWidth} color={color} />;
    case 'home':
      return <FeatherIcons.Home size={size} strokeWidth={strokeWidth} color={color} />;
    case 'image':
      return <FeatherIcons.Image size={size} strokeWidth={strokeWidth} color={color} />;
    case 'inbox':
      return <FeatherIcons.Inbox size={size} strokeWidth={strokeWidth} color={color} />;
    case 'info':
      return <FeatherIcons.Info size={size} strokeWidth={strokeWidth} color={color} />;
    case 'instagram':
      return <FeatherIcons.Instagram size={size} strokeWidth={strokeWidth} color={color} />;
    case 'italic':
      return <FeatherIcons.Italic size={size} strokeWidth={strokeWidth} color={color} />;
    case 'key':
      return <FeatherIcons.Key size={size} strokeWidth={strokeWidth} color={color} />;
    case 'layers':
      return <FeatherIcons.Layers size={size} strokeWidth={strokeWidth} color={color} />;
    case 'layout':
      return <FeatherIcons.Layout size={size} strokeWidth={strokeWidth} color={color} />;
    case 'life-buoy':
      return <FeatherIcons.LifeBuoy size={size} strokeWidth={strokeWidth} color={color} />;
    case 'link':
      return <FeatherIcons.Link size={size} strokeWidth={strokeWidth} color={color} />;
    case 'link-2':
      return <FeatherIcons.Link2 size={size} strokeWidth={strokeWidth} color={color} />;
    case 'linkedin':
      return <FeatherIcons.Linkedin size={size} strokeWidth={strokeWidth} color={color} />;
    case 'list':
      return <FeatherIcons.List size={size} strokeWidth={strokeWidth} color={color} />;
    case 'loader':
      return <FeatherIcons.Loader size={size} strokeWidth={strokeWidth} color={color} />;
    case 'lock':
      return <FeatherIcons.Lock size={size} strokeWidth={strokeWidth} color={color} />;
    case 'log-in':
      return <FeatherIcons.LogIn size={size} strokeWidth={strokeWidth} color={color} />;
    case 'log-out':
      return <FeatherIcons.LogOut size={size} strokeWidth={strokeWidth} color={color} />;
    case 'mail':
      return <FeatherIcons.Mail size={size} strokeWidth={strokeWidth} color={color} />;
    case 'map':
      return <FeatherIcons.Map size={size} strokeWidth={strokeWidth} color={color} />;
    case 'map-pin':
      return <FeatherIcons.MapPin size={size} strokeWidth={strokeWidth} color={color} />;
    case 'maximize':
      return <FeatherIcons.Maximize size={size} strokeWidth={strokeWidth} color={color} />;
    case 'maximize-2':
      return <FeatherIcons.Maximize2 size={size} strokeWidth={strokeWidth} color={color} />;
    case 'meh':
      return <FeatherIcons.Meh size={size} strokeWidth={strokeWidth} color={color} />;
    case 'menu':
      return <FeatherIcons.Menu size={size} strokeWidth={strokeWidth} color={color} />;
    case 'message-circle':
      return <FeatherIcons.MessageCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'message-square':
      return <FeatherIcons.MessageSquare size={size} strokeWidth={strokeWidth} color={color} />;
    case 'mic':
      return <FeatherIcons.Mic size={size} strokeWidth={strokeWidth} color={color} />;
    case 'mic-off':
      return <FeatherIcons.MicOff size={size} strokeWidth={strokeWidth} color={color} />;
    case 'minimize':
      return <FeatherIcons.Minimize size={size} strokeWidth={strokeWidth} color={color} />;
    case 'minimize-2':
      return <FeatherIcons.Minimize2 size={size} strokeWidth={strokeWidth} color={color} />;
    case 'minus':
      return <FeatherIcons.Minus size={size} strokeWidth={strokeWidth} color={color} />;
    case 'minus-circle':
      return <FeatherIcons.MinusCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'minus-square':
      return <FeatherIcons.MinusSquare size={size} strokeWidth={strokeWidth} color={color} />;
    case 'monitor':
      return <FeatherIcons.Monitor size={size} strokeWidth={strokeWidth} color={color} />;
    case 'moon':
      return <FeatherIcons.Moon size={size} strokeWidth={strokeWidth} color={color} />;
    case 'more-horizontal':
      return <FeatherIcons.MoreHorizontal size={size} strokeWidth={strokeWidth} color={color} />;
    case 'more-vertical':
      return <FeatherIcons.MoreVertical size={size} strokeWidth={strokeWidth} color={color} />;
    case 'mouse-pointer':
      return <FeatherIcons.MousePointer size={size} strokeWidth={strokeWidth} color={color} />;
    case 'move':
      return <FeatherIcons.Move size={size} strokeWidth={strokeWidth} color={color} />;
    case 'music':
      return <FeatherIcons.Music size={size} strokeWidth={strokeWidth} color={color} />;
    case 'navigation':
      return <FeatherIcons.Navigation size={size} strokeWidth={strokeWidth} color={color} />;
    case 'navigation-2':
      return <FeatherIcons.Navigation2 size={size} strokeWidth={strokeWidth} color={color} />;
    case 'octagon':
      return <FeatherIcons.Octagon size={size} strokeWidth={strokeWidth} color={color} />;
    case 'package':
      return <FeatherIcons.Package size={size} strokeWidth={strokeWidth} color={color} />;
    case 'paperclip':
      return <FeatherIcons.Paperclip size={size} strokeWidth={strokeWidth} color={color} />;
    case 'pause':
      return <FeatherIcons.Pause size={size} strokeWidth={strokeWidth} color={color} />;
    case 'pause-circle':
      return <FeatherIcons.PauseCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'pen-tool':
      return <FeatherIcons.PenTool size={size} strokeWidth={strokeWidth} color={color} />;
    case 'percent':
      return <FeatherIcons.Percent size={size} strokeWidth={strokeWidth} color={color} />;
    case 'phone':
      return <FeatherIcons.Phone size={size} strokeWidth={strokeWidth} color={color} />;
    case 'phone-call':
      return <FeatherIcons.PhoneCall size={size} strokeWidth={strokeWidth} color={color} />;
    case 'phone-forwarded':
      return <FeatherIcons.PhoneForwarded size={size} strokeWidth={strokeWidth} color={color} />;
    case 'phone-incoming':
      return <FeatherIcons.PhoneIncoming size={size} strokeWidth={strokeWidth} color={color} />;
    case 'phone-missed':
      return <FeatherIcons.PhoneMissed size={size} strokeWidth={strokeWidth} color={color} />;
    case 'phone-off':
      return <FeatherIcons.PhoneOff size={size} strokeWidth={strokeWidth} color={color} />;
    case 'phone-outgoing':
      return <FeatherIcons.PhoneOutgoing size={size} strokeWidth={strokeWidth} color={color} />;
    case 'pie-chart':
      return <FeatherIcons.PieChart size={size} strokeWidth={strokeWidth} color={color} />;
    case 'play':
      return <FeatherIcons.Play size={size} strokeWidth={strokeWidth} color={color} />;
    case 'play-circle':
      return <FeatherIcons.PlayCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'plus':
      return <FeatherIcons.Plus size={size} strokeWidth={strokeWidth} color={color} />;
    case 'plus-circle':
      return <FeatherIcons.PlusCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'plus-square':
      return <FeatherIcons.PlusSquare size={size} strokeWidth={strokeWidth} color={color} />;
    case 'pocket':
      return <FeatherIcons.Pocket size={size} strokeWidth={strokeWidth} color={color} />;
    case 'power':
      return <FeatherIcons.Power size={size} strokeWidth={strokeWidth} color={color} />;
    case 'printer':
      return <FeatherIcons.Printer size={size} strokeWidth={strokeWidth} color={color} />;
    case 'radio':
      return <FeatherIcons.Radio size={size} strokeWidth={strokeWidth} color={color} />;
    case 'refresh-ccw':
      return <FeatherIcons.RefreshCcw size={size} strokeWidth={strokeWidth} color={color} />;
    case 'refresh-cw':
      return <FeatherIcons.RefreshCw size={size} strokeWidth={strokeWidth} color={color} />;
    case 'repeat':
      return <FeatherIcons.Repeat size={size} strokeWidth={strokeWidth} color={color} />;
    case 'rewind':
      return <FeatherIcons.Rewind size={size} strokeWidth={strokeWidth} color={color} />;
    case 'rotate-ccw':
      return <FeatherIcons.RotateCcw size={size} strokeWidth={strokeWidth} color={color} />;
    case 'rotate-cw':
      return <FeatherIcons.RotateCw size={size} strokeWidth={strokeWidth} color={color} />;
    case 'rss':
      return <FeatherIcons.Rss size={size} strokeWidth={strokeWidth} color={color} />;
    case 'save':
      return <FeatherIcons.Save size={size} strokeWidth={strokeWidth} color={color} />;
    case 'scissors':
      return <FeatherIcons.Scissors size={size} strokeWidth={strokeWidth} color={color} />;
    case 'search':
      return <FeatherIcons.Search size={size} strokeWidth={strokeWidth} color={color} />;
    case 'send':
      return <FeatherIcons.Send size={size} strokeWidth={strokeWidth} color={color} />;
    case 'server':
      return <FeatherIcons.Server size={size} strokeWidth={strokeWidth} color={color} />;
    case 'settings':
      return <FeatherIcons.Settings size={size} strokeWidth={strokeWidth} color={color} />;
    case 'share':
      return <FeatherIcons.Share size={size} strokeWidth={strokeWidth} color={color} />;
    case 'share-2':
      return <FeatherIcons.Share2 size={size} strokeWidth={strokeWidth} color={color} />;
    case 'shield':
      return <FeatherIcons.Shield size={size} strokeWidth={strokeWidth} color={color} />;
    case 'shield-off':
      return <FeatherIcons.ShieldOff size={size} strokeWidth={strokeWidth} color={color} />;
    case 'shopping-bag':
      return <FeatherIcons.ShoppingBag size={size} strokeWidth={strokeWidth} color={color} />;
    case 'shopping-cart':
      return <FeatherIcons.ShoppingCart size={size} strokeWidth={strokeWidth} color={color} />;
    case 'shuffle':
      return <FeatherIcons.Shuffle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'sidebar':
      return <FeatherIcons.Sidebar size={size} strokeWidth={strokeWidth} color={color} />;
    case 'skip-back':
      return <FeatherIcons.SkipBack size={size} strokeWidth={strokeWidth} color={color} />;
    case 'skip-forward':
      return <FeatherIcons.SkipForward size={size} strokeWidth={strokeWidth} color={color} />;
    case 'slack':
      return <FeatherIcons.Slack size={size} strokeWidth={strokeWidth} color={color} />;
    case 'slash':
      return <FeatherIcons.Slash size={size} strokeWidth={strokeWidth} color={color} />;
    case 'sliders':
      return <FeatherIcons.Sliders size={size} strokeWidth={strokeWidth} color={color} />;
    case 'smartphone':
      return <FeatherIcons.Smartphone size={size} strokeWidth={strokeWidth} color={color} />;
    case 'smile':
      return <FeatherIcons.Smile size={size} strokeWidth={strokeWidth} color={color} />;
    case 'speaker':
      return <FeatherIcons.Speaker size={size} strokeWidth={strokeWidth} color={color} />;
    case 'square':
      return <FeatherIcons.Square size={size} strokeWidth={strokeWidth} color={color} />;
    case 'star':
      return <FeatherIcons.Star size={size} strokeWidth={strokeWidth} color={color} />;
    case 'stop-circle':
      return <FeatherIcons.StopCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'sun':
      return <FeatherIcons.Sun size={size} strokeWidth={strokeWidth} color={color} />;
    case 'sunrise':
      return <FeatherIcons.Sunrise size={size} strokeWidth={strokeWidth} color={color} />;
    case 'sunset':
      return <FeatherIcons.Sunset size={size} strokeWidth={strokeWidth} color={color} />;
    case 'tablet':
      return <FeatherIcons.Tablet size={size} strokeWidth={strokeWidth} color={color} />;
    case 'tag':
      return <FeatherIcons.Tag size={size} strokeWidth={strokeWidth} color={color} />;
    case 'target':
      return <FeatherIcons.Target size={size} strokeWidth={strokeWidth} color={color} />;
    case 'terminal':
      return <FeatherIcons.Terminal size={size} strokeWidth={strokeWidth} color={color} />;
    case 'thermometer':
      return <FeatherIcons.Thermometer size={size} strokeWidth={strokeWidth} color={color} />;
    case 'thumbs-down':
      return <FeatherIcons.ThumbsDown size={size} strokeWidth={strokeWidth} color={color} />;
    case 'thumbs-up':
      return <FeatherIcons.ThumbsUp size={size} strokeWidth={strokeWidth} color={color} />;
    case 'toggle-left':
      return <FeatherIcons.ToggleLeft size={size} strokeWidth={strokeWidth} color={color} />;
    case 'toggle-right':
      return <FeatherIcons.ToggleRight size={size} strokeWidth={strokeWidth} color={color} />;
    case 'tool':
      return <FeatherIcons.Tool size={size} strokeWidth={strokeWidth} color={color} />;
    case 'trash':
      return <FeatherIcons.Trash size={size} strokeWidth={strokeWidth} color={color} />;
    case 'trash-2':
      return <FeatherIcons.Trash2 size={size} strokeWidth={strokeWidth} color={color} />;
    case 'trello':
      return <FeatherIcons.Trello size={size} strokeWidth={strokeWidth} color={color} />;
    case 'trending-down':
      return <FeatherIcons.TrendingDown size={size} strokeWidth={strokeWidth} color={color} />;
    case 'trending-up':
      return <FeatherIcons.TrendingUp size={size} strokeWidth={strokeWidth} color={color} />;
    case 'triangle':
      return <FeatherIcons.Triangle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'truck':
      return <FeatherIcons.Truck size={size} strokeWidth={strokeWidth} color={color} />;
    case 'tv':
      return <FeatherIcons.Tv size={size} strokeWidth={strokeWidth} color={color} />;
    case 'twitch':
      return <FeatherIcons.Twitch size={size} strokeWidth={strokeWidth} color={color} />;
    case 'twitter':
      return <FeatherIcons.Twitter size={size} strokeWidth={strokeWidth} color={color} />;
    case 'type':
      return <FeatherIcons.Type size={size} strokeWidth={strokeWidth} color={color} />;
    case 'umbrella':
      return <FeatherIcons.Umbrella size={size} strokeWidth={strokeWidth} color={color} />;
    case 'underline':
      return <FeatherIcons.Underline size={size} strokeWidth={strokeWidth} color={color} />;
    case 'unlock':
      return <FeatherIcons.Unlock size={size} strokeWidth={strokeWidth} color={color} />;
    case 'upload':
      return <FeatherIcons.Upload size={size} strokeWidth={strokeWidth} color={color} />;
    case 'upload-cloud':
      return <FeatherIcons.UploadCloud size={size} strokeWidth={strokeWidth} color={color} />;
    case 'user':
      return <FeatherIcons.User size={size} strokeWidth={strokeWidth} color={color} />;
    case 'user-check':
      return <FeatherIcons.UserCheck size={size} strokeWidth={strokeWidth} color={color} />;
    case 'user-minus':
      return <FeatherIcons.UserMinus size={size} strokeWidth={strokeWidth} color={color} />;
    case 'user-plus':
      return <FeatherIcons.UserPlus size={size} strokeWidth={strokeWidth} color={color} />;
    case 'user-x':
      return <FeatherIcons.UserX size={size} strokeWidth={strokeWidth} color={color} />;
    case 'users':
      return <FeatherIcons.Users size={size} strokeWidth={strokeWidth} color={color} />;
    case 'video':
      return <FeatherIcons.Video size={size} strokeWidth={strokeWidth} color={color} />;
    case 'video-off':
      return <FeatherIcons.VideoOff size={size} strokeWidth={strokeWidth} color={color} />;
    case 'voicemail':
      return <FeatherIcons.Voicemail size={size} strokeWidth={strokeWidth} color={color} />;
    case 'volume':
      return <FeatherIcons.Volume size={size} strokeWidth={strokeWidth} color={color} />;
    case 'volume-1':
      return <FeatherIcons.Volume1 size={size} strokeWidth={strokeWidth} color={color} />;
    case 'volume-2':
      return <FeatherIcons.Volume2 size={size} strokeWidth={strokeWidth} color={color} />;
    case 'volume-x':
      return <FeatherIcons.VolumeX size={size} strokeWidth={strokeWidth} color={color} />;
    case 'watch':
      return <FeatherIcons.Watch size={size} strokeWidth={strokeWidth} color={color} />;
    case 'wifi':
      return <FeatherIcons.Wifi size={size} strokeWidth={strokeWidth} color={color} />;
    case 'wifi-off':
      return <FeatherIcons.WifiOff size={size} strokeWidth={strokeWidth} color={color} />;
    case 'wind':
      return <FeatherIcons.Wind size={size} strokeWidth={strokeWidth} color={color} />;
    case 'x':
      return <FeatherIcons.X size={size} strokeWidth={strokeWidth} color={color} />;
    case 'x-circle':
      return <FeatherIcons.XCircle size={size} strokeWidth={strokeWidth} color={color} />;
    case 'x-octagon':
      return <FeatherIcons.XOctagon size={size} strokeWidth={strokeWidth} color={color} />;
    case 'x-square':
      return <FeatherIcons.XSquare size={size} strokeWidth={strokeWidth} color={color} />;
    case 'youtube':
      return <FeatherIcons.Youtube size={size} strokeWidth={strokeWidth} color={color} />;
    case 'zap':
      return <FeatherIcons.Zap size={size} strokeWidth={strokeWidth} color={color} />;
    case 'zap-off':
      return <FeatherIcons.ZapOff size={size} strokeWidth={strokeWidth} color={color} />;
    case 'zoom-in':
      return <FeatherIcons.ZoomIn size={size} strokeWidth={strokeWidth} color={color} />;
    case 'zoom-out':
      return <FeatherIcons.ZoomOut size={size} strokeWidth={strokeWidth} color={color} />;
    case 'friday':
      return <Friday size={size} />;
    case 'friday-icon':
      return <FridayIcon size={size} />;
    case 'money':
      return <Money size={size} />;
    case 'rocket':
      return <Rocket size={size} />;
    case 'shirt':
      return <Shirt size={size} />;
    case 'trophy':
      return <Trophy size={size} />;
    case 'visa':
      return <Visa size={size} />;
    case 'mastercard':
      return <Mastercard size={size} />;
    case 'soccer-ball':
      return <SoccerBall size={size} />;
    case 'soccer-field':
      return <SoccerField size={size} />;
    case 'tiktok':
      return <Tiktok size={size} />;
    default:
      return <Slash size={size} />;
  }
}
