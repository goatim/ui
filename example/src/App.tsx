import { ReactElement } from 'react';
import { Button, Input, Icon, Counter, CreditCardInput } from '@fridaygame/ui';
import { Form, Field } from '@cezembre/forms';
import './App.scss';

export const fridayCoinsSmallestUnitFactor = 1000;

export function resolveFridayCoins(amount: number): number {
  return Math.round(amount * fridayCoinsSmallestUnitFactor);
}

export function adaptFridayCoins(amount: number): number {
  return amount / fridayCoinsSmallestUnitFactor;
}

export function formatFridayCoins(amount?: number, decimalDigits = 2): string {
  return `${adaptFridayCoins(amount || 0).toFixed(decimalDigits)} FDY`;
}

export default function App(): ReactElement {
  return (
    <div className="App">
      <Icon name="friday" />
      <div className="row">
        <div className="button">
          <Button size="medium" leftIcon="trophy">
            Mon effectif
          </Button>
        </div>

        <div className="button">
          <Button size="large" leftIcon="shirt">
            Mon effectif
          </Button>
        </div>

        <div className="button">
          <Button size="large" leftIcon="instagram">
            Mon effectif
          </Button>
        </div>

        <div className="button">
          <Button theme="medium-blue">Mon effectif</Button>
        </div>

        <div className="button">
          <Button theme="dark-blue">Mon effectif</Button>
        </div>

        <div className="button">
          <Button theme="violet-pink">Mon effectif</Button>
        </div>

        <div className="button">
          <Button theme="orange-yellow">Mon effectif</Button>
        </div>

        <div className="button">
          <Button theme="white">Mon effectif</Button>
        </div>
      </div>

      <div className="row">
        <div className="button">
          <Button buttonStyle="filled">Mon effectif</Button>
        </div>

        <div className="button">
          <Button buttonStyle="filled" theme="medium-blue">
            Mon effectif
          </Button>
        </div>

        <div className="button">
          <Button buttonStyle="filled" theme="dark-blue">
            Mon effectif
          </Button>
        </div>

        <div className="button">
          <Button buttonStyle="filled" theme="violet-pink">
            Mon effectif
          </Button>
        </div>

        <div className="button">
          <Button buttonStyle="filled" theme="orange-yellow">
            Mon effectif
          </Button>
        </div>

        <div className="button">
          <Button buttonStyle="filled" theme="white">
            Mon effectif
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="button">
          <Button buttonStyle="outlined">Mon effectif</Button>
        </div>

        <div className="button">
          <Button buttonStyle="outlined" theme="medium-blue" size="large">
            Mon effectif
          </Button>
        </div>

        <div className="button">
          <Button buttonStyle="outlined" theme="dark-blue">
            Mon effectif
          </Button>
        </div>

        <div className="button">
          <Button buttonStyle="outlined" theme="violet-pink">
            Mon effectif
          </Button>
        </div>

        <div className="button">
          <Button buttonStyle="outlined" theme="orange-yellow">
            Mon effectif
          </Button>
        </div>

        <div className="button">
          <Button buttonStyle="outlined" theme="white">
            Mon effectif
          </Button>
        </div>
      </div>

      <Form className="form">
        <Field name="title" component={Input} label="Yes!" />

        <Field<number | undefined>
          name="price_limit"
          label="Limite (FDY)"
          component={Counter}
          theme="black"
          initialValue={20}
          resolver={(value: number | undefined) =>
            value !== undefined ? value / fridayCoinsSmallestUnitFactor : undefined
          }
          format={(value: number | undefined) =>
            value !== undefined ? (value / fridayCoinsSmallestUnitFactor).toFixed(2) : undefined
          }
          adapter={(value: string) =>
            value.length ? Math.round(Number(value) * fridayCoinsSmallestUnitFactor) : undefined
          }
          step={500}
        />

        <Field name="payment_method" label="Credit card" component={CreditCardInput} />
      </Form>
    </div>
  );
}
