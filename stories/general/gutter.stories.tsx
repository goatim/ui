import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactElement, useEffect, useState } from 'react';
import { Gutter, Props } from '../../src';

export default {
  title: 'General/Gutter',
  component: Gutter,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Gutter>;

const content: ReactElement[] = [
  <a key="1" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
  </a>,
  <a key="2" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>Four</p>
  </a>,
  <a key="3" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>Five</p>
    <p>Six</p>
  </a>,
  <a key="4" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>Seven</p>
    <p>Eight</p>
    <p>Nine</p>
    <p>Ten</p>
    <p>Eleven</p>
    <p>Twelve</p>
  </a>,
  <a key="5" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>Thirteen</p>
    <p>Fourteen</p>
  </a>,
  <a key="6" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>Fifteen</p>
  </a>,
  <a key="7" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>Sixteen</p>
    <p>Seventeen</p>
    <p>Eighteen</p>
  </a>,
  <a key="8" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>Nineteen</p>
    <p>Twenty</p>
  </a>,
  <a key="9" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>Twenty-one</p>
    <p>Twenty-two</p>
    <p>Twenty-three</p>
    <p>Twenty-four</p>
  </a>,
  <a key="10" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>Twenty-five</p>
    <p>Twenty-six</p>
    <p>Twenty-seven</p>
  </a>,
  <a key="11" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>Twenty-eight</p>
    <p>Twenty-nine</p>
  </a>,
  <a key="12" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>Thirty</p>
    <p>Thirty-one</p>
  </a>,
  <a key="13" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>Thirty-two</p>
    <p>Thirty-three</p>
  </a>,
  <a key="14" href="https://www.google.com/" target="_blank" rel="noreferrer">
    <p>Thirty-four</p>
    <p>Thirty-five</p>
    <p>Thirty-six</p>
    <p>Thirty-seven</p>
  </a>,
];

function App(): ReactElement {
  const [delayedContent, setDelayedContent] = useState<ReactElement[] | undefined>();

  useEffect(() => {
    setTimeout(() => {
      setDelayedContent(content);
    }, 1000);
  }, []);

  return (
    <div style={{ width: 450, background: 'bisque' }}>
      <Gutter>{delayedContent}</Gutter>
    </div>
  );
}

const Template: ComponentStory<typeof Gutter> = ({}: Props) => <App />;

export const Default = Template.bind({});
