import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';
import type { CardProps } from './Card.types';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    body: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    body: 'This is a simple card body. Use it for info, content blocks, or layouts.',
    disabled: false,
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
  } as CardProps,
};

export const NoTitle: Story = {
  args: {
    body: 'This card has no title, only body text.',
    disabled: false,
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
  } as CardProps,
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    body: 'Disabled state should look greyed out and not interactive.',
    disabled: true,
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
  } as CardProps,
};