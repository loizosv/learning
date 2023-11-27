
import star from '../assets/star.png';

export default function House(props) {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-3">
        <div className="card card-house">
          <div className="favorite-icon">
            {/* Heart icon or any other favorite icon */}
          </div>
          <img src={props.personImg} className="card-img" />
          {props.guestFav === "true" && (
              <div className="guest-favorite-overlay">
                  <small><b>Guest Favorite</b></small>
              </div>
          )}
          <div className="card-body">
            <p>{props.desc}</p>
            <div className="d-flex align-items-center">
              <img className="card-star mr-1" src={star} alt="Star Icon" />
              <span className="mr-1">{props.startRate}</span>
              <span className="mr-1">({props.number})</span>
            </div>
            <span>{props.country}</span>
          </div>
          <div className="card-footer  text-muted">
            <small><b>From ${props.price}</b></small>
          </div>
        </div>
      </div>
    );
}