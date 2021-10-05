import { ReactElement } from 'react';
import IconProps from '../icons/props';
import FeatherIcons from 'react-feather';
import Friday from '../icons/friday';
import Money from '../icons/money';
import Rocket from '../icons/rocket';
import Shirt from '../icons/shirt';
import Trophy from '../icons/trophy';

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
  | 'money'
  | 'rocket'
  | 'shirt'
  | 'trophy';

export interface Props extends IconProps {
  name?: IconName;
}

export default function Icon({
  name = 'activity',
  size = 15,
  width = 2,
}: Props): ReactElement<SVGElement> {
  switch (name) {
    default:
    case 'activity':
      return <FeatherIcons.Activity size={size} width={width} />;
    case 'airplay':
      return <FeatherIcons.Airplay size={size} width={width} />;
    case 'alert-circle':
      return <FeatherIcons.AlertCircle size={size} width={width} />;
    case 'alert-octagon':
      return <FeatherIcons.AlertOctagon size={size} width={width} />;
    case 'alert-triangle':
      return <FeatherIcons.AlertTriangle size={size} width={width} />;
    case 'align-center':
      return <FeatherIcons.AlignCenter size={size} width={width} />;
    case 'align-justify':
      return <FeatherIcons.AlignJustify size={size} width={width} />;
    case 'align-left':
      return <FeatherIcons.AlignLeft size={size} width={width} />;
    case 'align-right':
      return <FeatherIcons.AlignRight size={size} width={width} />;
    case 'anchor':
      return <FeatherIcons.Anchor size={size} width={width} />;
    case 'aperture':
      return <FeatherIcons.Aperture size={size} width={width} />;
    case 'archive':
      return <FeatherIcons.Archive size={size} width={width} />;
    case 'arrow-down':
      return <FeatherIcons.ArrowDown size={size} width={width} />;
    case 'arrow-down-circle':
      return <FeatherIcons.ArrowDownCircle size={size} width={width} />;
    case 'arrow-down-left':
      return <FeatherIcons.ArrowDownLeft size={size} width={width} />;
    case 'arrow-down-right':
      return <FeatherIcons.ArrowDownRight size={size} width={width} />;
    case 'arrow-left':
      return <FeatherIcons.ArrowLeft size={size} width={width} />;
    case 'arrow-left-circle':
      return <FeatherIcons.ArrowLeftCircle size={size} width={width} />;
    case 'arrow-right':
      return <FeatherIcons.ArrowRight size={size} width={width} />;
    case 'arrow-right-circle':
      return <FeatherIcons.ArrowRightCircle size={size} width={width} />;
    case 'arrow-up':
      return <FeatherIcons.ArrowUp size={size} width={width} />;
    case 'arrow-up-circle':
      return <FeatherIcons.ArrowUpCircle size={size} width={width} />;
    case 'arrow-up-left':
      return <FeatherIcons.ArrowUpLeft size={size} width={width} />;
    case 'arrow-up-right':
      return <FeatherIcons.ArrowUpRight size={size} width={width} />;
    case 'at-sign':
      return <FeatherIcons.AtSign size={size} width={width} />;
    case 'award':
      return <FeatherIcons.Award size={size} width={width} />;
    case 'bar-chart':
      return <FeatherIcons.BarChart size={size} width={width} />;
    case 'bar-chart-2':
      return <FeatherIcons.BarChart2 size={size} width={width} />;
    case 'battery':
      return <FeatherIcons.Battery size={size} width={width} />;
    case 'battery-charging':
      return <FeatherIcons.BatteryCharging size={size} width={width} />;
    case 'bell':
      return <FeatherIcons.Bell size={size} width={width} />;
    case 'bell-off':
      return <FeatherIcons.BellOff size={size} width={width} />;
    case 'bluetooth':
      return <FeatherIcons.Bluetooth size={size} width={width} />;
    case 'bold':
      return <FeatherIcons.Bold size={size} width={width} />;
    case 'book':
      return <FeatherIcons.Book size={size} width={width} />;
    case 'book-open':
      return <FeatherIcons.BookOpen size={size} width={width} />;
    case 'bookmark':
      return <FeatherIcons.Bookmark size={size} width={width} />;
    case 'box':
      return <FeatherIcons.Box size={size} width={width} />;
    case 'briefcase':
      return <FeatherIcons.Briefcase size={size} width={width} />;
    case 'calendar':
      return <FeatherIcons.Calendar size={size} width={width} />;
    case 'camera':
      return <FeatherIcons.Camera size={size} width={width} />;
    case 'camera-off':
      return <FeatherIcons.CameraOff size={size} width={width} />;
    case 'cast':
      return <FeatherIcons.Cast size={size} width={width} />;
    case 'check':
      return <FeatherIcons.Check size={size} width={width} />;
    case 'check-circle':
      return <FeatherIcons.CheckCircle size={size} width={width} />;
    case 'check-square':
      return <FeatherIcons.CheckSquare size={size} width={width} />;
    case 'chevron-down':
      return <FeatherIcons.ChevronDown size={size} width={width} />;
    case 'chevron-left':
      return <FeatherIcons.ChevronLeft size={size} width={width} />;
    case 'chevron-right':
      return <FeatherIcons.ChevronRight size={size} width={width} />;
    case 'chevron-up':
      return <FeatherIcons.ChevronUp size={size} width={width} />;
    case 'chevrons-down':
      return <FeatherIcons.ChevronsDown size={size} width={width} />;
    case 'chevrons-left':
      return <FeatherIcons.ChevronsLeft size={size} width={width} />;
    case 'chevrons-right':
      return <FeatherIcons.ChevronsRight size={size} width={width} />;
    case 'chevrons-up':
      return <FeatherIcons.ChevronsUp size={size} width={width} />;
    case 'chrome':
      return <FeatherIcons.Chrome size={size} width={width} />;
    case 'circle':
      return <FeatherIcons.Circle size={size} width={width} />;
    case 'clipboard':
      return <FeatherIcons.Clipboard size={size} width={width} />;
    case 'clock':
      return <FeatherIcons.Clock size={size} width={width} />;
    case 'cloud':
      return <FeatherIcons.Cloud size={size} width={width} />;
    case 'cloud-drizzle':
      return <FeatherIcons.CloudDrizzle size={size} width={width} />;
    case 'cloud-lightning':
      return <FeatherIcons.CloudLightning size={size} width={width} />;
    case 'cloud-off':
      return <FeatherIcons.CloudOff size={size} width={width} />;
    case 'cloud-rain':
      return <FeatherIcons.CloudRain size={size} width={width} />;
    case 'cloud-snow':
      return <FeatherIcons.CloudSnow size={size} width={width} />;
    case 'code':
      return <FeatherIcons.Code size={size} width={width} />;
    case 'codepen':
      return <FeatherIcons.Codepen size={size} width={width} />;
    case 'codesandbox':
      return <FeatherIcons.Codesandbox size={size} width={width} />;
    case 'coffee':
      return <FeatherIcons.Coffee size={size} width={width} />;
    case 'columns':
      return <FeatherIcons.Columns size={size} width={width} />;
    case 'command':
      return <FeatherIcons.Command size={size} width={width} />;
    case 'compass':
      return <FeatherIcons.Compass size={size} width={width} />;
    case 'copy':
      return <FeatherIcons.Copy size={size} width={width} />;
    case 'corner-down-left':
      return <FeatherIcons.CornerDownLeft size={size} width={width} />;
    case 'corner-down-right':
      return <FeatherIcons.CornerDownRight size={size} width={width} />;
    case 'corner-left-down':
      return <FeatherIcons.CornerLeftDown size={size} width={width} />;
    case 'corner-left-up':
      return <FeatherIcons.CornerLeftUp size={size} width={width} />;
    case 'corner-right-down':
      return <FeatherIcons.CornerRightDown size={size} width={width} />;
    case 'corner-right-up':
      return <FeatherIcons.CornerRightUp size={size} width={width} />;
    case 'corner-up-left':
      return <FeatherIcons.CornerUpLeft size={size} width={width} />;
    case 'corner-up-right':
      return <FeatherIcons.CornerUpRight size={size} width={width} />;
    case 'cpu':
      return <FeatherIcons.Cpu size={size} width={width} />;
    case 'credit-card':
      return <FeatherIcons.CreditCard size={size} width={width} />;
    case 'crop':
      return <FeatherIcons.Crop size={size} width={width} />;
    case 'crosshair':
      return <FeatherIcons.Crosshair size={size} width={width} />;
    case 'database':
      return <FeatherIcons.Database size={size} width={width} />;
    case 'delete':
      return <FeatherIcons.Delete size={size} width={width} />;
    case 'disc':
      return <FeatherIcons.Disc size={size} width={width} />;
    case 'divide':
      return <FeatherIcons.Divide size={size} width={width} />;
    case 'divide-circle':
      return <FeatherIcons.DivideCircle size={size} width={width} />;
    case 'divide-square':
      return <FeatherIcons.DivideSquare size={size} width={width} />;
    case 'dollar-sign':
      return <FeatherIcons.DollarSign size={size} width={width} />;
    case 'download':
      return <FeatherIcons.Download size={size} width={width} />;
    case 'download-cloud':
      return <FeatherIcons.DownloadCloud size={size} width={width} />;
    case 'dribbble':
      return <FeatherIcons.Dribbble size={size} width={width} />;
    case 'droplet':
      return <FeatherIcons.Droplet size={size} width={width} />;
    case 'edit':
      return <FeatherIcons.Edit size={size} width={width} />;
    case 'edit-2':
      return <FeatherIcons.Edit2 size={size} width={width} />;
    case 'edit-3':
      return <FeatherIcons.Edit3 size={size} width={width} />;
    case 'external-link':
      return <FeatherIcons.ExternalLink size={size} width={width} />;
    case 'eye':
      return <FeatherIcons.Eye size={size} width={width} />;
    case 'eye-off':
      return <FeatherIcons.EyeOff size={size} width={width} />;
    case 'facebook':
      return <FeatherIcons.Facebook size={size} width={width} />;
    case 'fast-forward':
      return <FeatherIcons.FastForward size={size} width={width} />;
    case 'feather':
      return <FeatherIcons.Feather size={size} width={width} />;
    case 'figma':
      return <FeatherIcons.Figma size={size} width={width} />;
    case 'file':
      return <FeatherIcons.File size={size} width={width} />;
    case 'file-minus':
      return <FeatherIcons.FileMinus size={size} width={width} />;
    case 'file-plus':
      return <FeatherIcons.FilePlus size={size} width={width} />;
    case 'file-text':
      return <FeatherIcons.FileText size={size} width={width} />;
    case 'film':
      return <FeatherIcons.Film size={size} width={width} />;
    case 'filter':
      return <FeatherIcons.Filter size={size} width={width} />;
    case 'flag':
      return <FeatherIcons.Flag size={size} width={width} />;
    case 'folder':
      return <FeatherIcons.Folder size={size} width={width} />;
    case 'folder-minus':
      return <FeatherIcons.FolderMinus size={size} width={width} />;
    case 'folder-plus':
      return <FeatherIcons.FolderPlus size={size} width={width} />;
    case 'framer':
      return <FeatherIcons.Framer size={size} width={width} />;
    case 'frown':
      return <FeatherIcons.Frown size={size} width={width} />;
    case 'gift':
      return <FeatherIcons.Gift size={size} width={width} />;
    case 'git-branch':
      return <FeatherIcons.GitBranch size={size} width={width} />;
    case 'git-commit':
      return <FeatherIcons.GitCommit size={size} width={width} />;
    case 'git-merge':
      return <FeatherIcons.GitMerge size={size} width={width} />;
    case 'git-pull-request':
      return <FeatherIcons.GitPullRequest size={size} width={width} />;
    case 'github':
      return <FeatherIcons.GitHub size={size} width={width} />;
    case 'gitlab':
      return <FeatherIcons.Gitlab size={size} width={width} />;
    case 'globe':
      return <FeatherIcons.Globe size={size} width={width} />;
    case 'grid':
      return <FeatherIcons.Grid size={size} width={width} />;
    case 'hard-drive':
      return <FeatherIcons.HardDrive size={size} width={width} />;
    case 'hash':
      return <FeatherIcons.Hash size={size} width={width} />;
    case 'headphones':
      return <FeatherIcons.Headphones size={size} width={width} />;
    case 'heart':
      return <FeatherIcons.Heart size={size} width={width} />;
    case 'help-circle':
      return <FeatherIcons.HelpCircle size={size} width={width} />;
    case 'hexagon':
      return <FeatherIcons.Hexagon size={size} width={width} />;
    case 'home':
      return <FeatherIcons.Home size={size} width={width} />;
    case 'image':
      return <FeatherIcons.Image size={size} width={width} />;
    case 'inbox':
      return <FeatherIcons.Inbox size={size} width={width} />;
    case 'info':
      return <FeatherIcons.Info size={size} width={width} />;
    case 'instagram':
      return <FeatherIcons.Instagram size={size} width={width} />;
    case 'italic':
      return <FeatherIcons.Italic size={size} width={width} />;
    case 'key':
      return <FeatherIcons.Key size={size} width={width} />;
    case 'layers':
      return <FeatherIcons.Layers size={size} width={width} />;
    case 'layout':
      return <FeatherIcons.Layout size={size} width={width} />;
    case 'life-buoy':
      return <FeatherIcons.LifeBuoy size={size} width={width} />;
    case 'link':
      return <FeatherIcons.Link size={size} width={width} />;
    case 'link-2':
      return <FeatherIcons.Link2 size={size} width={width} />;
    case 'linkedin':
      return <FeatherIcons.Linkedin size={size} width={width} />;
    case 'list':
      return <FeatherIcons.List size={size} width={width} />;
    case 'loader':
      return <FeatherIcons.Loader size={size} width={width} />;
    case 'lock':
      return <FeatherIcons.Lock size={size} width={width} />;
    case 'log-in':
      return <FeatherIcons.LogIn size={size} width={width} />;
    case 'log-out':
      return <FeatherIcons.LogOut size={size} width={width} />;
    case 'mail':
      return <FeatherIcons.Mail size={size} width={width} />;
    case 'map':
      return <FeatherIcons.Map size={size} width={width} />;
    case 'map-pin':
      return <FeatherIcons.MapPin size={size} width={width} />;
    case 'maximize':
      return <FeatherIcons.Maximize size={size} width={width} />;
    case 'maximize-2':
      return <FeatherIcons.Maximize2 size={size} width={width} />;
    case 'meh':
      return <FeatherIcons.Meh size={size} width={width} />;
    case 'menu':
      return <FeatherIcons.Menu size={size} width={width} />;
    case 'message-circle':
      return <FeatherIcons.MessageCircle size={size} width={width} />;
    case 'message-square':
      return <FeatherIcons.MessageSquare size={size} width={width} />;
    case 'mic':
      return <FeatherIcons.Mic size={size} width={width} />;
    case 'mic-off':
      return <FeatherIcons.MicOff size={size} width={width} />;
    case 'minimize':
      return <FeatherIcons.Minimize size={size} width={width} />;
    case 'minimize-2':
      return <FeatherIcons.Minimize2 size={size} width={width} />;
    case 'minus':
      return <FeatherIcons.Minus size={size} width={width} />;
    case 'minus-circle':
      return <FeatherIcons.MinusCircle size={size} width={width} />;
    case 'minus-square':
      return <FeatherIcons.MinusSquare size={size} width={width} />;
    case 'monitor':
      return <FeatherIcons.Monitor size={size} width={width} />;
    case 'moon':
      return <FeatherIcons.Moon size={size} width={width} />;
    case 'more-horizontal':
      return <FeatherIcons.MoreHorizontal size={size} width={width} />;
    case 'more-vertical':
      return <FeatherIcons.MoreVertical size={size} width={width} />;
    case 'mouse-pointer':
      return <FeatherIcons.MousePointer size={size} width={width} />;
    case 'move':
      return <FeatherIcons.Move size={size} width={width} />;
    case 'music':
      return <FeatherIcons.Music size={size} width={width} />;
    case 'navigation':
      return <FeatherIcons.Navigation size={size} width={width} />;
    case 'navigation-2':
      return <FeatherIcons.Navigation2 size={size} width={width} />;
    case 'octagon':
      return <FeatherIcons.Octagon size={size} width={width} />;
    case 'package':
      return <FeatherIcons.Package size={size} width={width} />;
    case 'paperclip':
      return <FeatherIcons.Paperclip size={size} width={width} />;
    case 'pause':
      return <FeatherIcons.Pause size={size} width={width} />;
    case 'pause-circle':
      return <FeatherIcons.PauseCircle size={size} width={width} />;
    case 'pen-tool':
      return <FeatherIcons.PenTool size={size} width={width} />;
    case 'percent':
      return <FeatherIcons.Percent size={size} width={width} />;
    case 'phone':
      return <FeatherIcons.Phone size={size} width={width} />;
    case 'phone-call':
      return <FeatherIcons.PhoneCall size={size} width={width} />;
    case 'phone-forwarded':
      return <FeatherIcons.PhoneForwarded size={size} width={width} />;
    case 'phone-incoming':
      return <FeatherIcons.PhoneIncoming size={size} width={width} />;
    case 'phone-missed':
      return <FeatherIcons.PhoneMissed size={size} width={width} />;
    case 'phone-off':
      return <FeatherIcons.PhoneOff size={size} width={width} />;
    case 'phone-outgoing':
      return <FeatherIcons.PhoneOutgoing size={size} width={width} />;
    case 'pie-chart':
      return <FeatherIcons.PieChart size={size} width={width} />;
    case 'play':
      return <FeatherIcons.Play size={size} width={width} />;
    case 'play-circle':
      return <FeatherIcons.PlayCircle size={size} width={width} />;
    case 'plus':
      return <FeatherIcons.Plus size={size} width={width} />;
    case 'plus-circle':
      return <FeatherIcons.PlusCircle size={size} width={width} />;
    case 'plus-square':
      return <FeatherIcons.PlusSquare size={size} width={width} />;
    case 'pocket':
      return <FeatherIcons.Pocket size={size} width={width} />;
    case 'power':
      return <FeatherIcons.Power size={size} width={width} />;
    case 'printer':
      return <FeatherIcons.Printer size={size} width={width} />;
    case 'radio':
      return <FeatherIcons.Radio size={size} width={width} />;
    case 'refresh-ccw':
      return <FeatherIcons.RefreshCcw size={size} width={width} />;
    case 'refresh-cw':
      return <FeatherIcons.RefreshCw size={size} width={width} />;
    case 'repeat':
      return <FeatherIcons.Repeat size={size} width={width} />;
    case 'rewind':
      return <FeatherIcons.Rewind size={size} width={width} />;
    case 'rotate-ccw':
      return <FeatherIcons.RotateCcw size={size} width={width} />;
    case 'rotate-cw':
      return <FeatherIcons.RotateCw size={size} width={width} />;
    case 'rss':
      return <FeatherIcons.Rss size={size} width={width} />;
    case 'save':
      return <FeatherIcons.Save size={size} width={width} />;
    case 'scissors':
      return <FeatherIcons.Scissors size={size} width={width} />;
    case 'search':
      return <FeatherIcons.Search size={size} width={width} />;
    case 'send':
      return <FeatherIcons.Send size={size} width={width} />;
    case 'server':
      return <FeatherIcons.Server size={size} width={width} />;
    case 'settings':
      return <FeatherIcons.Settings size={size} width={width} />;
    case 'share':
      return <FeatherIcons.Share size={size} width={width} />;
    case 'share-2':
      return <FeatherIcons.Share2 size={size} width={width} />;
    case 'shield':
      return <FeatherIcons.Shield size={size} width={width} />;
    case 'shield-off':
      return <FeatherIcons.ShieldOff size={size} width={width} />;
    case 'shopping-bag':
      return <FeatherIcons.ShoppingBag size={size} width={width} />;
    case 'shopping-cart':
      return <FeatherIcons.ShoppingCart size={size} width={width} />;
    case 'shuffle':
      return <FeatherIcons.Shuffle size={size} width={width} />;
    case 'sidebar':
      return <FeatherIcons.Sidebar size={size} width={width} />;
    case 'skip-back':
      return <FeatherIcons.SkipBack size={size} width={width} />;
    case 'skip-forward':
      return <FeatherIcons.SkipForward size={size} width={width} />;
    case 'slack':
      return <FeatherIcons.Slack size={size} width={width} />;
    case 'slash':
      return <FeatherIcons.Slash size={size} width={width} />;
    case 'sliders':
      return <FeatherIcons.Sliders size={size} width={width} />;
    case 'smartphone':
      return <FeatherIcons.Smartphone size={size} width={width} />;
    case 'smile':
      return <FeatherIcons.Smile size={size} width={width} />;
    case 'speaker':
      return <FeatherIcons.Speaker size={size} width={width} />;
    case 'square':
      return <FeatherIcons.Square size={size} width={width} />;
    case 'star':
      return <FeatherIcons.Star size={size} width={width} />;
    case 'stop-circle':
      return <FeatherIcons.StopCircle size={size} width={width} />;
    case 'sun':
      return <FeatherIcons.Sun size={size} width={width} />;
    case 'sunrise':
      return <FeatherIcons.Sunrise size={size} width={width} />;
    case 'sunset':
      return <FeatherIcons.Sunset size={size} width={width} />;
    case 'tablet':
      return <FeatherIcons.Tablet size={size} width={width} />;
    case 'tag':
      return <FeatherIcons.Tag size={size} width={width} />;
    case 'target':
      return <FeatherIcons.Target size={size} width={width} />;
    case 'terminal':
      return <FeatherIcons.Terminal size={size} width={width} />;
    case 'thermometer':
      return <FeatherIcons.Thermometer size={size} width={width} />;
    case 'thumbs-down':
      return <FeatherIcons.ThumbsDown size={size} width={width} />;
    case 'thumbs-up':
      return <FeatherIcons.ThumbsUp size={size} width={width} />;
    case 'toggle-left':
      return <FeatherIcons.ToggleLeft size={size} width={width} />;
    case 'toggle-right':
      return <FeatherIcons.ToggleRight size={size} width={width} />;
    case 'tool':
      return <FeatherIcons.Tool size={size} width={width} />;
    case 'trash':
      return <FeatherIcons.Trash size={size} width={width} />;
    case 'trash-2':
      return <FeatherIcons.Trash2 size={size} width={width} />;
    case 'trello':
      return <FeatherIcons.Trello size={size} width={width} />;
    case 'trending-down':
      return <FeatherIcons.TrendingDown size={size} width={width} />;
    case 'trending-up':
      return <FeatherIcons.TrendingUp size={size} width={width} />;
    case 'triangle':
      return <FeatherIcons.Triangle size={size} width={width} />;
    case 'truck':
      return <FeatherIcons.Truck size={size} width={width} />;
    case 'tv':
      return <FeatherIcons.Tv size={size} width={width} />;
    case 'twitch':
      return <FeatherIcons.Twitch size={size} width={width} />;
    case 'twitter':
      return <FeatherIcons.Twitter size={size} width={width} />;
    case 'type':
      return <FeatherIcons.Type size={size} width={width} />;
    case 'umbrella':
      return <FeatherIcons.Umbrella size={size} width={width} />;
    case 'underline':
      return <FeatherIcons.Underline size={size} width={width} />;
    case 'unlock':
      return <FeatherIcons.Unlock size={size} width={width} />;
    case 'upload':
      return <FeatherIcons.Upload size={size} width={width} />;
    case 'upload-cloud':
      return <FeatherIcons.UploadCloud size={size} width={width} />;
    case 'user':
      return <FeatherIcons.User size={size} width={width} />;
    case 'user-check':
      return <FeatherIcons.UserCheck size={size} width={width} />;
    case 'user-minus':
      return <FeatherIcons.UserMinus size={size} width={width} />;
    case 'user-plus':
      return <FeatherIcons.UserPlus size={size} width={width} />;
    case 'user-x':
      return <FeatherIcons.UserX size={size} width={width} />;
    case 'users':
      return <FeatherIcons.Users size={size} width={width} />;
    case 'video':
      return <FeatherIcons.Video size={size} width={width} />;
    case 'video-off':
      return <FeatherIcons.VideoOff size={size} width={width} />;
    case 'voicemail':
      return <FeatherIcons.Voicemail size={size} width={width} />;
    case 'volume':
      return <FeatherIcons.Volume size={size} width={width} />;
    case 'volume-1':
      return <FeatherIcons.Volume1 size={size} width={width} />;
    case 'volume-2':
      return <FeatherIcons.Volume2 size={size} width={width} />;
    case 'volume-x':
      return <FeatherIcons.VolumeX size={size} width={width} />;
    case 'watch':
      return <FeatherIcons.Watch size={size} width={width} />;
    case 'wifi':
      return <FeatherIcons.Wifi size={size} width={width} />;
    case 'wifi-off':
      return <FeatherIcons.WifiOff size={size} width={width} />;
    case 'wind':
      return <FeatherIcons.Wind size={size} width={width} />;
    case 'x':
      return <FeatherIcons.X size={size} width={width} />;
    case 'x-circle':
      return <FeatherIcons.XCircle size={size} width={width} />;
    case 'x-octagon':
      return <FeatherIcons.XOctagon size={size} width={width} />;
    case 'x-square':
      return <FeatherIcons.XSquare size={size} width={width} />;
    case 'youtube':
      return <FeatherIcons.Youtube size={size} width={width} />;
    case 'zap':
      return <FeatherIcons.Zap size={size} width={width} />;
    case 'zap-off':
      return <FeatherIcons.ZapOff size={size} width={width} />;
    case 'zoom-in':
      return <FeatherIcons.ZoomIn size={size} width={width} />;
    case 'zoom-out':
      return <FeatherIcons.ZoomOut size={size} width={width} />;
    case 'friday':
      return <Friday size={size} />;
    case 'money':
      return <Money size={size} />;
    case 'rocket':
      return <Rocket size={size} />;
    case 'shirt':
      return <Shirt size={size} />;
    case 'trophy':
      return <Trophy size={size} />;
  }
}
