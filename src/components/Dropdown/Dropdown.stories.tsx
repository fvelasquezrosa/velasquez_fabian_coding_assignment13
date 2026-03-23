import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

export const Default: Story = {
  args: {
    options,
    disabled: false,
    backgroundColor: '#ffffff',
  },
};

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
    backgroundColor: '#ffffff',
  },
};
