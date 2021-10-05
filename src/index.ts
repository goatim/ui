import './index.scss';
import Image, { PlaceholderCategory } from './display/image';
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
import CreditCard from './fields/creditCard';
import DatePicker from './fields/datePicker';
import DateTimePicker from './fields/dateTimePicker';
import Input, { Adapter, Resolver } from './fields/input';
import Phone from './fields/phone';
import Radio from './fields/radio';
import Select from './fields/select';
import Switch from './fields/switch';
import Textarea from './fields/textarea';
import TimePicker from './fields/timePicker';
import { GeoLocation, serializeGeoLocation, parseGeoLocation } from './utils/geoLocation';
import {
  useGoogleMapsApi,
  useAutocompleteService,
  PredictionType,
  usePlacePredictions,
  usePlaceDetails,
  usePlaceDetailsGetter,
} from './utils/googleMaps';
import Place, { newPlace } from './utils/place';

/**
 * Display
 */

export { Image, PlaceholderCategory };

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
  CreditCard,
  DatePicker,
  DateTimePicker,
  Input,
  Phone,
  Radio,
  Select,
  Switch,
  Textarea,
  TimePicker,
};

export type { Adapter, Resolver };

/**
 * Utils
 */

export {
  serializeGeoLocation,
  parseGeoLocation,
  useGoogleMapsApi,
  useAutocompleteService,
  usePlacePredictions,
  usePlaceDetails,
  usePlaceDetailsGetter,
  newPlace,
  PredictionType,
};

export type { GeoLocation, Place };
