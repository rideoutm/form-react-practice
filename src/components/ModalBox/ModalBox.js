import "./ModalBox.scss";
import { useState } from "react";

const ModalBox = ({ handleModal, setHandleModal, displayMsg }) => {
  console.log(displayMsg.message);
  return (
    <div className={handleModal ? "modal" : "modal--hidden"}>
      <div className="modal__container">
        <div className="modal__title">Invalid Input</div>
        <div className="modal__message">
          {displayMsg.message}
          <div className="modal__btn-container">
            <button
              className={"modal__btn"}
              onClick={() => setHandleModal(false)}
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
