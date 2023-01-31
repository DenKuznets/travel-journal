import './Card.css'

export default function Card(props) {
  console.log(props);
  return (
    <div className="card-container">
      <div classname='img-container'>
        <img className='card-img' src={`../../public/assets/${props.imageUrl}`} alt={props.title} />
      </div>
    </div>
  );
}
