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
      <div>
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
      </div>
      <div>
        <p>Four</p>
      </div>
      <div>
        <p>Five</p>
        <p>Six</p>
      </div>
      <div>
        <p>Seven</p>
        <p>Eight</p>
        <p>Nine</p>
        <p>Ten</p>
        <p>Eleven</p>
        <p>Twelve</p>
      </div>
      <div>
        <p>Thirteen</p>
        <p>Fourteen</p>
      </div>
      <div>
        <p>Fifteen</p>
      </div>
      <div>
        <p>Sixteen</p>
        <p>Seventeen</p>
        <p>Eighteen</p>
      </div>
      <div>
        <p>Nineteen</p>
        <p>Twenty</p>
      </div>
      <div>
        <p>Twenty-one</p>
        <p>Twenty-two</p>
        <p>Twenty-three</p>
        <p>Twenty-four</p>
      </div>
      <div>
        <p>Twenty-five</p>
        <p>Twenty-six</p>
        <p>Twenty-seven</p>
      </div>
      <div>
        <p>Twenty-eight</p>
        <p>Twenty-nine</p>
      </div>
      <div>
        <p>Thirty</p>
        <p>Thirty-one</p>
      </div>
      <div>
        <p>Thirty-two</p>
        <p>Thirty-three</p>
      </div>
      <div>
        <p>Thirty-four</p>
        <p>Thirty-five</p>
        <p>Thirty-six</p>
        <p>Thirty-seven</p>
      </div>
    </Gutter>
  </div>
);

export const Default = Template.bind({});
