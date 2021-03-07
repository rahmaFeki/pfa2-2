import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function DataTableDomaines(props) {
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
    rows: [
      {
        Réference: 'Tiger Nixon',
        Libellé: 'System Architect',
        Action:<div><button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button><button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button><button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button></div>,
      },
      {
        Réference: 'Tiger Nixon',
        Libellé: 'System Architect',
        Action:<div><button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button><button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button><button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button></div>,
      },
      {
        Réference: 'Tiger Nixon',
        Libellé: 'System Architect',
        Action:<div><button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button><button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button><button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button></div>,
      },
      {
        Réference: 'Tiger Nixon',
        Libellé: 'System Architect',
        Action:<div><button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button><button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button><button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button></div>,
      },
      {
        Réference: 'Tiger Nixon',
        Libellé: 'System Architect',
        Action:<div><button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button><button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button><button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button></div>,
      },
      {
        Réference: 'Tiger Nixon',
        Libellé: 'System Architect',
        Action:<div><button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button><button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button><button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button></div>,
      },
            {
        Réference: 'Tiger Nixon',
        Libellé: 'System Architect',
        Action:<div><button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button><button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button><button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button></div>,
      },
      {
        Réference: 'Tiger Nixon',
        Libellé: 'System Architect',
        Action:<div><button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button><button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button><button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button></div>,
      },
      {
        Réference: 'Tiger Nixon',
        Libellé: 'System Architect',
        Action:<div><button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye"></i></button><button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit"></i></button><button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger"></i></button></div>,
      },
    ],
  });

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={props.domaines}
      pagingTop
      searchTop
      searchBottom={false}
    />
  );
}