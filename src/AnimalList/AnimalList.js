import './AnimalList.css';

export default function AnimalList(props) {
    // cool zone
  return (
    <div className='animal-list'>
      {
        // props.animals
      }
    </div>
  );
}

// comparison code below
/* {zodiac.map((item) => (
        <ZodiacCard key={item.name} {...item} /> */


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