import { ComponentStory, ComponentMeta } from '@storybook/react';
import Gutter, { Props } from '../../src/general/gutter';

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

const Template: ComponentStory<typeof Gutter> = ({}: Props) => (
  <div style={{ width: 450, background: 'bisque' }}>
    <Gutter>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
      </a>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <p>Four</p>
      </a>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <p>Five</p>
        <p>Six</p>
      </a>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <p>Seven</p>
        <p>Eight</p>
        <p>Nine</p>
        <p>Ten</p>
        <p>Eleven</p>
        <p>Twelve</p>
      </a>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <p>Thirteen</p>
        <p>Fourteen</p>
      </a>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <p>Fifteen</p>
      </a>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <p>Sixteen</p>
        <p>Seventeen</p>
        <p>Eighteen</p>
      </a>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <p>Nineteen</p>
        <p>Twenty</p>
      </a>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <p>Twenty-one</p>
        <p>Twenty-two</p>
        <p>Twenty-three</p>
        <p>Twenty-four</p>
      </a>
      {/* <a href="https://www.google.com/" target="_blank" rel="noreferrer"> */}
      {/*  <p>Twenty-five</p> */}
      {/*  <p>Twenty-six</p> */}
      {/*  <p>Twenty-seven</p> */}
      {/* </a> */}
      {/* <a href="https://www.google.com/" target="_blank" rel="noreferrer"> */}
      {/*  <p>Twenty-eight</p> */}
      {/*  <p>Twenty-nine</p> */}
      {/* </a> */}
      {/* <a href="https://www.google.com/" target="_blank" rel="noreferrer"> */}
      {/*  <p>Thirty</p> */}
      {/*  <p>Thirty-one</p> */}
      {/* </a> */}
      {/* <a href="https://www.google.com/" target="_blank" rel="noreferrer"> */}
      {/*  <p>Thirty-two</p> */}
      {/*  <p>Thirty-three</p> */}
      {/* </a> */}
      {/* <a href="https://www.google.com/" target="_blank" rel="noreferrer"> */}
      {/*  <p>Thirty-four</p> */}
      {/*  <p>Thirty-five</p> */}
      {/*  <p>Thirty-six</p> */}
      {/*  <p>Thirty-seven</p> */}
      {/* </a> */}
    </Gutter>
  </div>
);

export const Default = Template.bind({});
