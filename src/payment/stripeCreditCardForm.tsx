import { ReactElement, useCallback, useState } from 'react';
import {
  Form,
  Field,
  FormState,
  getDefaultFormState,
  FormFields,
  FormContext,
} from '@cezembre/forms';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {
  PaymentMethod as StripePaymentMethod,
  StripeCardElement,
  StripeCardNumberElement,
} from '@stripe/stripe-js';
import StripeCreditCardInput from './stripeCreditCardInput';
import Button from '../general/button';

export interface Fields extends FormFields {
  card: StripeCardElement | StripeCardNumberElement | { token: string };
}

export interface NewStripeCard {
  payment_method: StripePaymentMethod;
}

export interface Props {
  onSubmit?: (newStripeCard: NewStripeCard) => unknown;
  onCancel?: () => unknown;
}

export default function StripeCreditCardForm({ onSubmit, onCancel }: Props): ReactElement {
  const [formState, setFormState] = useState<FormState<Fields>>(getDefaultFormState<Fields>());

  const form = useCallback((formContext: FormContext) => {
    if (formContext) {
      setFormState(formContext.formState);
    }
  }, []);

  const stripe = useStripe();
  const elements = useElements();

  const submit = useCallback(async () => {
    if (!stripe || !elements) {
      throw new Error('Stripe indisponible pour le moment');
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      throw new Error('Champ Stripe non trouvé');
    }

    const paymentMethodResult = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (paymentMethodResult.error) {
      throw new Error(paymentMethodResult.error.message);
    }

    if (!paymentMethodResult.paymentMethod) {
      throw new Error("Impossible d'ajouter cette carte");
    }

    if (onSubmit) {
      onSubmit({
        payment_method: paymentMethodResult.paymentMethod,
      });
    }
  }, [elements, onSubmit, stripe]);

  return (
    <Form<Fields> className="friday-ui-stripe-credit-card-form" ref={form} onSubmit={submit}>
      <div className="field">
        <Field
          label="Carte de crédit"
          name="card"
          instructions="Sécurisé par Stripe"
          component={StripeCreditCardInput}
        />
      </div>

      <div className="actions">
        {onCancel ? (
          <Button type="button" onClick={onCancel}>
            Annuler
          </Button>
        ) : null}

        <Button
          type="submit"
          pending={formState.isSubmitting}
          success={formState.submitSucceeded}
          disabled={!formState.isValid}
          errored={formState.submitFailed}>
          Ajouter cette carte
        </Button>
      </div>

      {formState.error ? <p className="error">{formState.error}</p> : null}
    </Form>
  );
}
