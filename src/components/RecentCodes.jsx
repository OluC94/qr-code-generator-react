export default function RecentCodes(props) {
  const lastFiveCodes = props.allCodes.slice(0, 5);
  const codeList = lastFiveCodes.map((code, index) => {
    return (
      <div className="code-tile" key={index}>
        <p>{code.text}</p>
        <img src={code.url} alt={`QR Code for "${code.text}"`} />
      </div>
    );
  });

  return (
    <div>
      <h3>Previous Generations</h3>
      {codeList}
    </div>
  );
}
