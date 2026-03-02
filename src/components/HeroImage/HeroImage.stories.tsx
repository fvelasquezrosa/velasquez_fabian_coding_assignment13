import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';
import type { HeroImageProps } from './HeroImage.types';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
    overlayColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    imageUrl: 'https://placehold.co/1200x600/png',
    title: 'Hero Title',
    subtitle: 'This is a hero subtitle for your UI library.',
    height: '280px',
    disabled: false,
    overlayColor: 'rgba(0, 0, 0, 0.45)',
  } as HeroImageProps,
};

export const Disabled: Story = {
  args: {
    imageUrl: 'https://placehold.co/1200x600/png',
    title: 'Disabled Hero',
    subtitle: 'Disabled state should look greyed out.',
    height: '280px',
    disabled: true,
    overlayColor: 'rgba(0, 0, 0, 0.45)',
  } as HeroImageProps,
};