import React, {  useState } from "react";
import { Modal,Button } from 'react-bootstrap';
function ModelAddFormateur(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
 

  return (
    <>
    <button type="button" class="btn btn-primary" onClick={handleShow}><i class="fa fa-plus mr-2"></i>Formateur</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Formateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row clearfix">
                                     
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Num Cin</label>
                                                    <input type="text" className="form-control"  
                                                    value= {props.cin} onChange = {props.changeHandlerCin}  />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Nom</label>
                                                    <input type="text" className="form-control" value = {props.nom} onChange = {props.changeHandlerNom}  />
                                                </div>
                                            </div>
                                         
         </div>
         <div className="row clearfix">
                                     
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Prénom</label>
                                             <input type="text" className="form-control"  
                                             value= {props.prenom} onChange = {props.changeHandlerPrenom}  />
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Genre</label>
                                             <select class="form-control input-height" name="gender"  value = {props.genre} 
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
                                             value= {props.tel} onChange = {props.changeHandlerTel}  />
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Email</label>
                                             <input type="text" className="form-control" value = {props.email} onChange = {props.changeHandlerEmail}  />
                                         </div>
                                     </div>
                                  
  </div>
  <div className="row clearfix">
                                     
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Salaire</label>
                                             <input type="text" className="form-control"  
                                             value= {props.salaire} onChange = {props.changeHandlerSalaire}  />
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Mot De Pass</label>
                                             <input type="password" className="form-control" value = {props.mp} onChange = {props.changeHandlerMp}  />
                                         </div>
                                     </div>
                                  
  </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleClose(); props.saveFormateur();}}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelAddFormateur;