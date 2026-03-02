import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableCell } from './TableCell';
import type { TableCellProps } from './TableCell.types';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args: TableCellProps) => (
    <table>
      <tbody>
        <tr>
          <TableCell {...args}>Fabian</TableCell>
        </tr>
      </tbody>
    </table>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args: TableCellProps) => (
    <table>
      <tbody>
        <tr>
          <TableCell {...args}>Disabled</TableCell>
        </tr>
      </tbody>
    </table>
  ),
};