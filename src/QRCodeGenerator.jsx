import { useState } from "react";
import QRCode from "qrcode";
import RecentCodes from "./components/RecentCodes";

export default function QRCodeGenerator() {
  const [inputUrl, setInputUrl] = useState("");
  const [myDataURL, setMyDataURL] = useState("");
  const [lastFiveCodes, setLastFiveCodes] = useState([])

  function handleUrlInput(event) {
    setInputUrl(event.target.value);
  }

  function handleGenerateClicked() {
    generateQRCode(inputUrl);
  }

  function generateQRCode(codeText) {
    return QRCode.toDataURL(codeText).then((generatedURL) => {
      setMyDataURL(generatedURL);
      setLastFiveCodes(currArr => [...currArr, {text: codeText, url: generatedURL}])
      return generatedURL;
    });
  }

  return (
    <main>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="https://www..."
        onChange={handleUrlInput}
      />
      <button onClick={handleGenerateClicked}>Generate</button>
      <div>
        {myDataURL && <img src={myDataURL} alt={`QR Code for ${inputUrl}`} />}
      </div>

      {lastFiveCodes.length > 0 && <RecentCodes lastFiveCodes={lastFiveCodes} />}
    </main>
  );
}
