
import star from '../assets/star.png';

export default function Card(props) {
  return (
    <div className="card-column mb-3">
      <div className="card card-people">
        <img src={props.item.IMG_SRC} className="card-img" />
        <div className="card-body">
          <p>{props.item.DESCRIPTION}</p>
          <div>
            <img className="card-star mr-1" src={star} alt="Star Icon" />
            <span className="mr-1">{props.item.RATE}</span>
            <span className="mr-1">({props.item.REVIEW})</span>
          </div>
          <span>{props.item.LOCATION}</span>
        </div>
        <div className="card-footer text-muted">
          <small><b>From ${props.item.PRICE}</b></small>
        </div>
      </div>
    </div>
  );
}