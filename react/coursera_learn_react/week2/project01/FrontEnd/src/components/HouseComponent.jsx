
import star from '../assets/star.png';

export default function House(props) {
    return (
      <div className="card-column col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-3">
        <div className="card card-house">
          <div className="favorite-icon">
            {/* Heart icon or any other favorite icon */}
          </div>
          <img src={props.item.IMG_SRC} className="card-img" />
          {props.item.GUEST_FAV === 1 && (
              <div className="guest-favorite-overlay">
                  <small><b>Guest Favorite</b></small>
              </div>
          )}
          <div className="card-body">
            <p>{props.item.DESCRIPTION}</p>
            <div className="d-flex align-items-center">
              <img className="card-star mr-1" src={star} alt="Star Icon" />
              <span className="mr-1">{props.item.RATE}</span>
              <span className="mr-1">({props.item.REVIEW})</span>
            </div>
            <span>{props.item.LOCATION}</span>
          </div>
          <div className="card-footer  text-muted">
            <small><b>From ${props.item.PRICE}</b></small>
          </div>
        </div>
      </div>
    );
}