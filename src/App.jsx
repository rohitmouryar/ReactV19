// export const App = () =>{
//   return <h1>Hello Rohit Mourya</h1>;
// };

// import { jsx } from "react/jsx-runtime";

// Task 2
// Babel : It is JS compiler (React -> JS code)
// return React.createElement("h1", null, "Hello Rohit Mourya");

// Tutorial 6: ComponentS

// Step 1: Create a component
//  const Greeting = () =>{
//   return <h1>Hello Rohit Mourya</h1>;
// }

// Step 2: Use the component
/*export const App = () =>{
  return(
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  )
}
*/

// Tutorial 7: React Fragments

// How to remove multiple node from the DOM
// Step 1 Using Array
/*export const App = () =>{
  return([
    <Greeting key={1} />,
    <Greeting key={2} />,
    <Greeting key={3} />,
    <Greeting key={4} />
  ]
    
  )
}
  */

// Step 2: Using React Fragment
// import React, { Fragment } from "react";
// import { Fragment } from "react";

// export const App = () =>{
//   return(
// <React.Fragment>
//   <Greeting />
//   <Greeting />
//   <Greeting />
//   <Greeting />
// </React.Fragment>

// <Fragment>
//   <Greeting />
// </Fragment>

// <>
// <Greeting />
// <Greeting />
// <Greeting />
// <Greeting />
// </>
//   )
// }

// Tutorial 8: Dynamic values in jsx

// Step1 Using Variable
// export const App = () =>{

//   const name ="Dheeraj Kaushik"
//   const age = 22;
//   const Summary =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt, enim tempora" ;
//   return (
//     <div>
//     <h1>Good Morning {name}</h1>
//     <p>You are {age} years old.</p>
//     <p>{Summary}</p>
//     </div>
//   );
// };

// Step 2: Using Expressions
// export const App = () =>{

//   const name ="Dheeraj Kaushik"
//   return (
//     <div>
//     <h1>Good Morning {name.toUpperCase()}</h1>
//     // Expression: It is a piece of code that produces a value.
//     <p>2 + 3 = {2 + 3}</p>
//     <p>{`My name is ${name}`}</p>
//     </div>
//   );
// }

// Step 3: Using Functions

// export const App = () =>{

//   const name ="Dheeraj Kaushik";
//   const age = 22;
//   const Summary =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt, enim tempora" ;

//   const movie = () => {
//     const movies = "Dangle";
//     return movies;
//   };

//   return (
//     <div>
//     <h1>Good Morning {name}</h1>
//     <p>You are {age} years old.</p>
//     <p>{Summary}</p>
//     <p>My favourite movie is {movie()}</p>
//     </div>
//   )
// }

// Tutorial 9: Contional value in jsx
// 4 way to render conditional value in jsx

// Way 1: Using if-else statement

// export const App = () =>{

//   const name ="Dheeraj Kaushik";
//   const age = 12;
//   const Summary =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt, enim tempora" ;

//   const movie = () => {
//     const movies = "Dangle";
//     return movies;
//   };

//   if( age > 18){
//     return(
//       <div>
//       <h1>Good Morning {name}</h1>
//       <p>You are {age} years old.</p>
//       <p>{Summary}</p>
//       <p>My favourite movie is {movie()}</p>
//       <button>Not Avaiable</button>
//       </div>
//     )
//   }

//   return (
//     <div>
//     <h1>Good Morning {name}</h1>
//     <p>You are {age} years old.</p>
//     <p>{Summary}</p>
//     <p>My favourite movie is {movie()}</p>
//     <button>Watch Now</button>
//     </div>
//   )
// }

//  way 2: Using ternary operator

// export const App = () =>{

//   const name ="Dheeraj Kaushik";
//   const age = 22;
//   const Summary =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt, enim tempora" ;

//   const movie = () => {
//     const movies = "Dangle";
//     return movies;
//   };

//   return (
//     <div>
//     <h1>Good Morning {name}</h1>
//     <p>You are {age} years old.</p>
//     <p>{Summary}</p>
//     <p>My favourite movie is {movie()}</p>
//     <button>{age < 18 ? "Not Available" : "Watch Now"}</button>
//     </div>
//   )
// }

// way 3 using functions

// export const App = () =>{

//   const name ="Dheeraj Kaushik";
//   const age = 22;
//   const Summary =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt, enim tempora" ;

//   const movie = () => {
//     const movies = "Dangle";
//     return movies;
//   };

//   const canWatch = () => {
//   if(age < 18){
//     return "Not Available";
//   } else{
//     return "Watch Now";
//   }
// };

//   return (
//     <div>
//     <h1>Good Morning {name}</h1>
//     <p>You are {age} years old.</p>
//     <p>{Summary}</p>
//     <p>My favourite movie is {movie()}</p>
//     <button>{canWatch()}</button>
//     </div>
//   )
// }

// way 4 using variable

// export const App = () =>{

//   const name ="Dheeraj Kaushik";
//   const age = 22;
//   const Summary =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt, enim tempora" ;

//   const movie = () => {
//     const movies = "Dangle";
//     return movies;
//   };

// let canWatch = "Not Available";
// if (age >= 18) {
//   canWatch = "Watch Now";
// }

//   return (
//

// Tutorial :11 Imports and exorts in reactjs

// 1. Default Export and Import
// import Movie from "./components/NetflixSeries.jsx";
// export const App = () => {
//   return (
//     <div>
//       <Movie />
//     </div>
//   );
// };

// 2. Named Export and Import
// import { NetflixSeries } from "./components/NetflixSeries";
// export const App = () => {
//   return (
//     <div>
//       <NetflixSeries />
//     </div>
//   );
// };

// 3. Mixed Export and Import
// import Movie, { NetflixSeries } from "./components/NetflixSeries";
// export const App = () => {
//   return (
//     <div>
//       <NetflixSeries />
//       <Movie />
//     </div>
//   );
// };

// Tutorial: 12 Looping in JSX
// import Movie from "./components/NetflixSeries";
// export const App = () => {
//   return (
//     <div>
//       <Movie />
//     </div>
//   );
// };

// tutorial:23 EventHandling in React
// import Movie from "./components/NetflixSeries";
// import { EventHandling } from "./components/EventHandling";
// export const App = () => {
//   return (
//     <div>
//       {/* <Movie /> */}
//       <EventHandling />
//     </div>
//   );
// };

// Tutorial:24 Passing Event as props in react js
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// export const App = () => {
//   return (
//     <div>
//       <EventProps />
//     </div>
//   );
// };

// Tutorial:24 Event propagation in rect
// import { EventPropagation } from "./components/EventPropagation";
// export const App = () => {
//   return (
//     <div>
//       <EventPropagation />
//     </div>
//   );
// };

// Tutorial 26 States
// import { State } from "./components/hooks/state";
// export const App = () => {
//   return (
//     <div>
//       <State />
//     </div>
//   );
// };

// Tutorial 29

// import { UseList } from "./components/hooks/uselist";
// export const App = () => {
//   return (
//     <div>
//       <UseList />
//     </div>
//   );
// };

// Tutorial 31

// import { ToggleSwitch } from "./Project/ToggleSwitch/ToggleSwtich";
// export const App = () => {
//   return (
//     <div>
//       <ToggleSwitch />
//     </div>
//   );
// };

// Tutorial 32
// import { Todo } from "./Project/Todo/Todo";
// export const App = () => {
//   return (
//     <div>
//       <Todo />
//     </div>
//   );
// };

// Tutorial 37 Date and time
import { DateTime } from "./Project/DateTime/DateTime";
export const App = () => {
  return (
    <div>
      <DateTime />
    </div>
  );
};
