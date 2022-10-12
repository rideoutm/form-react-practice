import "./ModalBox.scss";
import { useState } from "react";

const ModalBox = ({ usersList }) => {
  const [handleModal, setHandleModal] = useState(false);

  return (
    <div className={handleModal ? "modal" : "modal--hidden"}>
      <div className="modal__container">
        <div className="modal__title">Invalid Input</div>
        <div className="modal__message">
          {usersList.name === "" ? "Please input a valid username!" : null}
          {usersList.age === "" ? "Please input a valid age!" : null}
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
