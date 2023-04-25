import { Model } from '@goatim/client';
import { Table, TableColumn } from '../../src';

interface Props {
  active?: boolean;
}

export default {
  title: 'General/Table',
  component: Table,
  argTypes: {
    active: {
      control: {
        type: 'boolean',
      },
    },
  },
};

interface Data extends Model {
  name?: string;
  age?: number;
  birthday?: string;
  tags?: string[];
  active?: boolean;
}

const columns: TableColumn<Data>[] = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'birthday', label: 'Birthday', type: 'date' },
  { key: 'tags', label: 'Tags' },
  { key: 'active', label: 'Active' },
];

const data: Data[] = [
  {
    id: '1',
    name: 'Paul',
    age: 42,
    birthday: '2021-09-29T16:08:39.129+00:00',
    tags: ['production', 'staging'],
    active: true,
  },
  {
    id: '2',
    name: 'Patrick',
    age: 42,
    birthday: '2021-09-29T16:08:39.129+00:00',
    tags: ['production', 'staging'],
    active: true,
  },
  {
    id: '3',
    name: 'Fred',
    age: 56,
    birthday: '2021-09-29T16:08:39.129+00:00',
    tags: ['production', 'staging'],
    active: false,
  },
];

function Template() {
  return <Table<Data> columns={columns} data={data} />;
}

export const Default = Template.bind({});
