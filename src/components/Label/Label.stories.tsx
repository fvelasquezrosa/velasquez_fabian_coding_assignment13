import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'New',
    disabled: false,
    color: '#111827',
    backgroundColor: '#e5e7eb',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    disabled: true,
    color: '#111827',
    backgroundColor: '#e5e7eb',
  },
};
