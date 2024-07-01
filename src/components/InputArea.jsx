import { useState } from "react"
import QRCode from "qrcode"

export default function InputArea(props) {
    const [inputUrl, setInputUrl] = useState("")

    function handleUrlInput(event){
        setInputUrl(event.target.value)
    }

    function handleGenerateClicked() {
        generateQRCode(inputUrl)
        
    }

    function generateQRCode(link) {
        return QRCode.toDataURL(link).then(generatedURL => {
            props.setMyDataURL(generatedURL)
            return generatedURL
        })
    }

    return (<div>
            <input
                type="text"
                placeholder="https://www..."
                onChange={handleUrlInput}
            />
            <button onClick={handleGenerateClicked}>Generate</button>
            <img src={props.myDataURL}/>
    </div>)
}