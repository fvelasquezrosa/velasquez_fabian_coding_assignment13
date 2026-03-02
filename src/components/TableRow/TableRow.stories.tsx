import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableRow } from './TableRow';
import type { TableRowProps } from './TableRow.types';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args: TableRowProps) => (
    <table>
      <tbody>
        <TableRow {...args}>
          <td>Fabian</td>
          <td>24</td>
        </TableRow>
      </tbody>
    </table>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args: TableRowProps) => (
    <table>
      <tbody>
        <TableRow {...args}>
          <td>Disabled</td>
          <td>24</td>
        </TableRow>
      </tbody>
    </table>
  ),
};