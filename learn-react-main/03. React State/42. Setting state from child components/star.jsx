import starFilled from "./images/star-filled.png";
import starEmpty from "./images/star-empty.png";

export default function Star(props) {
  <img
    src={props.details.contact.isFavorite ? starFilled : starEmpty }
    alt={props.details.contact.isFavorite ? "filled star icon" : "empty star icon"}
    className="favorite"
  />;
}
