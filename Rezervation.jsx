import React, { useState, useEffect } from 'react';
import "./rezervation.css";
import { useLocation } from 'react-router-dom';
import { differenceInDays, format } from "date-fns";
import { DateRange } from "react-date-range";

function Rezervation({ onBook }) {

    const location = useLocation();
    const defaultDate = location.state?.date || [{ startDate: new Date(), endDate: new Date(), key: 'selection' }];
    
    const [date, setDate] = useState(defaultDate);
    
    const [totalPrice, setTotalPrice] = useState(location.state.price);
    const [formattedEndDate, setFormattedEndDate] = useState(location.state.formattedEndDate);
    const [formattedStartDate, setFormattedStartDate] = useState(location.state.formattedStartDate);
    const [dayDifference, setDayDifference] = useState(location.state.dayDifference);
    const [endDate, setEndDate] = useState(location.state.endDate);
    const [startDate, setStartDate] = useState(location.state.startDate);

    
    const { image, name, price } = location.state || {};
    

    useEffect(() => {
        const startDate = date[0]?.startDate;
        const endDate = date[0]?.endDate;
        if (startDate && endDate) {
            const dayDifference = differenceInDays(endDate, startDate);
            setDayDifference(dayDifference === 0 ? 1 : dayDifference);
            const totalPrice = (dayDifference === 0 ? 1 : dayDifference) * parseInt(price);
            setTotalPrice(totalPrice);
            setStartDate(startDate);
            setEndDate(endDate);
            setFormattedStartDate(new Date(startDate).toLocaleDateString());
            setFormattedEndDate(new Date(endDate).toLocaleDateString());
        }
    }, [date, price]);

    return (
        <div className="room-card">

            <div className="listSearch">
                <h1 className="lsTitle">Check-in Date</h1>
                <div className="lsItem">
                    <span>
                        {format(date[0].startDate, "MM/dd/yyyy")} to {format(date[0].endDate, "MM/dd/yyyy")}
                    </span>
                    <DateRange
                        onChange={item => setDate([item.selection])}
                        minDate={new Date()}
                        ranges={date}
                    />
                </div>
                <button>Search</button>
            </div>
            <div className="room-card2">
                <div className="room-card__image">
                    <img src={image} alt="Room" />
                </div>
                <div className="room-card__details">
                        <h2>{name}</h2>
                        <p className='room-card__info'>Get ready for a wonderful accommodation experience! We offer you convenience and comfort in our standard room. Our modern amenities await you for a warm atmosphere and an unforgettable experience. Book now and enjoy an unforgettable holiday! </p>
                    <div className='infoCont'>
                        <button className="room-card__button" onClick={onBook}>Book Now</button>
                        <p className="room-card__date">Date: {formattedStartDate} - {formattedEndDate}</p>
                        <p className="room-card__price">Price: ${totalPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rezervation;