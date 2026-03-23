import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';
import type { TableProps } from './Table.types';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args: TableProps) => (
    <Table {...args}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fabian</td>
          <td>24</td>
        </tr>
      </tbody>
    </Table>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args: TableProps) => (
    <Table {...args}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fabian</td>
          <td>24</td>
        </tr>
      </tbody>
    </Table>
  ),
};
