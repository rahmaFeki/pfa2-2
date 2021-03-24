import React, {  useState } from "react";
import { Modal,Button } from 'react-bootstrap';

function ModelDeleteSpecialite(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
 
  function handleShow (){
    setShow(true);
  
   
  }
 
 

  return (
    
    <>
    <button type="button" onClick={handleShow} className="btn btn-danger btn-sm js-sweetalert" title="Delete" data-type="confirm"  ><i className="fa fa-trash"></i></button>
      <Modal show={show} onHide={handleClose}>
     
        <div className="sweet-alert showSweetAlert visible" data-custom-class data-has-cancel-button="true" data-has-confirm-button="true" data-allow-outside-click="false" data-has-done-function="true" data-animation="pop" data-timer="null" style={{display: 'block', marginTop: '-165px'}}><div className="sa-icon sa-error" style={{display: 'none'}}>
          <span className="sa-x-mark">
            <span className="sa-line sa-left" />
            <span className="sa-line sa-right" />
          </span>
        </div><div className="sa-icon sa-warning pulseWarning" style={{display: 'block'}}>
          <span className="sa-body pulseWarningIns" />
          <span className="sa-dot pulseWarningIns" />
        </div><div className="sa-icon sa-info" style={{display: 'none'}} /><div className="sa-icon sa-success" style={{display: 'none'}}>
          <span className="sa-line sa-tip" />
          <span className="sa-line sa-long" />
          <div className="sa-placeholder" />
          <div className="sa-fix" />
        </div><div className="sa-icon sa-custom" style={{display: 'none'}} /><h2> Êtes vous sûr?</h2>
       
        <fieldset>
          <input type="text" tabIndex={3} placeholder />
          <div className="sa-input-error" />
        </fieldset><div className="sa-error-container">
          <div className="icon">!</div>
          <p>Not valid!</p>
        </div><div className="sa-button-container">
          <button className="cancel" tabIndex={2} style={{display: 'inline-block'}} onClick={handleClose}>Annuler</button>
          <div className="sa-confirm-button-container">
            <button className="confirm" tabIndex={1} style={{display: 'inline-block', backgroundColor: 'rgb(220, 53, 69)', boxShadow: 'rgba(220, 53, 69, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset'}}   onClick={() => {  props.deleteSpecialite(props.id); handleClose(); }} >Oui, supprimer!</button><div className="la-ball-fall">
              <div />
              <div />
              <div />
            </div>
          </div>
        </div></div>
  
     
     
      </Modal>
    </>
  );
}
export default ModelDeleteSpecialite;