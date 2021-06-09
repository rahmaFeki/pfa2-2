import React, {  useState } from "react";
import { Modal,Button } from 'react-bootstrap';
import { Multiselect } from "multiselect-react-dropdown";
function ModelAddFormation(props) {
  const [show, setShow] = useState(false);
  const [msgError, setMsgError] = useState('');
  const [selectedImg, setSelectedImg] = useState('');
  const handleClose = () => setShow(false);


 
  function handleShow (){
    setMsgError('');
    setShow(true);
   
  }
  function  selectFile(event) {
   
      setSelectedImg( event.target.files);

  }
  function handleSubmit() {

      props.saveFormation();
   handleClose();
  
   }
  return (
    <>
    <button type="button" class="btn btn-primary" onClick={handleShow}><i class="fa fa-plus mr-2"></i>Formation</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Formation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row clearfix"> <div className="col-md-1 col-sm-2"> </div>  <div className="col-md-6 col-sm-6 error"> 
       {msgError}
        </div></div>
        <div className="row clearfix">
                                     
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Libellé</label>
                                                    <input type="text" placeholder="Entrer Libellé" className="form-control"  
                                                    id="cin" value= {props.nom} onChange = {props.changeHandlerNom}  />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Niveau</label>
                                                    <input type="text" placeholder="Entrer Niveau" className="form-control" id="nom" value = {props.niveau} onChange = {props.changeHandlerNiveau}  />
                                                    
                                                </div>
                                            </div>
                                         
         </div>
         <div className="row clearfix">
                                     
                           
                              
                                  
  </div>
  <div className="row clearfix">
                                     
                                     <div className="col-md-12 col-sm-12">
                                         <div className="form-group">
                                             <label>Objectif</label>
                                             <input type="text" className="form-control"  placeholder="Entrer Objectif"
                                             id="tel" value= {props.objectif} onChange = {props.changeHandlerObjectif}  />
                                         </div>
                                     </div>
                                   
                                  
  </div>
  <div className="row clearfix">
                                     
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Prix</label>
                                             <input type="text" placeholder="Entrer Prix" className="form-control"  
                                             id="tel" value= {props.prix} onChange = {props.changeHandlerPrix}  />
                                         </div>
                                     </div>
                                     <div className="col-md-6 col-sm-12">
                                         <div className="form-group">
                                             <label>Image</label>
                                             <input type="file"  value= {props.img} onChange = {props.changeHandlerImg} />
                                         </div>
                                     </div>
                                  
  </div>
  <div className="row clearfix">
                                     
                                     <div className="col-md-12 col-sm-12">
                                         <div className="form-group">
                                             <label>Specialites</label>
                                             <Multiselect options={props.objectArray} onSelect={props.onSelect} onRemove={props.onRemove} displayValue="libelle" />
                                         </div>
                                     </div>
                                   
                                  
  </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={() => {handleSubmit();  }}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelAddFormation;