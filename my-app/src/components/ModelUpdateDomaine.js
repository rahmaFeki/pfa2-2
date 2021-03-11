import React, {  useState } from "react";
import { Modal,Button } from 'react-bootstrap';
import DomaineService from '../services/DomaineService'
function ModelUpdateDomaine(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
 
  const editDomaine = () => {
    let domaine = {id:props.updateId, name: props.updatedLibelle };
DomaineService.updateDomaine(domaine,props.updatedId ).then( res => {
    props.history.push('/domaines');
});
}
  return (
    <>
   <button type="button" className="btn btn-icon btn-sm" title="Edit" onClick={handleShow}><i className="fa fa-edit"></i></button>

      <Modal show={show } onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mise à jour Domaine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row clearfix">
                                     
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Référence</label>
                                                    <input type="text" className="form-control"  
                                                    value= {props.updatedId} onChange = {props.changeHandlerIdUpdate}  />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Libellé</label>
                                                    <input type="text" className="form-control" value = {props.updatedLibelle} onChange = {props.changeHandlerLibelleUpdate}  />
                                                </div>
                                            </div>
                                         
                                        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleClose(); editDomaine();}}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelUpdateDomaine;