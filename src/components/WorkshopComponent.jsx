// const items = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
// ];

// export default function WorkshopComponent() {
//   return (
//     <div>
//       <h1>Items</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// import { useEffect } from "react";
// import { useState } from "react";

// export default function WorkshopComponent() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/todos"
//       );
//       const data = await response.json();
//       setItems(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Items</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { useEffect } from "react";
import { useState } from "react";

export default function GitHubStarsDiv() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.github.com/repos/d-g-Szabo/useEffect-fetch-is-react"
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);
  console.log(items);
  return (
    <div>
      <h1>GitHub Stars</h1>
      <h2>{items.stargazers_count}</h2>
    </div>
  );
}
