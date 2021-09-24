import './index.scss';
import Image, { PlaceholderCategory } from './display/image';
import Loader from './feedbacks/loader';
import Modal, { ModalContext, useModal } from './feedbacks/modal';
import Overlay from './feedbacks/overlay';
import Placeholder from './feedbacks/placeholder';
import Selection from './feedbacks/selection';
import Button from './general/button';
import Check from './general/check';
import Icon from './general/icon';
import ImageUpload from './uploads/image';
import CheckBoxField from './fields/checkbox';
import CreditCardField from './fields/creditCard';
import DatePickerField from './fields/datePicker';
import DateTimePickerField from './fields/dateTimePicker';
import DayField, { TimeSlot, StandardTimeSlotObject } from './fields/day';
import InputField, { InputType, AutoComplete, Adapter, Resolver } from './fields/input';
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

export { Button, Check, Icon };

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
