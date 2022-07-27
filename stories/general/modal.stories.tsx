import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor, useCallback } from 'react';
import { useModals, ModalsContext } from '../../src';

interface Props {}

function App() {
  const { pushModal } = useModals();
  const openModal = useCallback(() => {
    pushModal({
      component: ({ dismissModal }) => (
        <div>
          <h1>Modal !</h1>
          {Array(10).fill(
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquid aut error
              esse, et hic illo illum molestias, natus nemo quasi qui quisquam ratione saepe sequi
              soluta tenetur voluptates!
            </p>,
          )}
          <button onClick={dismissModal}>Dismiss !</button>
        </div>
      ),
      onDismiss: () => console.log('First modal dismissed !'),
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
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({}: Props) => (
  <ModalsContext>
    <App />
  </ModalsContext>
);

export const Default = Template.bind({});
