import './Card.css'
const assetsUrl = './assets/';

export default function Card(props) {
  console.log('props',props);
  return (
    <div className="card-container">
      <div className="img-container">
        <img
          className="card-img"
          src={`${assetsUrl}${props.imageUrl}`}
          alt={props.title}
        />
      </div>
      <div className="text-container">
        <div className="location-container">
          <img
            className="geo-symbol"
            src={`${assetsUrl}geo.png`}
            alt="geo.png"
          />
          <h2 className="country"> {props.location}</h2>
          <a className="maps" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className='title'>{props.title}</h1>
        <h3 className='date'>{props.startDate} - {props.endDate}</h3>
        <p className='description'>{props.description}</p>
      </div>
    </div>
  );
}
