import React, {  useState, useEffect} from "react";
import { Modal,Button } from 'react-bootstrap';

import SpecialiteService from '../services/SpecialiteService';
import DomaineService from '../services/DomaineService';
function ModelUpdateSpec(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [updatedLibelle, setUpdatedLibelle] = useState(props.updatedLibelle);
  const [updatedDomaine, setUpdatedDomaine] = useState(props.updatedDomaine);

  const changeLibelleHandler = (event) => {
    setUpdatedLibelle( event.target.value );
}
const changeDomaineHandler = (event) => {
  console.log(event.target.value)
  setUpdatedDomaine( event.target.value );
}
  const handleShow = () => setShow(true);
 
  const editSpec = () => {
    let specialite = {idSpecialite:props.idSpecialite, libelle:updatedLibelle, domaine: {idDomaine:updatedDomaine} };

    SpecialiteService.updateSpecialite(specialite).then( res => {
      props.handleUpdate(specialite)
});
}

  return (
    <>
    <button type="button" className="btn btn-primary btn-sm" title="Edit" onClick={handleShow} style={{marginRight: '5px'}}><i className="fa fa-edit"></i></button>

      <Modal show={show } onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mise à jour Spécialité</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row clearfix">
                                     
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Libellé</label>
                                                    <input type="text" className="form-control"  
                                                    value={updatedLibelle} onChange = {changeLibelleHandler}  />
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                         
                                                    <label>Domaine</label>
                                                    <select class="form-control input-height"   value = {updatedDomaine}
                                                    onChange = {changeDomaineHandler}>
                                                    <option value="">Select...</option>
                                                    {
                                                    props.domaines.map(
                                                        domaine =>
                                                         
                                                                <option key={domaine.idDomaine} value= {domaine.idDomaine} >{domaine.nom}</option> 
                                                
                                                    )
                                                }
                                                </select>
                                                </div>
                                            </div>
                                         
                                        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={() => {handleClose(); editSpec();}}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelUpdateSpec;