import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JSXElementConstructor } from 'react';
import OnboardingCarousel, {
  OnboardingCarouselSize,
} from '../../src/onboarding/onboardingCarousel';

interface Props {
  onDismiss: () => unknown;
  size?: OnboardingCarouselSize;
}

export default {
  title: 'Onboarding/OnboardingCarousel',
  component: OnboardingCarousel,
  argTypes: {
    size: {
      options: ['narrow', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<JSXElementConstructor<Props>>;

const Template: ComponentStory<JSXElementConstructor<Props>> = ({ onDismiss, size }: Props) => (
  <div
    style={{
      padding: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <OnboardingCarousel onDismiss={() => console.log('dismiss')} size={size} username="John" />
  </div>
);

export const Default = Template.bind({});
