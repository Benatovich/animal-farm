import './Animals.css';

export default function Animals(props) {
  return (
    <div className='animals'>
      {
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