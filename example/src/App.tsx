import { ReactElement } from 'react';
import { Button, Input } from '@fridaygame/ui';
import { Form, Field } from '@cezembre/forms';
import './App.scss';

export default function App(): ReactElement {
  return (
    <div className="App">
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
      </Form>
    </div>
  );
}
