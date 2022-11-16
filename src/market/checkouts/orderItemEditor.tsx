import { ReactElement, useCallback, useMemo, useState } from 'react';
import { Form, Field, FormErrors, FormState, FormContext, FormFields } from '@cezembre/forms';
import {
  adaptFridayCoinsAmount,
  Asset,
  BoosterFactory,
  OrderBook,
  OrderType,
  resolveFridayCoinsAmount,
} from '@fridaygame/client';
import Radio from '../../general/radio';
import Button from '../../general/button';
import Counter from '../../general/counter';
import OrderBookThumbnail, {
  OrderBookThumbnailSize,
} from '../../trading/orders/orderBookThumbnail';
import BoosterFactoryThumbnail from '../../trading/boosters/boosterFactoryThumbnail';

export interface OrderItemEditorFields extends FormFields {
  asset?: Asset | string;
  order_type?: OrderType;
  price_limit?: number;
  nb_shares?: number;
  booster_factory?: string;
}

export type OrderItemEditorSize = 'narrow' | 'big';

export interface Props {
  initialOrderItem?: OrderItemEditorFields;
  orderBook?: OrderBook;
  boosterFactories?: BoosterFactory[];
  onSubmit?: (orderItem: OrderItemEditorFields) => unknown;
  onCancel?: () => void;
  label?: string;
  size?: OrderItemEditorSize;
}

export default function OrderItemEditor({
  initialOrderItem,
  orderBook,
  boosterFactories,
  onSubmit,
  onCancel,
  label = 'Continuer',
  size = 'big',
}: Props): ReactElement | null {
  const [formState, setFormState] = useState<FormState<OrderItemEditorFields> | undefined>();

  const form = useCallback((formContext: FormContext<OrderItemEditorFields> | null) => {
    if (formContext) {
      setTimeout(() => {
        setFormState(formContext.formState);
      }, 10);
    }
  }, []);

  const validate = useCallback((fields: OrderItemEditorFields) => {
    const errors: FormErrors<OrderItemEditorFields> = {};

    if (!fields.order_type) {
      errors.order_type = "Veuillez préciser le type d'ordre";
    }

    return errors;
  }, []);

  const orderBookThumbnailSize = useMemo<OrderBookThumbnailSize>(() => {
    switch (size) {
      case 'narrow':
        return 'narrow';
      default:
        return 'big';
    }
  }, [size]);

  return (
    <Form<OrderItemEditorFields>
      ref={form}
      className={`friday-ui-order-item-editor ${size}`}
      onSubmit={onSubmit}
      validate={validate}>
      <h1>
        Placer un ordre
        {formState?.values?.order_type === 'buy' ? " d'achat" : ' de vente'}
      </h1>

      <h2>C&apos;est l&apos;heure de faire le bon choix !</h2>

      {initialOrderItem ? (
        <Field
          name="asset"
          type="hidden"
          initialValue={
            typeof initialOrderItem.asset === 'object'
              ? initialOrderItem.asset.id
              : initialOrderItem.asset
          }
        />
      ) : null}

      {initialOrderItem ? (
        <Field name="order_type" type="hidden" initialValue={initialOrderItem.order_type} />
      ) : null}

      <div className="counters">
        <div className="counter">
          <Field<number | undefined>
            name="nb_shares"
            label="Quantité"
            component={Counter}
            theme="black"
            initialValue={initialOrderItem?.nb_shares}
          />
        </div>

        <div className="counter">
          <Field<number | undefined>
            name="price_limit"
            label="Limite (FDY)"
            component={Counter}
            theme="black"
            initialValue={initialOrderItem?.price_limit}
            resolver={resolveFridayCoinsAmount}
            adapter={adaptFridayCoinsAmount}
            increment={100}
          />
        </div>
      </div>

      <div className="order-book">
        <OrderBookThumbnail
          orderBook={orderBook}
          size={orderBookThumbnailSize}
          theme="medium-light"
        />
      </div>

      {boosterFactories && formState?.values?.order_type === 'buy' ? (
        <div className="booster">
          <h2>Veux-tu ajouter un booster ?</h2>
          <h3>Multiplie tes gains ou tes pertes !</h3>

          <div className="boosters">
            <Field
              name="booster_factory"
              component={Radio}
              options={boosterFactories.map((boosterFactory) => ({
                value: boosterFactory.id,
                element: <BoosterFactoryThumbnail boosterFactory={boosterFactory} size="medium" />,
              }))}
              initialValue={initialOrderItem?.booster}
            />
          </div>
        </div>
      ) : null}

      <div className="actions">
        <div className="action">
          <Button type="button" onClick={onCancel} shape="text">
            Annuler
          </Button>
        </div>
        <div className="action">
          <Button type="submit">{label}</Button>
        </div>
      </div>

      {formState?.error ? <p className="error">{formState.error}</p> : null}
      {formState?.warning ? <p className="warning">{formState.warning}</p> : null}
    </Form>
  );
}
