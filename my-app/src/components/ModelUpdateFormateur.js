import React, {  useState } from "react";
import { useHistory } from "react-router";
import { Modal,Button } from 'react-bootstrap';
import FormateurService from '../services/FormateurService'
function ModelUpdateFormateur(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  const history = useHistory();
  const editFormateur = () => {

    let formateur = {idUser:props.updatedId, nom: props.updatedNom };
FormateurService.updateFormateur(formateur).then( res => {
  history.push({
    pathname:  "/formateurs"
 
 });
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
        <div className="row clearfix"> <div className="col-md-1 col-sm-2"> </div>  <div className="col-md-6 col-sm-6 error"> 
       {msgError}
        </div></div>
        <div className="row clearfix">
                                     
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Num Cin</label>
                                                    <input type="text" className="form-control"  
                                                    id="cin" value= {props.cin} onChange = {props.changeHandlerCin}  />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Nom</label>
                                                    <input type="text" className="form-control" id="nom" value = {props.nom} onChange = {props.changeHandlerNom}  />
                                                </div>
                                            </div>
                                         
         </div>
         <div className="row clearfix">
                                     
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Prénom</label>
                                             <input type="text" className="form-control"  
                                             id="prenom" value= {props.prenom} onChange = {props.changeHandlerPrenom}  />
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Genre</label>
                                             <select class="form-control input-height" id="genre" name="gender"  value = {props.genre} 
                                                    onChange = {props.changeHandlerGenre}>
                                                    <option value="">Select...</option>
                                                    <option value="Category 1">Homme</option>
                                                    <option value="Category 2">Femme</option>
                                                </select>
                                         </div>
                                     </div>
                                  
  </div>
  <div className="row clearfix">
                                     
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Tel</label>
                                             <input type="text" className="form-control"  
                                             id="tel" value= {props.tel} onChange = {props.changeHandlerTel}  />
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Email</label>
                                             <input type="text" className="form-control" id="email" value = {props.email} onChange = {props.changeHandlerEmail}  />
                                         </div>
                                     </div>
                                  
  </div>
  <div className="row clearfix">
                                     
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Salaire</label>
                                             <input type="text" className="form-control"  
                                             id="salaire" value= {props.salaire} onChange = {props.changeHandlerSalaire}  />
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Mot De Pass</label>
                                             <input type="password" className="form-control" id="mp" value = {props.mp} onChange = {props.changeHandlerMp}  />
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