import { ReactElement } from 'react';
import { Field, FieldComponentProps, Form } from '@cezembre/forms';
import { Icon } from './icon';
import { Select } from './select';
import { Input } from './input';

export interface PhoneInputValue {
  region_code?: string;
  number?: string;
}

export interface PhoneInputProps extends FieldComponentProps<PhoneInputValue> {
  label?: string;
  instructions?: string;
}

export function PhoneInput({
  name,
  label,
  instructions,
  error,
  warning,
  onChange,
  value,
}: PhoneInputProps): ReactElement {
  // const onChangeRegionCode = useCallback(
  //   (regionCode?: FieldModifier<string | undefined>) => {
  //     onChange((oldValue) => ({
  //       ...oldValue,
  //       region_code: typeof regionCode === 'string' ? regionCode : undefined,
  //     }));
  //   },
  //   [onChange],
  // );
  //
  // const onChange = useCallback(
  //   (input: ChangeEvent<HTMLInputElement>) => {
  //     const { value: number } = input.target;
  //     onChange((oldValue) => ({ ...oldValue, number }));
  //   },
  //   [onChange],
  // );

  return (
    <div className="goatim-ui-phone-input">
      {label ? <label htmlFor={name}>{label}</label> : null}

      <Form className="body" onChange={onChange}>
        <div className="region-code-selector">
          <Field<string | undefined>
            name="region-code"
            component={Select}
            initialValue={value?.region_code}
            options={[
              {
                value: 'FR',
                element: '🇫🇷 FR',
              },
              {
                value: 'BE',
                element: '🇧🇪 BE',
              },
              {
                value: 'US',
                element: '🇺🇸 US',
              },
              {
                value: 'GB',
                element: '🇬🇧 GB',
              },
            ]}
          />
        </div>
        <div className="number">
          <Field name="number" component={Input} type="tel" initialValue={value?.number} />
        </div>
      </Form>

      {instructions ? <p className="instructions">{instructions}</p> : null}

      {error ? (
        <div className="error">
          <Icon name="alert-triangle" />
          <span>{error}</span>
        </div>
      ) : null}

      {warning ? (
        <div className="warning">
          <Icon name="alert-triangle" />
          <span>{warning}</span>
        </div>
      ) : null}
    </div>
  );
}
