import React from 'react';
import { Button } from './components/Button';
import { Label } from './components/Label';
import { Text } from './components/Text';
import { Card } from './components/Card';
import { Dropdown } from './components/Dropdown';
import { RadioButton } from './components/RadioButton';
import { Img } from './components/Img';
import { HeroImage } from './components/HeroImage';
import { Table } from './components/Table';
import { TableHeader } from './components/TableHeader';
import { TableRow } from './components/TableRow';
import { TableCell } from './components/TableCell';
import { TableFooter } from './components/TableFooter';

const App: React.FC = () => {
  return (
    <div
      style={{
        padding: '24px',
        display: 'grid',
        gap: '20px',
        maxWidth: 980,
        margin: '0 auto',
      }}
    >
      <h1 style={{ margin: 0 }}>UI Component Library</h1>
      <p style={{ margin: 0 }}>
        Production build served with Docker on port 8018.
      </p>

      <div
        style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Button label="Primary Button" />
        <Button label="Disabled Button" disabled />
        <Label text="New" />
        <Label text="Disabled" disabled />
      </div>

      <div style={{ display: 'grid', gap: 8 }}>
        <Text text="Heading text" variant="heading" />
        <Text text="Body text example" variant="body" />
        <Text text="Caption text (disabled)" variant="caption" disabled />
      </div>

      <Card
        title="Card Title"
        body="This is a card component. It supports a disabled state and styling props."
      />

      <div
        style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Dropdown
          options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
          ]}
        />
        <RadioButton label="Option A" name="example" />
        <RadioButton label="Disabled" name="example" disabled />
      </div>

      <Img src="https://placehold.co/900x250/png" alt="Sample image" />

      <HeroImage
        imageUrl="https://placehold.co/1200x500/png"
        title="Hero Image"
        subtitle="Overlay text on a background image."
      />

      <div style={{ overflowX: 'auto' }}>
        <Table>
          <TableHeader>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </TableHeader>

          <tbody>
            <TableRow>
              <TableCell>Fabian</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
            <TableRow disabled>
              <TableCell disabled>Disabled Row</TableCell>
              <TableCell disabled>--</TableCell>
            </TableRow>
          </tbody>

          <TableFooter>
            <tr>
              <td>Total</td>
              <td>2</td>
            </tr>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default App;
