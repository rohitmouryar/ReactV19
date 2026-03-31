// Tutorial;11 Imports and Exports in React

// 1. Default Export and Import
// const NetflixSeries = () => {
//   return <div>Netflix</div>;
// };

// export default NetflixSeries;

// 2. Named Export and Import
// export const NetflixSeries = () => {
//   return <div>Netflix</div>;
// };

// 3. Mixed Export and Import

// export const NetflixSeries = () => {
//   return <div>Netflix</div>;
// };

// const Movie = () => {
//   return <div>Dangle</div>;
// };

// export default Movie;

// Tutroial:12 Looping in JSX

// import seriesData from "../api/seriesData.json";
// import { SeriesCard } from "./SeriesCard";
// export const NetflixSeries = () => {
//   return (
//     <ul>
//       {seriesData.map((curELem) => {

//          return (
//     <li key={curELem.id}>
//       <div>
//         <img src={curELem.img_url} alt="qot.jpg" width="40%" height="40%" />
//       </div>
//       <h2>Name:{curELem.name}</h2>
//       <h3>Rating: {curELem.rating}</h3>
//       <p>Description: {curELem.description}</p>
//       <p>Genre: {curELem.genre}</p>
//       <p>Cast: {curELem.cast}</p>
//       <a href={curELem.watch_url} target="_blank">
//         <button>Watch Now</button>
//       </a>
//     </li>
//   );
//       })}
//     </ul>
//   );
// };

// export default NetflixSeries;

// Tutorial :13 props
// import seriesData from "../api/seriesData.json";
// import { SeriesCard } from "./SeriesCard";

// const NetflixSeries = () => {
//   return (
//     <ul>
//       {seriesData.map((curELem) => {
//         return <SeriesCard key={curELem.id} curELem={curELem} />;
//       })}
//     </ul>
//   );
// };

// export default NetflixSeries;

// Tutorial: 14 Destructuring props
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curELem) => {
        return <SeriesCard key={curELem.id} data={curELem} />;
      })}
    </ul>
  );
};

export default NetflixSeries;
