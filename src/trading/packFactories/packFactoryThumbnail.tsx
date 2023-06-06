import { ReactElement, useMemo } from 'react';
import { Field, Form } from '@cezembre/forms';
import { PackFactory } from '@goatim/client';
import { FormSubmitFunction } from '@cezembre/forms/dist/state';
import { Button } from '../../general';
import { GoatimCoinsAmount, QuantitySelector, QuantitySelectorProps } from '../../market';
import gift from '../../general/assets/gift.png';

export interface PackFactoryThumbnailOptionsFields {
  quantity?: number;
}

export interface PackFactoryThumbnailProps {
  packFactory: PackFactory;
  onChangeOptions?: FormSubmitFunction<PackFactoryThumbnailOptionsFields>;
  onSubmitOptions?: FormSubmitFunction<PackFactoryThumbnailOptionsFields>;
  submitLabel?: string;
}

export function PackFactoryThumbnail({
  packFactory,
  onChangeOptions,
  onSubmitOptions,
  submitLabel = 'Ajouter au panier',
}: PackFactoryThumbnailProps): ReactElement {
  const highestOdd = useMemo<number>(() => {
    if (!packFactory.odds) {
      return 0;
    }
    return Object.entries(packFactory.odds).reduce<number>(
      (high, [val]) => (high < Number(val) ? Number(val) : high),
      0,
    );
  }, [packFactory.odds]);

  return (
    <div className="goatim-ui-pack-factory-thumbnail">
      <div className="illustration">
        <img src={gift} alt="gift" className="gift" />
        <span className="nb-actions">5 actions</span>
      </div>

      <div className="header">
        <span className="name">{packFactory.name}</span>
        <div className="odd">
          <span className="label">Jusqu&apos;à</span>
          <GoatimCoinsAmount amount={highestOdd} size="small" theme="darker" />
        </div>
      </div>

      <Form<PackFactoryThumbnailOptionsFields>
        className="options"
        onChange={onChangeOptions}
        onSubmit={onSubmitOptions}>
        <Field<number, QuantitySelectorProps>
          name="quantity"
          component={QuantitySelector}
          initialValue={1}
          fullWidth
          quantities={[
            {
              value: 1,
              price: packFactory.price,
            },
            {
              value: 5,
              price: (packFactory.price || 0) * 5,
            },
            {
              value: 10,
              price: (packFactory.price || 0) * 10,
            },
          ]}
        />

        <div className="submit">
          <Button type="submit" shape="filled" size="small" theme="gold" fullWidth>
            {submitLabel}
          </Button>
        </div>
      </Form>
    </div>
  );
}
