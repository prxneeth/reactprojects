import React from "react";

const Modal = ({ pop, header, body, footer }) => {
  function handleClick() {
    pop(false);
  }

  return (
    <div>
      <div className="bg-blue-400  text-center p-5">
        <div className="flex ">
          <h2 className="bg-slate-400 w-5/6">{header ? header : "header"}</h2>
          <h2
            onClick={handleClick}
            className="ml-32 cursor-pointer hover:text-red-600 font-bold text-xl"
          >
            X
          </h2>
        </div>
        <div className="bg-blue-200 h-28">
          {body ? body : <div>this is the body of our modal</div>}
        </div>

        <div className="bg-blue-900 h-10 text-white flex justify-center">
          {footer ? footer : "footer"}
        </div>
      </div>
    </div>
  );
};

export default Modal;
