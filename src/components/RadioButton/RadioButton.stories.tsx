import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';
import type { RadioButtonProps } from './RadioButton.types';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    accentColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Option A',
    name: 'example',
    checked: false,
    disabled: false,
    accentColor: '#2563eb',
  } as RadioButtonProps,
};

export const Checked: Story = {
  args: {
    label: 'Option A',
    name: 'example',
    checked: true,
    disabled: false,
    accentColor: '#2563eb',
  } as RadioButtonProps,
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    name: 'example',
    checked: false,
    disabled: true,
    accentColor: '#2563eb',
  } as RadioButtonProps,
};
