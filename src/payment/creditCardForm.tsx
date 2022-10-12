import { ReactElement, useCallback, useState } from 'react';
import { Form, Field, FormFields, FormState, FormContext } from '@cezembre/forms';
import { FormProps } from '@cezembre/forms/dist/form';
import CreditCardInput, { CreditCardValue } from './creditCardInput';
import Checkbox from '../general/checkbox';
import Button from '../general/button';

export interface CreditCardFields extends FormFields {
  card?: CreditCardValue;
  save_card?: boolean;
}

export interface Props extends FormProps<CreditCardFields> {
  onCancel?: () => unknown;
}

export default function CreditCardForm({ onSubmit, onCancel }: Props): ReactElement {
  const [formState, setFormState] = useState<FormState<CreditCardFields>>();

  const form = useCallback((formContext: FormContext<CreditCardFields>) => {
    if (formContext) {
      setFormState(formContext.formState);
    }
  }, []);

  return (
    <Form<CreditCardFields> className="friday-ui-credit-card-form" ref={form} onSubmit={onSubmit}>
      <div className="field">
        <Field
          label="Carte de crédit"
          name="card"
          instructions="Sécurisé par EasyTransac"
          component={CreditCardInput}
        />
      </div>

      <div className="field">
        <Field label="Enregistrer la carte" name="save_card" component={Checkbox} initialValue />
      </div>

      <div className="actions">
        {onCancel ? (
          <Button type="button" onClick={onCancel}>
            Annuler
          </Button>
        ) : null}

        <Button
          type="submit"
          pending={formState?.isSubmitting}
          success={formState?.submitSucceeded}
          disabled={!formState?.isValid}
          errored={formState?.submitFailed}>
          Ajouter cette carte
        </Button>
      </div>

      {formState?.error ? <p className="error">{formState.error}</p> : null}
    </Form>
  );
}
