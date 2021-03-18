import React, {  useState,useEffect } from "react";
import { Modal,Button } from 'react-bootstrap';
import DomaineService from '../services/DomaineService'
function ModelAddSpec(props) {
  const [show, setShow] = useState(false);
  const [domaines, setDomaines] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button type="button" class="btn btn-primary" onClick={handleShow}><i class="fa fa-plus mr-2"></i>Spécialité</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Spécialité</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row clearfix">
                                     
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Libellé</label>
                                                    <input type="text" className="form-control"  value = {props.libelle} onChange = {props.changeHandlerLibelle} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Domaine</label>
                                                    <select class="form-control input-height" name="gender"  value = {props.name} 
                                                    onChange = {props.changeHandlerDomaine}>
                                                    <option value="">Select...</option>
                                                    
                                                {
                                                    props.domaines.map(
                                                        domaine =>(
                                                         
                                                                <option key={domaine.idDomaine} value= {domaine.idDomaine}>{domaine.nom}</option> 
                                                
                                                    ))
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
          <Button variant="primary" onClick={() => {handleClose(); props.addSpecialite();}}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelAddSpec;