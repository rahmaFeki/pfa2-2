import React, {  useState } from "react";
import { Modal,Button } from 'react-bootstrap';
function ModelAddDomaine() {
  const [show, setShow] = useState(false);
  const [id]=useState(" ");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  return (
    <>
    <button type="button" class="btn btn-primary" onClick={handleShow}><i class="fa fa-plus mr-2"></i>Domaine</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Domaine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row clearfix">
                                     
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Référence</label>
                                                    <input type="text" className="form-control"  value={id} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Libellé</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                         
                                        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelAddDomaine;