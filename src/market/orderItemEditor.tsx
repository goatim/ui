import { ReactElement, useCallback, useState } from 'react';
import { Form, Field, FormErrors, FormState, FormContext, FormFields } from '@cezembre/forms';
import {
  adaptFridayCoins,
  Asset,
  Booster,
  OrderType,
  resolveFridayCoins,
} from '@fridaygame/client';
import BoosterIcon from '../trading/boosterIcon';
import Radio from '../fields/radio';
import Button from '../general/button';
import Counter from '../fields/counter';

export interface OrderItemEditorFields extends FormFields {
  asset?: Asset | string;
  order_type?: OrderType;
  price_limit?: number;
  quantity?: number;
  booster?: string;
}

export interface Props {
  initialOrderItem?: OrderItemEditorFields;
  boosters?: Booster[];
  onSubmit?: (orderItem: OrderItemEditorFields) => Promise<void> | void;
  onCancel?: () => void;
  label?: string;
}

export default function OrderItemEditor({
  initialOrderItem,
  boosters,
  onSubmit,
  onCancel,
  label = 'Continuer',
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

  return (
    <Form<OrderItemEditorFields>
      ref={form}
      className="friday-ui-order-item-editor"
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
            name="quantity"
            label="Quantité"
            component={Counter}
            theme="black"
            initialValue={initialOrderItem?.quantity}
          />
        </div>

        <div className="option">
          <Field<number | undefined>
            name="price_limit"
            label="Limite (FDY)"
            component={Counter}
            theme="black"
            initialValue={initialOrderItem?.price_limit}
            resolver={resolveFridayCoins}
            adapter={adaptFridayCoins}
            step={100}
          />
        </div>
      </div>

      {boosters && formState?.values?.order_type === 'buy' ? (
        <div className="booster">
          <h2>Veux-tu ajouter un booster ?</h2>
          <h3>Multiplie tes gains ou tes pertes !</h3>

          <div className="boosters">
            <Field
              name="booster"
              component={Radio}
              options={boosters.map((booster) => ({
                value: booster.id,
                element: <BoosterIcon booster={booster} size="medium" />,
              }))}
              initialValue={initialOrderItem?.booster}
            />
          </div>
        </div>
      ) : null}

      <div className="actions">
        <div className="action">
          <Button type="button" onClick={onCancel} shape="filled">
            Annuler
          </Button>
        </div>
        <div className="action">
          <Button type="submit" shape="filled" theme="submit">
            {label}
          </Button>
        </div>
      </div>

      {formState?.error ? <p className="error">{formState.error}</p> : null}
      {formState?.warning ? <p className="warning">{formState.warning}</p> : null}
    </Form>
  );
}
