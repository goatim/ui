import './index.scss';
import Loader from './feedbacks/loader';
import { ModalContext, useModal, Modal } from './feedbacks/modal';
import Overlay from './feedbacks/overlay';
import Placeholder from './feedbacks/placeholder';
import Selection from './feedbacks/selection';
import Button from './general/button';
import Check from './general/check';
import Icon from './general/icon';
import ImageUpload from './uploads/image';
import CheckBox from './fields/checkbox';
import Counter from './fields/counter';
import CreditCardInput from './fields/creditCardInput';
import DatePicker from './fields/datePicker';
import DateTimePicker from './fields/dateTimePicker';
import Input, { Adapter, Resolver } from './fields/input';
import PhoneInput from './fields/phoneInput';
import Radio from './fields/radio';
import Select from './fields/select';
import Switch from './fields/switch';
import Textarea from './fields/textarea';
import TimePicker from './fields/timePicker';

/**
 * Feedback
 */

export { Loader, ModalContext, useModal, Overlay, Placeholder, Selection };

export type { Modal };

/**
 * General
 */

export { Button, Check, Icon };

/**
 * Uploads
 */

export { ImageUpload };

/**
 * Inputs
 */

export {
  CheckBox,
  Counter,
  CreditCardInput,
  DatePicker,
  DateTimePicker,
  Input,
  PhoneInput,
  Radio,
  Select,
  Switch,
  Textarea,
  TimePicker,
};

export type { Adapter, Resolver };
