import React, {  useState, useEffect} from "react";
import { Modal,Button } from 'react-bootstrap';
import { useHistory } from "react-router";
import SpecialiteService from '../services/SpecialiteService';
import DomaineService from '../services/DomaineService';
function ModelUpdateSpec(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [domaines, setDomaines] = useState([]);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const editSpec = () => {
    let specialite = {idSpecialite:props.idSpecialite, libelle:props.updatedLibelle, domaine: props.updatedName };
SpecialiteService.updateSpecialite(specialite).then( res => {
  history.push({
    pathname:  "/specialites"
 
 });
});
}
useEffect(() => {
  DomaineService.getDomaines().then((res) => {
    setDomaines( res.data );
  
});
  });
  return (
    <>
   <button type="button" className="btn btn-icon btn-sm" title="Edit" onClick={handleShow}><i className="fa fa-edit"></i></button>

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
                                                    value= {props.updatedLibelle} onChange = {props.changeHandlerLibelleUpdate}  />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                    <label>Domaine</label>
                                                    <select class="form-control input-height" name="gender"  value = {props.name} 
                                                    onChange = {props.changeHandlerName}>
                                                    <option value="">Select...</option>
                                                    {
                                                    domaines.map(
                                                        domaine =>
                                                         
                                                                <option value= {domaine.idDomaine}>{domaine.nom}</option> 
                                                
                                                    )
                                                }
                                                </select>
                                                </div>
                                            </div>
                                         
                                        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
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