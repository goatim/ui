import { ReactElement } from 'react';
import { Form, Field } from '@cezembre/forms';
import { InputField, Button, Icon } from '@fridaygame/ui';
import './App.scss';

export default function App(): ReactElement {
  return (
    <div className="App">
      <Form className="form">
        <div className="field">
          <Field
            name="title"
            component={InputField}
            label="Titre de l'article"
            placeholder="Le temps en emporte le vent"
          />
        </div>

        <div className="field">
          <Field
            name="search"
            component={InputField}
            placeholder="Chercher par ligue, club, joueur, ..."
            inputStyle="search"
            rightComponent={
              <Button shape="square" theme="blue">
                <Icon name="search" />
              </Button>
            }
          />
        </div>
      </Form>
    </div>
  );
}
