import { ReactElement } from 'react';
import { FieldComponentProps } from '@cezembre/forms';
import InputField, { Adapter, AutoComplete, Resolver } from './input';

export interface PhoneValue {
  region_code: string;
  number: string;
}

const adapter: Adapter = (value: string | number): PhoneValue => {
  return {
    region_code: 'FR',
    number: typeof value === 'string' ? value : value.toString(),
  };
};

const resolver: Resolver = (phone: PhoneValue) => {
  return phone ? phone.number : '';
};

export interface Props extends FieldComponentProps<PhoneValue> {
  label?: string | null;
  placeholder?: string | null;
  instructions?: string | null;
}

export default function PhoneField({
  value,
  initialValue,
  error,
  warning,
  isActive,
  hasChanged,
  isValid,
  visited,
  submitted,
  onFocus,
  name,
  onChange,
  onBlur,
  form,
  label = null,
  placeholder = null,
  instructions = null,
}: Props): ReactElement {
  return (
    <div className="friday-ui-phone">
      <InputField
        name={name}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        form={form}
        autoComplete={AutoComplete.TEL}
        adapter={adapter}
        resolver={resolver}
        label={label}
        placeholder={placeholder}
        instructions={instructions}
        spellCheck={false}
        error={error}
        warning={warning}
        initialValue={initialValue}
        isActive={isActive}
        hasChanged={hasChanged}
        isValid={isValid}
        visited={visited}
        submitted={submitted}
      />
    </div>
  );
}
