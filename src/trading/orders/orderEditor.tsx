import { ReactElement, useCallback, useMemo, useState } from 'react';
import { Field, Form, FormContext, FormErrors, FormFields, FormState } from '@cezembre/forms';
import {
  adaptGoatimCoinsAmount,
  formatGoatimCoinsAmount,
  OrderBook,
  OrderType,
  resolveGoatimCoinsAmount,
} from '@goatim/client';
import { FormSubmitFunction } from '@cezembre/forms/dist/state';
import isPromise from 'is-promise';
import { UrlObject } from 'url';
import { Button, Counter, CounterProps } from '../../general';
import { OrderBookThumbnail, OrderBookThumbnailSize } from '../index';
import { GoatimCoinsAmount } from '../../market';

export interface OrderEditorFields extends FormFields {
  order_type?: OrderType;
  price_limit?: number;
  nb_shares?: number;
}

export type OrderEditorSize = 'narrow' | 'big';

export interface OrderEditorProps {
  initialOrder?: OrderEditorFields;
  orderBook?: OrderBook;
  onSubmit?: FormSubmitFunction<OrderEditorFields>;
  onCancel?: () => unknown;
  connectButtonHref?: string | UrlObject;
  label?: string;
  size?: OrderEditorSize;
  bankProposalQuotation?: number;
  onAcceptBankProposal?: (nbShares?: number) => unknown;
  isConnected?: boolean;
}

export function OrderEditor({
  initialOrder,
  orderBook,
  onSubmit,
  onCancel,
  label = 'Valider',
  size = 'big',
  bankProposalQuotation,
  onAcceptBankProposal,
  isConnected = false,
  connectButtonHref,
}: OrderEditorProps): ReactElement | null {
  const [formState, setFormState] = useState<FormState<OrderEditorFields> | undefined>();

  const form = useCallback((formContext: FormContext<OrderEditorFields> | null) => {
    if (formContext) {
      setTimeout(() => {
        setFormState(formContext.formState);
      }, 10);
    }
  }, []);

  const validate = useCallback((fields: OrderEditorFields) => {
    const errors: FormErrors<OrderEditorFields> = {};

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
    const classNames = ['goatim-ui-order-editor', size];

    if (formState?.values?.order_type) {
      classNames.push(formState.values.order_type);
    }

    return classNames.join(' ');
  }, [formState?.values?.order_type, size]);

  return (
    <Form<OrderEditorFields>
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

      <Field name="order_type" type="hidden" initialValue={initialOrder?.order_type} />

      {isConnected ? (
        <div className="counters">
          <div className="counter">
            <Field<number, CounterProps>
              name="nb_shares"
              label="Actions"
              component={Counter}
              initialValue={initialOrder?.nb_shares}
            />
          </div>

          <div className="counter">
            <Field<number, CounterProps>
              name="price_limit"
              label="Limite"
              component={Counter}
              initialValue={initialOrder?.price_limit}
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
      ) : null}

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
        {isConnected ? (
          <div className="action">
            <Button type="submit" theme={formState?.values?.order_type}>
              {label}
            </Button>
          </div>
        ) : (
          <div className="action">
            <Button href={connectButtonHref}>Me connecter</Button>
          </div>
        )}
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
