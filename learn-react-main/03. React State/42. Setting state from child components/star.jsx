import starFilled from "./images/star-filled.png";
import starEmpty from "./images/star-empty.png";

export default function Star(props) {
  return(
  <img
    src={props.fav ? starFilled : starEmpty }
    alt={props.fav ? "filled star icon" : "empty star icon"}
    className="favorite"
  />
)
}
