// const user = [
//   { name: "Rohit", age: 23 },
//   { name: "Naveen", age: 22 },
//   { name: "shrikanat", age: 34 },
//   { name: "Vikas", age: 24 },
// ];

import { useState } from "react";

const [user, setUser] = useState([
  { name: "Rohit", age: 23 },
  { name: "Naveen", age: 22 },
  { name: "shrikanat", age: 34 },
  { name: "Vikas", age: 24 },
]);

export const UseList = () => {
  return (
    <>
      <ul>
        {user.map((cur, index) => {
          return (
            <>
              <li key={index}>
                {cur.name}-{cur.age}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
