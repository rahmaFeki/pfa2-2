import React, {  useState } from "react";

import { Modal,Button } from 'react-bootstrap';
import DomaineService from '../services/DomaineService'
function ModelUpdateDomaine(props) {
  const [show, setShow] = useState(false);
  const [updatedLibelle, setUpdatedLibelle] = useState(props.updatedLibelle);
 
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  
  const changeLibelleHandler = (event) => {
    setUpdatedLibelle( event.target.value );
}
  const  editDomaine = () => {
    
    let domaine = {idDomaine:props.updatedId, nom: updatedLibelle };
    console.log(domaine)
DomaineService.updateDomaine(domaine ).then( res => {
  props.handleUpdate(domaine)
});

}
  return (
    <>
   <button type="button" className="btn btn-primary btn-sm" title="Edit" onClick={handleShow}  style={{marginRight: '5px'}}><i className="fa fa-edit"></i></button>

      <Modal show={show } onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mise à jour Domaine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row clearfix">
                                  
                                 
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label>Libellé</label>
     <input type="text" className="form-control" id="label" value = {updatedLibelle}
                 onChange = {changeLibelleHandler}  />
                                                </div>
                                            </div>
                                         
                                        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
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