import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './bookingPage.css';

const BookingPage = ({ username }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null); 
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('Standard Room');
  const [price, setPrice] = useState(100);
  const [totalPrice, setTotalPrice] = useState(0);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [cardSelection, setCardSelection] = useState('');

  const roomDetails = {
    'Standard Room': { price: 100, maxAdults: 2, maxChildren: 1 },
    'Deluxe Sea Suit': { price: 350, maxAdults: 2, maxChildren: 1 },
    'Honeymoon Suit': { price: 320, maxAdults: 2, maxChildren: 0 },
    'Panorama Suit': { price: 220, maxAdults: 2, maxChildren: 1 },
    'King Room': { price: 280, maxAdults: 6, maxChildren: 5 },
    'Family Room': { price: 330, maxAdults: 4, maxChildren: 3 },
  };

  useEffect(() => {
    const { price, maxAdults, maxChildren } = roomDetails[roomType];
    setPrice(price);
    if (adults > maxAdults) setAdults(maxAdults);
    if (children > maxChildren) setChildren(maxChildren);
  }, [roomType]);

  useEffect(() => {
    if (startDate && endDate) {
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      setTotalPrice(dayDifference * price);
    } else {
      setTotalPrice(0);
    }
  }, [startDate, endDate, price]);

  const handleRoomTypeChange = (event) => {
    const selectedRoom = event.target.value;
    setRoomType(selectedRoom);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (endDate && date >= endDate) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleAdultChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 1 && value <= roomDetails[roomType].maxAdults) {
      setAdults(value);
    }
  };

  const handleChildrenChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 0 && value <= roomDetails[roomType].maxChildren) {
      setChildren(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reservation = {
      userId: 1,
      userName: username,
      email,
      name,
      surname,
      phone,
      roomType,
      price: totalPrice,
      date: startDate,
      adultCount: adults,
      childCount: children,
      cardSelection,
    };

    try {
      const response = await axios.post('http://localhost:8081/reservations', reservation, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Reservation created successfully:', response.data);
    } catch (error) {
      console.error('There was an error creating the reservation!', error);
    }
  };

  return (
    <div className="booking-container">
      <h2>Book Your Stay Now!</h2>
      <h3>Please Login Before Booking!</h3>
      {!username && <p className="warning">You need to log in before you can book!</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username || ''} readOnly />
        </label>
        <label>
          Name:
          <input type="name" value={name} onChange={(e) => setName(e.target.value)} disabled={!username} />
        </label>
        <label>
          Surname:
          <input type="surname" value={surname} onChange={(e) => setSurname(e.target.value)} disabled={!username} />
        </label>
        <label>
          Phone:
          <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={!username} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!username} />
        </label>
        <label>
          Room Type:
          <select value={roomType} onChange={handleRoomTypeChange} disabled={!username}>
            {Object.keys(roomDetails).map((room) => (
              <option key={room} value={room}>
                {room} (Maximum Adult Count: {roomDetails[room].maxAdults}, Maximum Children Count: {roomDetails[room].maxChildren})
              </option>
            ))}
          </select>
        </label>
        <label>
          Price per night: ${price}
        </label>
        <label>
          Total Price: ${totalPrice}
        </label>
        <label>
          Check-in Date:
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            minDate={new Date()}
            disabled={!username}
          />
        </label>
        <label>
          Check-out Date:
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            minDate={new Date(startDate.getTime() + 24 * 60 * 60 * 1000)}
            disabled={!username}
          />
        </label>
        <label>
          Adults:
          <input
            type="number"
            value={adults}
            onChange={handleAdultChange}
            min="1"
            max={roomDetails[roomType].maxAdults}
            disabled={!username}
          />
        </label>
        <label>
          Children:
          <input
            type="number"
            value={children}
            onChange={handleChildrenChange}
            min="0"
            max={roomDetails[roomType].maxChildren}
            disabled={!username}
          />
        </label>
        <label>
          Do you have any saved cards?
          <select value={cardSelection} onChange={(e) => setCardSelection(e.target.value)} disabled={!username}>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="yesButNoUse">Yes, but I don't want to use it now</option>
          </select>
        </label>
        <button type="submit" disabled={!username}>Book Now!</button>
      </form>
    </div>
  );
};

export default BookingPage;
