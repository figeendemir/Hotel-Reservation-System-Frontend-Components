import { useNavigate } from "react-router-dom";
import "./searchItem.css";

const SearchItem = (props) => {

  const navigate = useNavigate();

  const handleRez = () => {
    if (props.dayDifference === 0) {
      alert("Please choose at least one day");
    } else {
      navigate("/rezervation", {
        state: {
          image: props.image,
          name: props.roomtype,
          price: props.price,
          dayDifference: props.dayDifference,
          date: props.date,
          startDate: props.startDate,
          endDate: props.endDate 
        }
      });
    }
  };

  return (
    <div className="searchItem">
      <img
        src={props.image}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{props.roomtype}</h1>
        <span className="siDistance">{props.info}</span>
        <span className="siTaxiOp">{props.info2}</span>
        <span className="siSubtitle">
          {props.property}
        </span>
        <span className="siFeature">
          {props.roomInfo}
        </span>
        <span className="siCancelOp">{props.cancellation}</span>
        <span className="siCancelOpSubtitle">
          {props.info3}
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>{props.ratingInfo}</span>
          <button>{props.rating}</button>
        </div>
        <div className="siDetailsText">
          <span className="siPrice">${props.price}</span>
          <span className="siTaxOp">{props.priceInfo}</span>
          <button className="siCheckButton" onClick={handleRez}>See Availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;