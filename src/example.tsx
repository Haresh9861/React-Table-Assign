import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import userdata from './Data.json'

//example data type
type Person = {
    id: number;
    name: string;
    category: string;
    subcategory: string;
    createdAt: string;
    updatedAt: string;
    price: number | undefined;
    sale_price?: number | null;  
  };

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[]=userdata;

const Example = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id', //access nested data with dot notation
        header: 'ID',
        size: 1,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'category', //normal accessorKey
        header: 'Category',
        size: 100,
      },
      {
        accessorKey: 'subcategory',
        header: 'Subcategory',
        size: 150,
      },
      {
        accessorKey: 'createdAt',
        header: 'CreatedAt',
        size: 150,
      },
      {
        accessorKey: 'updatedAt',
        header: 'UpdatedAt',
        size: 150,
      },
      {
        accessorKey: 'price',
        header: 'Price',
        size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};

export default Example;