import React, { useEffect, useState } from "react";
import { IMilk } from "./Interfaces";
import data from "../milk.json"

function Main() {
  const [Milk, setMilk] = useState<IMilk[]>(data.results);

//   const getData = () => {
//     fetch("milk.json")
//       .then((response) => {
//         console.log("👀"+ response)
//         return response.json();
//       })
//       .then((data) => {
//         setMilk(data.results);
//       })
//       .catch((e) => {
//         console.log(e.message);
//       });
//   };
//   useEffect(() => {
//     getData();
//   }, []);
  return (
    <>
      <div>Main components</div>
      {Milk && Milk.length > 0 && Milk.map((item) => <p>{item.id}</p>)}
    </>
  );
}

export default Main;
