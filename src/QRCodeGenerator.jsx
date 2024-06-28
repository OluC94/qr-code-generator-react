import InputArea from "./components/InputArea"
import QRCode from "./components/QRCode"

export default function QRCodeGenerator(){
    return (
        <div>
          <h1>QR Code Generator</h1>
          <InputArea />
          <QRCode />
        </div>
      )
}