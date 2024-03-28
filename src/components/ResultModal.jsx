import React from "react";
import Modal from "react-bootstrap/Modal";

function getMessageForCarbonEmissions(carbonEmissions) {
  if (carbonEmissions < 1000) {
    return "Low emissions";
  } else if (carbonEmissions < 2000) {
    return "Average emissions";
  } else {
    return "High emissions";
  }
}

function ResultModal({ show, onClose, resultData }) {
  const carbonEmissions = resultData?.predicted_carbon_emissions_avg;
  const roundedCarbonEmissions = Math.floor(carbonEmissions);
  const message = getMessageForCarbonEmissions(roundedCarbonEmissions);

  return (
    <Modal
      show={show}
      onHide={onClose}
      dialogClassName="modal-dialog modal-dialog-centered"
    >
      <div className="modal-header">
        <h5 className="modal-title">Carbon Footprint Results</h5>
        <button type="button" className="btn-close" onClick={onClose}></button>
      </div>
      <div className="modal-body">
        {resultData && (
          <div>
            <p>Carbon Emissions: {roundedCarbonEmissions}</p>
            <p>Message: {message}</p>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default ResultModal;

