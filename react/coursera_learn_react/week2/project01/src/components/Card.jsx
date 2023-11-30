
import star from '../assets/star.png';

export default function Card(props) {
  return (
    <div className="card-column mb-3">
      <div className="card card-people">
        <img src={props.item.personImg} className="card-img" />
        <div className="card-body">
          <p>{props.item.desc}</p>
          <div>
            <img className="card-star mr-1" src={star} alt="Star Icon" />
            <span className="mr-1">{props.item.startRate}</span>
            <span className="mr-1">({props.item.reviewCount})</span>
          </div>
          <span>{props.item.country}</span>
        </div>
        <div className="card-footer text-muted">
          <small><b>From ${props.item.price}</b></small>
        </div>
      </div>
    </div>
  );
}