import React, {  useState } from "react";
import { Modal,Button } from 'react-bootstrap';
function ModelAddDomaine(props) {
  const [show, setShow] = useState(false);
  
  const [msgError, setMsgError] = useState('');
  const handleClose = () => setShow(false);
  
 
  function handleShow (){
    setMsgError('');
    setShow(true);
  
   
  }
 
  function handleSubmit() {
    
   if(document.getElementById('libelle').value===''){
    setMsgError('Le champ libellé est obligatoire');
   }
   else
  handleClose();
  }

  return (
    
    <>
    <button type="button" className="btn btn-primary" onClick={handleShow}><i className="fa fa-plus mr-2"></i>Domaine</button>

      <Modal show={show} onHide={handleClose} class="sweet-alert">
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Domaine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row clearfix"> <div className="col-md-1 col-sm-2"> </div>  <div className="col-md-6 col-sm-6 error"> 
       {msgError}
        </div></div>
        <div className="row clearfix">
        
                                    
                                            <div className="col-md-12 col-sm-12">
                                                <div className="form-group">
                                                    <label>Libellé</label>
                                                    <input type="text" className="form-control" id="libelle" value = {props.libelle} onChange = {props.changeHandlerLibelle}  />
                                                </div>
                                            </div>
                                         
                                        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={() => {handleSubmit();  props.addDomaine(); }} type="submit">
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelAddDomaine;