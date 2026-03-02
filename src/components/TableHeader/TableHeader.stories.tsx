import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableHeader } from './TableHeader';
import type { TableHeaderProps } from './TableHeader.types';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args: TableHeaderProps) => (
    <table>
      <TableHeader {...args}>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </TableHeader>
    </table>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args: TableHeaderProps) => (
    <table>
      <TableHeader {...args}>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </TableHeader>
    </table>
  ),
};