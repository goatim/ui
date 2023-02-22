import { ReactElement } from 'react';
import { Field, Form, FormSubmitFunction } from '@cezembre/forms';
import { Image } from '@fridaygame/client';
import { Button, Input, Upload } from '../../general';
import { WalletPicture } from './walletPicture';

export interface WalletEditorFields {
  name?: string;
}

export interface WalletEditorProps {
  initialValues?: WalletEditorFields;
  onSubmit?: FormSubmitFunction<WalletEditorFields>;
  picture?: Image;
  onUploadPicture?: (icon: File) => unknown;
}

export function WalletEditor({
  initialValues,
  onSubmit,
  picture,
  onUploadPicture,
}: WalletEditorProps): ReactElement {
  return (
    <div className="friday-ui-wallet-editor">
      <div className="header">
        <h2>Mon portefeuille</h2>
      </div>

      <div className="picture">
        <WalletPicture picture={picture} size="medium" />
        {onUploadPicture ? (
          <div className="upload">
            <Upload onUpload={(files) => onUploadPicture(files[0])} theme="transparent-dark">
              Changer la photo
            </Upload>
          </div>
        ) : null}
      </div>

      <Form<WalletEditorFields> onSubmit={onSubmit}>
        <div className="field">
          <Field name="name" component={Input} label="Pseudo" initialValue={initialValues?.name} />
        </div>

        <div className="submit">
          <Button type="submit">Enregistrer</Button>
        </div>
      </Form>
    </div>
  );
}
