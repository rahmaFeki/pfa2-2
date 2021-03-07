import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function DataTableFormateur(props) {
  const [datatable, setDatatable] = React.useState({
    
  });

  return (
    <MDBDataTableV5
    columns={ [
      {
        label: 'Num Cin',
        field: 'Num Cin',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Nom',
        field: 'Nom',
        width: 270,
      },
      {
        label: 'Prenom',
        field: 'Prenom',
        width: 270,
      },
      {label: 'Genre',
      field: 'Genre',
      width: 270,
    },
    {label: 'Tel',
    field: 'Tel',
    width: 270,
  },
  {label: 'Email',
  field: 'Email',
  width: 270,
},
{label: 'Salaire',
field: 'Salaire',
width: 270,
},   
     {label: 'Diponibilités',
    field: 'Disponibilités',
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
      data={props.formateurs}
      pagingTop
      searchTop
      searchBottom={false}
    />
  );
}