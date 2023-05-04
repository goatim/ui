import { ReactElement, useCallback, useState } from 'react';
import { Field, Form, FormContext, FormFields, FormState } from '@cezembre/forms';
import { FormProps } from '@cezembre/forms/dist/form';
import { CreditCardInput, CreditCardValue } from './creditCardInput';
import { Button } from '../general';

export interface CreditCardFields extends FormFields {
  type: 'card';
  card?: CreditCardValue;
  // save_card?: boolean;
}

export interface CreditCardFormProps extends FormProps<CreditCardFields> {
  onCancel?: () => unknown;
}

export function CreditCardForm({ onSubmit, onCancel }: CreditCardFormProps): ReactElement {
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
        <Field
          label="Carte de crédit"
          name="card"
          instructions="Sécurisé par EasyTransac"
          component={CreditCardInput}
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
