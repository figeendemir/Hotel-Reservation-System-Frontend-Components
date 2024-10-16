import React, { useState } from 'react';
import axios from 'axios';
import './cardPage.css';

const CardPage = ({ username }) => {
  const [cardnumber, setCardnumber] = useState('');
  const [csv, setCsv] = useState('');
  const [expdate, setExpdate] = useState('');
  const [cardname, setCardname] = useState('');

  const handleSave = async (event) => {
    event.preventDefault();
    const card = {
      userId: 1,
      userName: username,
      cardname,
      cardnumber,
      csv,
      expdate,
    };

    try {
      const response = await axios.post('http://localhost:8081/cards', card, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Card Information Saved Successfully:', response.data);
    } catch (error) {
      console.error('There was an error saving the card information!', error);
    }
  };

  return (
    <div className="cardpage-container">
      <h2>Save Your Card Information!</h2>
      <h3>Please Login Before Saving Your Card Information!</h3>
      {!username && <p className="warning">You need to log in before you can save!</p>}
      <form onSubmit={handleSave}>
        <label>
          Username:
          <input type="text" value={username || ''} readOnly />
        </label>
        <label>
          Name on the Card:
          <input type="text" value={cardname} onChange={(e) => setCardname(e.target.value)} disabled={!username} />
        </label>
        <label>
          Card Number:
          <input type="text" value={cardnumber} onChange={(e) => setCardnumber(e.target.value)} disabled={!username} />
        </label>
        <label>
          CSV:
          <input type="text" value={csv} onChange={(e) => setCsv(e.target.value)} disabled={!username} />
        </label>
        <label>
          Expiration Date:
          <input type="text" value={expdate} onChange={(e) => setExpdate(e.target.value)} disabled={!username} />
        </label>
        <button type="submit" disabled={!username}>Save!</button>
      </form>
    </div>
  );
};

export default CardPage;
