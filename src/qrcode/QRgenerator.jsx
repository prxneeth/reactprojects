import React, { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";

function QRgenerator() {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");

  const feaw = useRef();

  function handleQr() {
    setQrcode(input);
    setInput("");
  }

  useEffect(() => {
    feaw.current.focus();
  }, []);

  return (
    <div>
      <h1>qr code generator</h1>
      <div>
        <input
          ref={feaw}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qrCode"
          placeholder="enter smth"
        />
        <button onClick={handleQr}>generator</button>
      </div>
      <div>
        <QRCode id="qrCodeValue" value={qrcode} bgColor="white" />
      </div>
    </div>
  );
}

export default QRgenerator;
