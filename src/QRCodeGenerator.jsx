import { useState } from "react"
import InputArea from "./components/InputArea"
import QRCodeArea from "./components/QRCodeArea"

export default function QRCodeGenerator(){
    const [myDataURL, setMyDataURL] = useState("")

    return (
        <div>
          <h1>QR Code Generator</h1>
          <InputArea 
            setMyDataURL={setMyDataURL}
          />
          <QRCodeArea myDataURL={myDataURL}/>
        </div>
      )
}