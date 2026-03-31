// tutorial :13({ data })// export const SeriesCard = ({ data }) => {
//   return (
//     <li key=({ data })curELem.id}>
//       <div>
//         <img
//           src=({ data })curELem.img_url}
//           alt="qot.jpg"
//           width="40%"
//           height="40%"
//         />
//       </div>
//       <h2>Name:({ data })curELem.name}</h2>
//       <h3>Rating: ({ data })curELem.rating}</h3>
//       <p>Description: ({ data })curELem.description}</p>
//       <p>Genre: ({ data })curELem.genre}</p>
//       <p>Cast: ({ data })curELem.cast}</p>
//       <a href=({ data })curELem.watch_url} target="_blank">
//         <button>Watch Now</button>
//       </a>
//     </li>
//   );
// };

// Tutraial: 14 Destructuring({ data })// First method
// export const SeriesCard = ({ data }) => {
//   const { } =({ data })
//   return (
//     <li key={id}>
//       <div>
//         <img src={img_url} alt="qot.jpg" width="40%" height="40%" />
//       </div>
//       <h2>Name:{name}</h2>
//       <h3>Rating: {rating}</h3>
//       <p>Description: {description}</p>
//       <p>Genre: {genre}</p>
//       <p>Cast: {cast}</p>
//       <a href={watch_url} target="_blank">
//         <button>Watch Now</button>
//       </a>
//     </li>
//   );
// };

// Second method
export const SeriesCard = ({ data }) => {
  const { id, img_url, name, rating, description, genre, cast, watch_url } =
    data;
  return (
    <li key={id}>
      <div>
        <img src={img_url} alt="qot.jpg" width="40%" height="40%" />
      </div>
      <h2>Name:{name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Description: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast: {cast}</p>
      <a href={watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
