import { ReactElement, useCallback, useState } from 'react';
import { Form, Field } from '@cezembre/forms';
import { InputField, Button, Icon, useModal } from '@fridaygame/ui';
import './App.scss';

export default function App(): ReactElement {
  const { popModal } = useModal();

  const openThirdModal = useCallback(() => {
    popModal(({ dismissModal }) => (
      <div style={{ width: 800, height: 800, background: 'pink' }}>
        <Button onClick={dismissModal}>Dismiss !</Button>
      </div>
    ));
  }, [popModal]);

  const openSecondModal = useCallback(() => {
    popModal(({ dismissModal }) => (
      <div style={{ width: 150, height: 200, background: 'blue' }}>
        <Button onClick={openThirdModal}>Third modal !</Button>
        <Button onClick={dismissModal}>Dismiss !</Button>
      </div>
    ));
  }, [popModal, openThirdModal]);

  const openFirstModal = useCallback(() => {
    popModal(({ dismissModal }) => (
      <div style={{ width: 300, height: 500, background: 'red' }}>
        <Button onClick={openSecondModal}>Second modal !</Button>
        <Button onClick={dismissModal}>Dismiss !</Button>
      </div>
    ));
  }, [popModal, openSecondModal]);

  return (
    <div className="App">
      <Button onClick={openFirstModal}>First modal !</Button>

      <Icon name="chevron-down" />

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
