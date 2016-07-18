var React = require('react');
var Modal = require('react-bootstrap').Modal;

var ConfirmModal = function(props){
    return(
      <Modal show={props.showModal} className="confirm" onHide = {props.close}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Confirm</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <span>Are you sure you want to import this recipe? </span>
          <br/>
          <span>(note: ingredient amounts do not automatically import, you must input the amounts manually)</span>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onYes} className="yes">Yes</button>
          <button onClick={props.onNo} className="no">No</button>
        </Modal.Footer>
      </Modal>
    );
  }

module.exports = ConfirmModal;
