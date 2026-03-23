import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableFooter } from './TableFooter';
import type { TableFooterProps } from './TableFooter.types';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args: TableFooterProps) => (
    <table>
      <TableFooter {...args}>
        <tr>
          <td>Total</td>
          <td>1</td>
        </tr>
      </TableFooter>
    </table>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args: TableFooterProps) => (
    <table>
      <TableFooter {...args}>
        <tr>
          <td>Disabled Footer</td>
          <td>1</td>
        </tr>
      </TableFooter>
    </table>
  ),
};
