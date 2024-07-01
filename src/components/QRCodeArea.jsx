export default function QRCodeArea(props) {
    console.log("DAta URL: ", props.myDataURL)
  return (
    <div> TExt
      <img scr={props.myDataURL} />
    </div>
  );
}

// DAta url generated, will not render to screen

// https://weareacademy.notion.site/QRCode-Generator-React-d864d90396554c328cf42171175e8854

// https://www.npmjs.com/package/qrcode#usage

// https://www.npmjs.com/package/qrcode#todataurltext-options-cberror-url-1
