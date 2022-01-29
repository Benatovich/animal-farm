import './AnimalList.css';
import Animals from '../Animals/Animals';

export default function AnimalList(props) {
    // cool zone
//   console.log(props.animals);
  return (
    <div className='animal-list'>
      {
        <Animals animals={ props.animals } />
      }
    </div>
  );
}