import { ReactElement, useCallback } from 'react';
import { Form, Field } from '@cezembre/forms';
import { Input, Counter, Button, Icon, useModal, Radio } from '@fridaygame/ui';
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
      <div style={{ width: '80%', height: 500, background: 'red' }}>
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
            component={Input}
            label="Titre de l'article"
            placeholder="Le temps en emporte le vent"
          />
        </div>

        <div className="field">
          <Field
            name="leagues"
            component={Radio}
            options={[
              { value: 'first', item: 'One' },
              { value: 'two', item: 'Two' },
              { value: 'three', item: 'Three' },
              { value: 'four', item: 'Four' },
            ]}
            label="League"
          />
        </div>

        <div className="field">
          <Field
            name="search"
            component={Input}
            placeholder="Chercher par ligue, club, joueur, ..."
          />
        </div>

        <div className="field">
          <Field
            name="qd"
            component={Counter}
            theme="black"
            label="Quantité"
            placeholder={0}
            step={500}
            resolver={(value: number) => value / 1000}
            adapter={(value: number) => Math.round(value * 1000)}
          />
        </div>

        <div className="field">
          <Field name="qzd" component={Input} theme="violet" />
        </div>
      </Form>
    </div>
  );
}
