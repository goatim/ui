import { ReactElement, useCallback } from 'react';
import { ModalsContext, useModals } from '../../src';

// const pack: Pack = {};

function Popup(): ReactElement {
  return (
    <div style={{ background: 'red' }}>
      <h1 style={{ margin: 0 }}>Ici</h1>
      <p style={{ margin: 0 }}>Lorem ipsum</p>
    </div>
  );
}

function App() {
  const { pushModal } = useModals();
  const openModal = useCallback(() => {
    pushModal({
      type: 'screen',
      component: Popup,
      disableDismiss: true,
    });
  }, [pushModal]);

  return (
    <div>
      {Array(4).fill(
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquid aut error esse,
          et hic illo illum molestias, natus nemo quasi qui quisquam ratione saepe sequi soluta
          tenetur voluptates!
        </p>,
      )}
      <button onClick={openModal}>Open modal</button>
      {Array(10).fill(
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquid aut error esse,
          et hic illo illum molestias, natus nemo quasi qui quisquam ratione saepe sequi soluta
          tenetur voluptates!
        </p>,
      )}
    </div>
  );
}

export default {
  title: 'General/Modal',
  component: App,
};

function Template() {
  return (
    <ModalsContext>
      <App />
    </ModalsContext>
  );
}

export const Default = Template.bind({});
