import { useState } from "react";
import QRCode from "qrcode";
import RecentCodes from "./components/RecentCodes";

export default function QRCodeGenerator() {
  const [inputUrl, setInputUrl] = useState("");
  const [myDataURL, setMyDataURL] = useState("");
  const [allCodes, setAllCodes] = useState([]);

  function handleUrlInput(event) {
    setInputUrl(event.target.value);
  }

  function handleGenerateClicked() {
    generateQRCode(inputUrl);
  }

  function generateQRCode(codeText) {
    return QRCode.toDataURL(codeText).then((generatedURL) => {
      setMyDataURL(generatedURL);
      setAllCodes((currArr) => [
        { text: codeText, url: generatedURL },
        ...currArr,
      ]);
      return generatedURL;
    });
  }

  return (
    <main>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Your text here..."
        onChange={handleUrlInput}
      />
      <button onClick={handleGenerateClicked}>Generate</button>
      <div>
        {myDataURL && <img src={myDataURL} alt={`QR Code for ${inputUrl}`} />}
      </div>

      {allCodes.length > 0 && <RecentCodes allCodes={allCodes} />}
    </main>
  );
}
