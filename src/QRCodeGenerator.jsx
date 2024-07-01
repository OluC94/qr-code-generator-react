import { useState } from "react"
import QRCode from "qrcode"

export default function QRCodeGenerator(){
    const [inputUrl, setInputUrl] = useState("")
    const [myDataURL, setMyDataURL] = useState("")

    function handleUrlInput(event){
        setInputUrl(event.target.value)
    }

    function handleGenerateClicked() {
        generateQRCode(inputUrl)
        
    }

    function generateQRCode(link) {
        return QRCode.toDataURL(link).then(generatedURL => {
            setMyDataURL(generatedURL)
            return generatedURL
        })
    }

    return (<div>
        <h1>QR Code Generator</h1>
            <input
                type="text"
                placeholder="https://www..."
                onChange={handleUrlInput}
            />
            <button onClick={handleGenerateClicked}>Generate</button>
            {myDataURL && <img src={myDataURL} alt={`QR Code for ${inputUrl}`}/>}
    </div>)
}