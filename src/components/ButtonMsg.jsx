import { useState } from "react";

// export default function ButtonMsg() {
//   const [showMsg, setShowMsh] = useState(false);
//   function setUseState() {
//     setShowMsh(!showMsg);
//   }

//   return (
//     <div>
//       <button onClick={setUseState}>Toggle</button>
//       {showMsg && <h1>Message</h1>}
//     </div>
//   );
//     return (
//       <div>
//         <button onClick={() => setShowMsh(!showMsg)}>Toggle</button>
//         {showMsg ? <h1>Message</h1> : null}
//       </div>
//     );
// }

export default function ButtonMsg() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.length ||
          items.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
}
