import { ReactElement, useCallback, useMemo, useState } from 'react';
import { Form, Field, FormErrors, FormState, FormContext, FormFields } from '@cezembre/forms';
import {
  adaptFridayCoinsAmount,
  Asset,
  BoosterFactory,
  formatFridayCoinsAmount,
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
import FridayCoins from '../fridayCoins';

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
  bankProposalQuotation?: number;
  onAcceptBankProposal?: () => unknown;
}

export default function OrderItemEditor({
  initialOrderItem,
  orderBook,
  boosterFactories,
  onSubmit,
  onCancel,
  label = 'Valider',
  size = 'big',
  bankProposalQuotation,
  onAcceptBankProposal,
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

  const className = useMemo<string>(() => {
    const classNames = ['friday-ui-order-item-editor', size];

    if (formState?.values?.order_type) {
      classNames.push(formState.values.order_type);
    }

    return classNames.join(' ');
  }, [formState?.values?.order_type, size]);

  return (
    <Form<OrderItemEditorFields>
      ref={form}
      className={className}
      onSubmit={onSubmit}
      validate={validate}>
      <h1>
        Placer un ordre
        <span>{formState?.values?.order_type === 'buy' ? " d'achat" : ' de vente'}</span>
      </h1>

      {formState?.values?.order_type === 'buy' ? (
        <p className="instruction">
          Un ordre d’achat exprime une <b>volonté d’achat</b> d’un certain nombre d’actions à un{' '}
          <b>prix maximal</b>. Il sera executé entièrement ou en partie lorsqu’un ordre de vente
          concordant sera placé.
        </p>
      ) : (
        <p className="instruction">
          Un ordre de vente exprime une <b>volonté de vente</b> d’un certain nombre d’actions à un{' '}
          <b>prix minimal</b>. Il sera executé entièrement ou en partie lorsqu’un ordre d’achat
          concordant sera placé.
        </p>
      )}

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
            label="Actions"
            component={Counter}
            theme="black"
            initialValue={initialOrderItem?.nb_shares}
          />
        </div>

        <div className="counter">
          <Field<number | undefined>
            name="price_limit"
            label="Limite"
            component={Counter}
            theme="black"
            initialValue={initialOrderItem?.price_limit}
            resolver={resolveFridayCoinsAmount}
            adapter={adaptFridayCoinsAmount}
            format={formatFridayCoinsAmount}
            increment={100}
          />
          <div className="total">
            <span className="label">Total</span>
            <FridayCoins
              amount={(formState?.values?.nb_shares || 0) * (formState?.values?.price_limit || 0)}
              size="medium"
              theme="darker"
            />
          </div>
        </div>
      </div>

      <div className="order-book">
        <OrderBookThumbnail
          orderBook={orderBook}
          size={orderBookThumbnailSize}
          theme="medium-light"
        />
      </div>

      <p className="instruction">
        Le carnet d’ordre t’aide à mesurer <b>l’offre et la demande</b> sur le marché. Il liste les
        meilleurs ordres d’achat et de vente en attente pour cet actif.
      </p>

      {boosterFactories?.length && formState?.values?.order_type === 'buy' ? (
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
          <Button type="button" onClick={onCancel} theme="light">
            Annuler
          </Button>
        </div>
        <div className="action">
          <Button type="submit" theme={formState?.values?.order_type}>
            {label}
          </Button>
        </div>
      </div>

      {formState?.error ? <p className="error">{formState.error}</p> : null}
      {formState?.warning ? <p className="warning">{formState.warning}</p> : null}

      {formState?.values?.order_type === 'sell' &&
      bankProposalQuotation &&
      formState?.values?.nb_shares ? (
        <div className="bank-proposal">
          <span className="caption">Sinon Friday t&apos;en propose</span>
          <div className="quotation">
            <FridayCoins
              amount={formState.values.nb_shares * bankProposalQuotation}
              theme="gold"
              size="medium"
            />
            {formState.values.nb_shares > 1 ? (
              <span className="multiple">Pour tes {formState.values.nb_shares} actions</span>
            ) : null}
          </div>
          {onAcceptBankProposal ? (
            <div className="action">
              <Button theme="gold">Vendre à Friday</Button>
            </div>
          ) : null}
          <p>Besoin d’une vente rapide et assurée ? Friday rachète instantanément tes actions.</p>
        </div>
      ) : null}
    </Form>
  );
}
