export default function RecentCodes(props) {
    console.log(props.lastFiveCodes)

    const codeList = props.lastFiveCodes.map((code, index) => {
        return (<div key={index}>
            <p>{code.text}</p>
            <img src={code.url} alt={`QR Code for "${code.text}"`} />
        </div>)
    })
    return (
        <div>
            <h3>Previous Generations</h3>
            {codeList}
        </div>
    )
}