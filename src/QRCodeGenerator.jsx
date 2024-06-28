import InputArea from "./components/InputArea"
import QRCodeArea from "./components/QRCodeArea"

export default function QRCodeGenerator(){
    return (
        <div>
          <h1>QR Code Generator</h1>
          <InputArea />
          <QRCodeArea />
        </div>
      )
}