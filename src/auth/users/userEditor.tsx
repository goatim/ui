import { ReactElement } from 'react';
import { Field, Form, FormSubmitFunction } from '@cezembre/forms';
import Button from '../../general/button';
import Input from '../../general/input';

export interface UserEditorFields {
  first_name?: string;
  last_name?: string;
}

export interface Props {
  initialValues?: UserEditorFields;
  onSubmit?: FormSubmitFunction<UserEditorFields>;
}

export default function UserEditor({ initialValues, onSubmit }: Props): ReactElement {
  return (
    <Form<UserEditorFields> className="friday-ui-user-editor" onSubmit={onSubmit}>
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
  );
}
