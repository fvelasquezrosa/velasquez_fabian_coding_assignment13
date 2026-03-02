import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
    variant: { control: 'select', options: ['body', 'caption', 'heading'] },
    disabled: { control: 'boolean' },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    text: 'This is body text.',
    variant: 'body',
    disabled: false,
    color: '#111827',
    backgroundColor: 'transparent',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled text',
    variant: 'body',
    disabled: true,
    color: '#111827',
    backgroundColor: 'transparent',
  },
};