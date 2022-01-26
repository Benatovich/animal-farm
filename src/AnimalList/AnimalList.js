import './AnimalList.css';

export default function AnimalList(props) {
    // cool zone
  console.log(props.animals);
  return (
    <div className='animal-list'>
      {
        //   props.animals or props.animals.animals?
        props.animals.map((item, i) => (
          <div className='animal' key={item.name + i} style={{ left: `${item.left}`, top: `${item.top}` }}>
            <img alt={item.name} src={`/animals/${item.type}.svg`} />
            <h3>{item.name}</h3>
            <span>{item.says}</span>
          </div>
        ))
      }
    </div>
  );
}