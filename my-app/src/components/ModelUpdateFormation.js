import React, {  useState } from "react";

import { Modal,Button } from 'react-bootstrap';
import FormationService from '../services/FormationService'
function ModelUpdateFormation(props) {
  const [show, setShow] = useState(false);
  const [updatedNom, setUpdatedNom] = useState(props.updatedNom);
  const [updatedImg, setUpdatedImg] = useState(props.updatedImg);
  const [updatedObjectif, setUpdatedObjectif] = useState(props.updatedObjectif);
  const [updatedNiveau, setUpdatedNiveau] = useState(props.updatedNiveau);
  const [updatedEtat, setUpdatedEtat] = useState(props.updatedEtat);
  const [updatedPrix, setUpdatedPrix] = useState(props.updatedPrix);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  
  const changeNomHandler = (event) => {
    setUpdatedNom( event.target.value );
}
const changeNiveauHandler = (event) => {
  setUpdatedNiveau( event.target.value );
}
const changeImgHandler = (event) => {
  setUpdatedImg( event.target.value );
}
const changeObjectifHandler = (event) => {
  setUpdatedObjectif( event.target.value );
}
const changePrixHandler = (event) => {
  setUpdatedPrix( event.target.value );
}
const changeEtatHandler = (event) => {
  setUpdatedEtat( event.target.value );
}
  const  editFormation = () => {
    
    let formation = {idFormation:props.updatedIdFormation, nom: updatedNom,objectif:updatedObjectif, niveau:updatedObjectif,prix:updatedPrix,etat:updatedEtat,img:' ' };
    console.log(formation)
FormationService.updateFormation(formation ).then( res => {
  props.handleUpdate(formation)
});

}
  return (
    <>
   <button type="button" className="btn btn-primary btn-sm" title="Edit" onClick={handleShow}  style={{marginRight: '5px'}}><i className="fa fa-edit"></i></button>

      <Modal show={show } onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mise à jour Formation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row clearfix"> <div className="col-md-1 col-sm-2"> </div>  <div className="col-md-6 col-sm-6 error"> 
    
        </div></div>
        <div className="row clearfix">
                                     
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Libellé</label>
                                                    <input type="text" className="form-control"  
                                                    id="cin" value= {updatedNom} onChange = {changeNomHandler}  />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Niveau</label>
                                                    <input type="text" className="form-control" id="nom" value = {updatedNiveau} onChange = {changeNiveauHandler}  />
                                                </div>
                                            </div>
                                         
         </div>
         <div className="row clearfix">
                                     
                           
                              
                                  
  </div>

  <div className="row clearfix">
                                     
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Prix</label>
                                             <input type="text" className="form-control"  
                                             id="tel" value= {updatedPrix} onChange = {changePrixHandler}  />
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Image</label>
                                             <input type="file" value= {updatedImg} onChange = {changeImgHandler} />
                                         </div>
                                     </div>
                                  
  </div>
  <div className="row clearfix">
                                     
                                     <div className="col-md-8 col-sm-12">
                                         <div className="form-group">
                                             <label>Objectif</label>
                                             <input type="text" className="form-control"  
                                             id="tel" value= {updatedObjectif} onChange = {props.changeObjectifHandler}  />
                                         </div>
                                     </div>
                                     <div className="col-md-4 col-sm-4">
                                         <div className="form-group">
                                             <label>Etat</label>
                                             <select class="form-control input-height"   value = {updatedEtat}
                                                    onChange = {changeEtatHandler}>
                                                    <option value="">Select...</option>
                                                    <option value="crée">Crée</option>
                                                    <option value="lancée">Lancée</option>
                                                    <option value="achevée">Achevée</option>
                                                </select>
                                         </div>
                                     </div>           
                                  
  </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={() => {handleClose(); editFormation();}}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelUpdateFormation;