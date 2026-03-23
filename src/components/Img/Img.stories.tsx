import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';
import type { ImgProps } from './Img.types';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://placehold.co/800x400/png',
    alt: 'Placeholder image',
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    disabled: false,
  } as ImgProps,
};

export const Disabled: Story = {
  args: {
    src: 'https://placehold.co/800x400/png',
    alt: 'Disabled placeholder image',
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    disabled: true,
  } as ImgProps,
};
