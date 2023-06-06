import { formatEurosAmount } from '@goatim/client';
import { useMemo } from 'react';
import { Radio, RadioProps } from '../general';

export interface QuantitySelectorQuantity {
  value: number;
  price?: number;
}

interface OptionProps {
  quantity: number;
  price?: number;
  active?: boolean;
}

function Option({ quantity, price, active }: OptionProps) {
  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-quantity-selector-option'];

    if (active) {
      classNames.push('active');
    }

    return classNames.join(' ');
  }, [active]);

  return (
    <div className={className}>
      <span className="quantity">{quantity}</span>
      {price !== undefined ? <span className="price">{formatEurosAmount(price)}</span> : null}
    </div>
  );
}

export interface QuantitySelectorProps extends RadioProps<number> {
  quantities?: QuantitySelectorQuantity[];
}

export function QuantitySelector({
  form,
  value,
  onFocus,
  onChange,
  onBlur,
  quantities,
  fullWidth,
}: QuantitySelectorProps) {
  return (
    <Radio<number>
      form={form}
      value={value}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
      fullWidth={fullWidth}
      options={quantities?.map((quantity) => ({
        value: quantity.value,
        element: <Option quantity={quantity.value} price={quantity.price} />,
      }))}
    />
  );
}
