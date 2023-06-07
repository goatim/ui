import { Field, Form, FormContext, FormState, FormSubmitFunction } from '@cezembre/forms';
import { useCallback, useState } from 'react';
import { GoatimCoinsAmount } from '../../market';
import { Button, Counter, CounterProps } from '../../general';

export interface SellPortfolioToBankFields {
  nb_shares?: number;
}

export interface SellPortfolioToBankProps {
  initialValues?: SellPortfolioToBankFields;
  maxShares?: number;
  bankProposal: number;
  onChange?: FormSubmitFunction<SellPortfolioToBankFields>;
  onSubmit?: FormSubmitFunction<SellPortfolioToBankFields>;
}

export function SellPortfolioToBank({
  bankProposal,
  onChange,
  onSubmit,
  initialValues,
  maxShares,
}: SellPortfolioToBankProps) {
  const [formState, setFormState] = useState<FormState<SellPortfolioToBankFields> | undefined>();

  const form = useCallback((formContext: FormContext<SellPortfolioToBankFields> | null) => {
    if (formContext) {
      setTimeout(() => {
        setFormState(formContext.formState);
      }, 10);
    }
  }, []);

  return (
    <Form<SellPortfolioToBankFields>
      className="goatim-ui-sell-portfolio-to-bank"
      onSubmit={onSubmit}
      onChange={onChange}
      ref={form}>
      <span className="caption">Sinon Goatim t&apos;en propose</span>

      <div className="quotation">
        <GoatimCoinsAmount
          amount={(formState?.values?.nb_shares || 0) * bankProposal}
          theme="gold"
          size="medium"
        />
        {(formState?.values?.nb_shares || 0) > 1 ? (
          <span className="multiple">Pour tes {formState?.values?.nb_shares || 0} actions</span>
        ) : null}
      </div>

      <div className="counter">
        <Field<number, CounterProps>
          name="nb_shares"
          initialValue={initialValues ? initialValues.nb_shares : 1}
          component={Counter}
          max={maxShares}
          min={1}
        />
      </div>

      <div className="action">
        <Button theme="gold" type="submit">
          Vendre à Goatim
        </Button>
      </div>

      {formState?.error ? <p className="error">{formState.error}</p> : null}

      <p>Besoin d’une vente rapide et assurée ? Goatim rachète instantanément tes actions.</p>
    </Form>
  );
}
