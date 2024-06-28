import { useState } from "react"

export default function InputArea() {
    const [urlToGenerate, setUrlToGenerate] = useState("")

    function handleUrlInput(event){
        setUrlToGenerate(event.target.value)
    }

    function handleGenerateClicked() {
        console.log(urlToGenerate)
    }

    return (<div>
            <input
                type="text"
                placeholder="https://..."
                onChange={handleUrlInput}
            />
            <button onClick={handleGenerateClicked}>Generate</button>
    </div>)
}