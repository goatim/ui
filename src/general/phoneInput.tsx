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
            name="region_code"
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
                value: 'CH',
                element: '🇨🇭 CH',
              },
              {
                value: 'MC',
                element: '🇲🇨 MC',
              },
              {
                value: 'LU',
                element: '🇱🇺 LU',
              },
              {
                value: 'CA',
                element: '🇨🇦 CA',
              },
              {
                value: 'NL',
                element: '🇳🇱 NL',
              },
              {
                value: 'MA',
                element: '🇲🇦 MA',
              },
              {
                value: 'DZ',
                element: '🇩🇿',
              },
              {
                value: 'TN',
                element: '🇹🇳 TN',
              },
              {
                value: 'GB',
                element: '🇬🇧 GB',
              },
              {
                value: 'DE',
                element: '🇩🇪 DE',
              },
              {
                value: 'IT',
                element: '🇮🇹 IT',
              },
              {
                value: 'ES',
                element: '🇪🇸 ES',
              },
              {
                value: 'PT',
                element: '🇵🇹 PT',
              },
              {
                value: 'US',
                element: '🇺🇸 US',
              },
              {
                value: 'IE',
                element: '🇮🇪 IE',
              },
              {
                value: 'GP',
                element: '🇬🇵 GP',
              },
              {
                value: 'BJ',
                element: '🇧🇯 BJ',
              },
              {
                value: 'BF',
                element: '🇧🇫 BF',
              },
              {
                value: 'CD',
                element: '🇨🇩 CD',
              },
              {
                value: 'CG',
                element: '🇨🇬 CG',
              },
              {
                value: 'CI',
                element: '🇨🇮 CI',
              },
              {
                value: 'GA',
                element: '🇬🇦 GA',
              },
              {
                value: 'GN',
                element: '🇬🇳 GN',
              },
              {
                value: 'ML',
                element: '🇲🇱 ML',
              },
              {
                value: 'NE',
                element: '🇳🇪 NE',
              },
              {
                value: 'SN',
                element: '🇸🇳 SN',
              },
              {
                value: 'TG',
                element: '🇹🇬 TG',
              },
              {
                value: 'BI',
                element: '🇧🇮 BI',
              },
              {
                value: 'CM',
                element: '🇨🇲 CM',
              },
              {
                value: 'CF',
                element: '🇨🇫 CF',
              },
              {
                value: 'KM',
                element: '🇰🇲 KM',
              },
              {
                value: 'DJ',
                element: '🇩🇯 DJ',
              },
              {
                value: 'GQ',
                element: '🇬🇶 GQ',
              },
              {
                value: 'HT',
                element: '🇭🇹 HT',
              },
              {
                value: 'MG',
                element: '🇲🇬 MG',
              },
              {
                value: 'RW',
                element: '🇷🇼 RW',
              },
              {
                value: 'SC',
                element: '🇸🇨 SC',
              },
              {
                value: 'TD',
                element: '🇹🇩 TD',
              },
              {
                value: 'VU',
                element: '🇻🇺 VU',
              },
              {
                value: 'GG',
                element: '🇬🇬 GG',
              },
              {
                value: 'LB',
                element: '🇱🇧 LB',
              },
              {
                value: 'MU',
                element: '🇲🇺 MU',
              },
              {
                value: 'VA',
                element: '🇻🇦 VA',
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
