import { ReactElement } from 'react';
import { Field, Form, FormSubmitFunction } from '@cezembre/forms';
import { Button, Input } from '../../general';

export interface UserEditorFields {
  first_name?: string;
  last_name?: string;
}

export interface UserEditorProps {
  initialValues?: UserEditorFields;
  onSubmit?: FormSubmitFunction<UserEditorFields>;
}

export function UserEditor({ initialValues, onSubmit }: UserEditorProps): ReactElement {
  return (
    <div className="friday-ui-user-editor">
      <div className="header">
        <h2>Mon profil</h2>
      </div>

      <Form<UserEditorFields> onSubmit={onSubmit}>
        <div className="field">
          <Field
            name="first_name"
            component={Input}
            label="Prénom"
            initialValue={initialValues?.first_name}
          />
        </div>

        <div className="field">
          <Field
            name="last_name"
            component={Input}
            label="Nom"
            initialValue={initialValues?.last_name}
          />
        </div>

        <div className="submit">
          <Button type="submit">Enregistrer</Button>
        </div>
      </Form>
    </div>
  );
}
