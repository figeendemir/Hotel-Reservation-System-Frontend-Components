import { Link } from "react-router-dom"
import "./rooms.css"

const Rooms =(props) => {
    return (
        <div className="rooms">
            <div className="roomsItem">
                <Link to={props.page} className="roomLink">
                    <img src={props.src} alt="" className="roomsImg"/>
                    <div className="roomsTitles">
                        <h1>{props.title}</h1>
                        <h2>{props.property}</h2>
                    </div>
                </Link>
            </div>
        </div>
        
    )
}

export default Rooms