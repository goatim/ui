import { ReactElement, useCallback } from 'react';
import { ModalsContext, ThreeDSecure, useModals } from '../../src';

export default {
  title: 'Payment/ThreeDSecure',
  component: ThreeDSecure,
  argTypes: {},
};

function App(): ReactElement {
  const { pushModal } = useModals();
  const openModal = useCallback(() => {
    pushModal({
      type: 'overlay',
      disableDismiss: true,
      element: (
        <ThreeDSecure
          url="https://app.demo.goatim.com/end-3d-secure"
          onDone={() => console.log('3DSecure ended !')}
        />
      ),
    });
  }, [pushModal]);
  return (
    <div>
      {Array(10).fill(
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquid aut error esse,
          et hic illo illum molestias, natus nemo quasi qui quisquam ratione saepe sequi soluta
          tenetur voluptates!
        </p>,
      )}
      <button onClick={openModal}>Open 3DSecure</button>
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

function Template() {
  return (
    <ModalsContext>
      <App />
    </ModalsContext>
  );
}

export const Default = Template.bind({});
