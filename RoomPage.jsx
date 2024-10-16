import "./roomPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const RoomPage = (props) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/searchResult', {
            state: {
                roomtype: props.roomType,
                date: [{ startDate: new Date(), endDate: new Date(), key: 'selection' }],
                options: {
                    adult: 2,
                    children: 0,
                    room: 1
                }
            }
        });
    };
    return (
        <div>
            <div className="aboutContainer">
                <div className="aboutWrapper">
                    <h1 className="aboutTitle">{props.title}</h1>
                    <div className="aboutAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>{props.location}</span>
                    </div>
                    <span className="aboutDistance">{props.distance}</span>
                    <span className="aboutPriceHighlight">
                        {props.info}
                    </span>
                    <div className="aboutImages">
                        <div className="aboutImgWrapper">
                            <img src={props.img} alt="" className="aboutImg" />
                            <img src={props.img2} alt="" className="aboutImg" />
                        </div>
                    </div>
                    <div className="aboutDetails">
                        <div className="aboutDetailsText">
                            <h1 className="aboutTitle">{props.roomType}</h1>
                            <p className="aboutDesc">
                            {props.roomDesc}
                            </p>
                        </div>
                        <div className="aboutDetailsPrice">
                            <h1>{props.details}</h1>
                            <span>
                            {props.detailsLocation}
                            </span>
                            <h2>
                                <b>{props.price}</b> 
                            </h2>
                            <button onClick={handleButtonClick}>{props.button}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomPage;
