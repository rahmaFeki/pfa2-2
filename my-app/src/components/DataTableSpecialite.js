import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function DataTableSpecialite(props) {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Réference',
        field: 'Réference',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Libellé',
        field: 'Libellé',
        width: 270,
      },

      {
        label: 'Action',
        field: 'Action',
        sort: 'enabled',
        width: 100,
      },
    ],
    
  });

  return (
    <MDBDataTableV5
    columns={ [
      {
        label: 'Réference',
        field: 'Réference',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Libellé',
        field: 'Libellé',
        width: 270,
      },

      {
        label: 'Action',
        field: 'Action',
        sort: 'enabled',
        width: 100,
      },
    ]}
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={props.specialites}
      pagingTop
      searchTop
      searchBottom={false}
    />
  );
}