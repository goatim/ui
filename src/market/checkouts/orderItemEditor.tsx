import { ReactElement, useCallback, useMemo, useState } from 'react';
import { Field, Form, FormContext, FormErrors, FormFields, FormState } from '@cezembre/forms';
import {
  adaptGoatimCoinsAmount,
  Asset,
  formatGoatimCoinsAmount,
  OrderBook,
  OrderType,
  resolveGoatimCoinsAmount,
} from '@goatim/client';
import { FormSubmitFunction } from '@cezembre/forms/dist/state';
import isPromise from 'is-promise';
import { Button, Counter } from '../../general';
import { OrderBookThumbnail, OrderBookThumbnailSize } from '../../trading';
import { GoatimCoinsAmount } from '../goatimCoins';

export interface OrderItemEditorFields extends FormFields {
  asset?: Asset | string;
  order_type?: OrderType;
  price_limit?: number;
  nb_shares?: number;
}

export type OrderItemEditorSize = 'narrow' | 'big';

export interface OrderItemEditorProps {
  initialOrderItem?: OrderItemEditorFields;
  orderBook?: OrderBook;
  onSubmit?: FormSubmitFunction<OrderItemEditorFields>;
  onCancel?: () => unknown;
  label?: string;
  size?: OrderItemEditorSize;
  bankProposalQuotation?: number;
  onAcceptBankProposal?: (nbShares?: number) => unknown;
}

export function OrderItemEditor({
  initialOrderItem,
  orderBook,
  onSubmit,
  onCancel,
  label = 'Valider',
  size = 'big',
  bankProposalQuotation,
  onAcceptBankProposal,
}: OrderItemEditorProps): ReactElement | null {
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

  const [bankProposalPending, setBankProposalPending] = useState<boolean>(false);
  const [bankProposalError, setBankProposalError] = useState<string | undefined | null>();

  const acceptBankProposal = useCallback(async () => {
    setBankProposalError(null);
    if (onAcceptBankProposal) {
      setBankProposalPending(true);
      const res = onAcceptBankProposal(formState?.values?.nb_shares);
      if (isPromise(res)) {
        try {
          await res;
        } catch (error) {
          setBankProposalError((error as Error).message);
        } finally {
          setBankProposalPending(false);
        }
      } else {
        setBankProposalPending(false);
      }
    }
  }, [formState?.values?.nb_shares, onAcceptBankProposal]);

  const orderBookThumbnailSize = useMemo<OrderBookThumbnailSize>(() => {
    switch (size) {
      case 'narrow':
        return 'narrow';
      default:
        return 'big';
    }
  }, [size]);

  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-order-item-editor', size];

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
          <b>prix maximal</b>. Il sera executé entièrement ou en partie lorsqu’il rencontrera un
          ordre de vente concordant.
        </p>
      ) : (
        <p className="instruction">
          Un ordre de vente exprime une <b>volonté de vente</b> d’un certain nombre d’actions à un{' '}
          <b>prix minimal</b>. Il sera executé entièrement ou en partie lorsqu’il rencontrera un
          ordre d’achat concordant.
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
            resolver={resolveGoatimCoinsAmount}
            adapter={adaptGoatimCoinsAmount}
            format={formatGoatimCoinsAmount}
            increment={100}
          />
          <div className="total">
            <span className="label">Total</span>
            <GoatimCoinsAmount
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
          <span className="caption">Sinon Goatim t&apos;en propose</span>
          <div className="quotation">
            <GoatimCoinsAmount
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
              <Button theme="gold" onClick={acceptBankProposal} pending={bankProposalPending}>
                Vendre à Goatim
              </Button>
            </div>
          ) : null}

          {bankProposalError ? <p className="error">{bankProposalError}</p> : null}

          <p>Besoin d’une vente rapide et assurée ? Goatim rachète instantanément tes actions.</p>
        </div>
      ) : null}
    </Form>
  );
}
