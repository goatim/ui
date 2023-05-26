import { ReactElement } from 'react';
import { Field, FieldComponentProps, Form } from '@cezembre/forms';
import { Icon } from './icon';
import { Select, SelectProps } from './select';
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
          <Field<string, SelectProps<string>>
            name="region_code"
            component={Select<string>}
            initialValue={value?.region_code}
            options={[
              {
                value: 'FR',
                label: '🇫🇷 FR',
              },
              {
                value: 'BE',
                label: '🇧🇪 BE',
              },
              {
                value: 'CH',
                label: '🇨🇭 CH',
              },
              {
                value: 'MC',
                label: '🇲🇨 MC',
              },
              {
                value: 'LU',
                label: '🇱🇺 LU',
              },
              {
                value: 'CA',
                label: '🇨🇦 CA',
              },
              {
                value: 'NL',
                label: '🇳🇱 NL',
              },
              {
                value: 'MA',
                label: '🇲🇦 MA',
              },
              {
                value: 'DZ',
                label: '🇩🇿',
              },
              {
                value: 'TN',
                label: '🇹🇳 TN',
              },
              {
                value: 'GB',
                label: '🇬🇧 GB',
              },
              {
                value: 'DE',
                label: '🇩🇪 DE',
              },
              {
                value: 'IT',
                label: '🇮🇹 IT',
              },
              {
                value: 'ES',
                label: '🇪🇸 ES',
              },
              {
                value: 'PT',
                label: '🇵🇹 PT',
              },
              {
                value: 'US',
                label: '🇺🇸 US',
              },
              {
                value: 'IE',
                label: '🇮🇪 IE',
              },
              {
                value: 'GP',
                label: '🇬🇵 GP',
              },
              {
                value: 'BJ',
                label: '🇧🇯 BJ',
              },
              {
                value: 'BF',
                label: '🇧🇫 BF',
              },
              {
                value: 'CD',
                label: '🇨🇩 CD',
              },
              {
                value: 'CG',
                label: '🇨🇬 CG',
              },
              {
                value: 'CI',
                label: '🇨🇮 CI',
              },
              {
                value: 'GA',
                label: '🇬🇦 GA',
              },
              {
                value: 'GN',
                label: '🇬🇳 GN',
              },
              {
                value: 'ML',
                label: '🇲🇱 ML',
              },
              {
                value: 'NE',
                label: '🇳🇪 NE',
              },
              {
                value: 'SN',
                label: '🇸🇳 SN',
              },
              {
                value: 'TG',
                label: '🇹🇬 TG',
              },
              {
                value: 'BI',
                label: '🇧🇮 BI',
              },
              {
                value: 'CM',
                label: '🇨🇲 CM',
              },
              {
                value: 'CF',
                label: '🇨🇫 CF',
              },
              {
                value: 'KM',
                label: '🇰🇲 KM',
              },
              {
                value: 'DJ',
                label: '🇩🇯 DJ',
              },
              {
                value: 'GQ',
                label: '🇬🇶 GQ',
              },
              {
                value: 'HT',
                label: '🇭🇹 HT',
              },
              {
                value: 'MG',
                label: '🇲🇬 MG',
              },
              {
                value: 'RW',
                label: '🇷🇼 RW',
              },
              {
                value: 'SC',
                label: '🇸🇨 SC',
              },
              {
                value: 'TD',
                label: '🇹🇩 TD',
              },
              {
                value: 'VU',
                label: '🇻🇺 VU',
              },
              {
                value: 'GG',
                label: '🇬🇬 GG',
              },
              {
                value: 'LB',
                label: '🇱🇧 LB',
              },
              {
                value: 'MU',
                label: '🇲🇺 MU',
              },
              {
                value: 'VA',
                label: '🇻🇦 VA',
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
