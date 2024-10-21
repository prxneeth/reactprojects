import React, { useState } from "react";
import Modal from "./modal";

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!showModal);
  }

  return (
    <div>
      {" "}
      <div className="flex justify-center">
        <button
          className="border-none bg-blue-200 rounded-md w-24 h-8 hover:bg-blue-500 active:bg-blue-400 focus:outline-none mt-3 mb-4"
          onClick={handleClick}
        >
          Modal
        </button>
      </div>{" "}
      {showModal && (
        <Modal
          pop={setShowModal}
          body={<div>some custom body</div>}
          footer={<div>this is a footer</div>}
        />
      )}
    </div>
  );
};

export default ModalTest;
