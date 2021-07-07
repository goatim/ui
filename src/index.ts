import colors from './styles/_colors.scss';
import './index.scss';
import Image, { PlaceholderCategory } from './display/image';
import Loader from './feedbacks/loader';
import Modal, { ModalContext, useModal } from './feedbacks/modal';
import Overlay from './feedbacks/overlay';
import Placeholder from './feedbacks/placeholder';
import Selection from './feedbacks/selection';
import Button, { ButtonType } from './general/button';
import Check from './general/check';
import Icon, { IconName } from './general/icon';
import Logo from './general/logo';
import ImageUpload from './uploads/image';
import CheckBoxField from './fields/checkbox';
import CreditCardField from './fields/creditCard';
import DatePickerField from './fields/datePicker';
import DateTimePickerField from './fields/dateTimePicker';
import DayField, { TimeSlot, StandardTimeSlotObject } from './fields/day';
import InputField, { StyleType, InputType, AutoComplete, Adapter, Resolver } from './fields/input';
import PhoneField from './fields/phone';
import PlaceField from './fields/place';
import SelectField, { SelectType } from './fields/select';
import SwitchField from './fields/switch';
import TextareaField from './fields/textarea';
import TimePickerField from './fields/timePicker';
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

export { colors };

/**
 * Display
 */

export { Image, PlaceholderCategory };

/**
 * Feedback
 */

export { Loader, Modal, ModalContext, useModal, Overlay, Placeholder, Selection };

/**
 * General
 */

export { Button, ButtonType, Check, Icon, IconName, Logo };

/**
 * Uploads
 */

export { ImageUpload };

/**
 * Inputs
 */

export {
  CheckBoxField,
  CreditCardField,
  DatePickerField,
  DateTimePickerField,
  DayField,
  InputField,
  StyleType,
  InputType,
  AutoComplete,
  PhoneField,
  PlaceField,
  SelectField,
  SelectType,
  SwitchField,
  TextareaField,
  TimePickerField,
};

export type { TimeSlot, StandardTimeSlotObject, Adapter, Resolver };

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
