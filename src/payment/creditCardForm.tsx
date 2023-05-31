import { ReactElement, useCallback, useState } from 'react';
import { Field, Form, FormContext, FormState } from '@cezembre/forms';
import { FormProps } from '@cezembre/forms/dist/form';
import { CreditCardInput, CreditCardInputProps, CreditCardValue } from './creditCardInput';
import { Button } from '../general';

export interface CreditCardFields {
  type: 'card';
  card?: CreditCardValue;
  // save_card?: boolean;
}

export type CreditCardFormSize = 'small' | 'medium' | 'large';

export interface CreditCardFormProps extends FormProps<CreditCardFields> {
  onCancel?: () => unknown;
  size?: CreditCardFormSize;
}

export function CreditCardForm({
  onSubmit,
  onCancel,
  size = 'small',
}: CreditCardFormProps): ReactElement {
  const [formState, setFormState] = useState<FormState<CreditCardFields>>();

  const form = useCallback((formContext: FormContext<CreditCardFields>) => {
    if (formContext) {
      setFormState(formContext.formState);
    }
  }, []);

  return (
    <Form<CreditCardFields> className="goatim-ui-credit-card-form" ref={form} onSubmit={onSubmit}>
      <Field name="type" initialValue="card" type="hidden" />

      <div className="field">
        <Field<CreditCardValue, CreditCardInputProps>
          label="Carte de crédit"
          name="card"
          instructions="Sécurisé par EasyTransac"
          component={CreditCardInput}
          size={size}
        />
      </div>

      {/* <div className="field"> */}
      {/*  <Field label="Enregistrer la carte" name="save_card" component={Checkbox} initialValue /> */}
      {/* </div> */}

      <div className="actions">
        {onCancel ? (
          <Button type="button" onClick={onCancel} theme="transparent-dark">
            Annuler
          </Button>
        ) : null}

        <Button
          type="submit"
          pending={formState?.isSubmitting}
          success={formState?.submitSucceeded}
          disabled={!formState?.isValid}
          errored={formState?.submitFailed}>
          Valider cette carte
        </Button>
      </div>

      {formState?.error ? <p className="error">{formState.error}</p> : null}
    </Form>
  );
}
