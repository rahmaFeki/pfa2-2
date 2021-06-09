import React, {  useState } from "react";
import { Modal,Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function ModelAddSession(props) {
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
    <button type="button" className="btn btn-primary" onClick={handleShow}><i className="fa fa-plus mr-2"></i>Session</button>

      <Modal show={show} onHide={handleClose} class="sweet-alert">
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Session</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row clearfix"> <div className="col-md-1 col-sm-2"> </div>  <div className="col-md-6 col-sm-6 error"> 
       {msgError}
        </div></div>

<div className="row clearfix">
                              
                              <div className="col-md-12 col-sm-12">
                                  <div className="form-group">
                                      <label>Libellé</label>
                                      <input type="text" className="form-control"  placeholder="Entrer Libelle"
                                       value= {props.libelle} onChange = {props.changeHandlerLibelle} id="libelle" />
                                  </div>
                              </div>
                            
                           
</div>
<div className="row clearfix">
                              
                              <div className="col-md-6 col-sm-12">
                                  <div className="form-group">
                                      <label>Date Début </label>
                                    
                                     <DatePicker selected= {props.start}  onChange={ props.changeHandlerStart } className="form-control" dateFormat="yyyy-mm-dd" />
                                  </div>
                              </div>
                              <div className="col-md-6 col-sm-12">
                                  <div className="form-group">
                                      <label>Date Fin</label>
                                    
                                     <DatePicker selected= {props.end}  onChange={ props.changeHandlerEnd } className="form-control" dateFormat="yyyy-mm-dd" />
                                  </div>
                              </div>
                           
</div>

      <div className="row clearfix">
                              
                              <div className="col-md-6 col-sm-12">
                                  <div className="form-group">
                                      <label>Nombre Participant</label>
                                      <input type="text" className="form-control"  placeholder="Entrer Nombre Participant"
                                       value= {props.nbParticipant} onChange = {props.changeHandlerNbParticipant}  />
                                  </div>
                              </div>
                              <div className="col-md-6 col-sm-12">
                                  <div className="form-group">
                                      <label>Ajouter séances</label>
                                      <button type="button" className="btn btn-primary " onClick={handleShow}><i className="fa fa-plus mr-2 rounded"></i>Session</button>
                                  </div>
                              </div>
                            
                           
</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={() => {handleSubmit(); props.saveSession(); }} type="submit">
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelAddSession;