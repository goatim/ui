import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSXElementConstructor, ReactElement, useCallback } from 'react';
import { ModalsContext, ThreeDSecure, useModals } from '../../src';

interface Props {}

export default {
  title: 'Payment/ThreeDSecure',
  component: ThreeDSecure,
  argTypes: {},
} as ComponentMeta<JSXElementConstructor<Props>>;

function App(): ReactElement {
  const { pushModal } = useModals();
  const openModal = useCallback(() => {
    pushModal({
      type: 'overlay',
      disableDismiss: true,
      element: (
        <ThreeDSecure
          url="https://app.goatim.com/end-3d-secure"
          onDone={() => console.log('Returned !')}
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

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => {
  return (
    <ModalsContext>
      <App />
    </ModalsContext>
  );
};

export const Default = Template.bind({});

Default.args = {};
