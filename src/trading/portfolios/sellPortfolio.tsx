import { Field, Form, FormContext, FormState, FormSubmitFunction } from '@cezembre/forms';
import { useCallback, useState } from 'react';
import { GoatimCoinsAmount } from '../../market';
import { Button, Counter, CounterProps } from '../../general';

export interface SellPortfolioFields {
  nb_shares?: number;
}

export interface SellPortfolioProps {
  initialValues?: SellPortfolioFields;
  maxShares?: number;
  bankProposal: number;
  onChange?: FormSubmitFunction<SellPortfolioFields>;
  onSubmit?: FormSubmitFunction<SellPortfolioFields>;
}

export function SellPortfolio({
  bankProposal,
  onChange,
  onSubmit,
  initialValues,
  maxShares,
}: SellPortfolioProps) {
  const [formState, setFormState] = useState<FormState<SellPortfolioFields> | undefined>();

  const form = useCallback((formContext: FormContext<SellPortfolioFields> | null) => {
    if (formContext) {
      setTimeout(() => {
        setFormState(formContext.formState);
      }, 10);
    }
  }, []);

  return (
    <Form<SellPortfolioFields>
      className="goatim-ui-sell-portfolio"
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
