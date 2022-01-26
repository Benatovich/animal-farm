import React from 'react';
import backgroundImg from './background.png';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList.js';

export default function Main(props) {
  // cool zone
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        
      }
    </main>
  );
}

// old version below
// export default function Main(props) {
//   // cool zone
//   return (
//     <main style={{ backgroundImage: `url(${backgroundImg})` }}>
//       {
//         props.animals.map((animal, i) =>
//           <AnimalList key={`${animal.name} + ${i}`} name={animal.name} type={animal.type} says={animal.says} top={animal.top} left={animal.left} />)
//       }
//     </main>
//   );
// }