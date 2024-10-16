import "./privileges.css"
import { Link } from 'react-router-dom';

const Privileges = () => {
    return (
        <div className="pList">

            <div className="pListItem">
                <Link to="/Restaurant" className="roomLink" >
                    <img src="hotel_photo2/restaurant2.png" alt="" className="pListImg" />
                    <div className="pListTitles"> 
                        <h1>Restaurant</h1>
                        <h2>233 hotels</h2>
                    </div>                  
                </Link>
            </div>

            <div className="pListItem">
                <Link to="/SpaWellness" className="roomLink" >               
                        <img src="Images/spa.png" alt="" className="pListImg" />
                        <div className="pListTitles">
                            <h1>Spa & Wellness</h1>
                            <h2>233 hotels</h2> 
                        </div>               
                </Link> 
            </div>

            <div className="pListItem">
                <Link to="/ActivitiesFacilities"  className="roomLink"> 
                        <img src="Images/ACTIVITIES1.png" alt="" className="pListImg" />
                        <div className="pListTitles">
                            <h1>Activities and facilities</h1>
                            <h2>233 hotels</h2> 
                        </div>   
                </Link>
            </div>    
        </div>
    )
}

export default Privileges