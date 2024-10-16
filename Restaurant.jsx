import React from 'react';
import './restaurant.css';

const Restaurant = () => {
  return (
    <div className="restaurant-container">
      <header className="restaurant-header">
        <div className="header-content">
          <div className="header-text">
            <h1>ReservEase Restaurant</h1>
            <p>Delicious Meals and Fun Times</p>
          </div>
        </div>
      </header>
      <div className="restaurant-info">
        <p>
          Our restaurant serves food and desserts from the World cuisine not only during breakfast but also lunch and dinner! 
          With the options of restaurants providing the experience both indoors and outdoors, we are waiting for our guests to have 
          their delightful meals. Our diverse menu is prepared with the contribution of the experts and chefs in this field to ensure 
          that our guests will enjoy the traditional and international cuisine. 
        </p>
        <p>
          Café creates the cozy ambiance with its relaxed atmosphere for our guests to enjoy and relax at all times of the day. Coffee, tea, desserts, pastry, sandwiches and other bakeries are waiting for you at the café!
        </p>
        <div className="restaurant-image">
          <img src="hotel_photo2/lounge_bar.png" alt="ReservEase Restaurant" />
        </div>

        <div className="restaurant-details">
            <p2>
              Lounge Bar is the place where you will visit to have an elegant night with your friends! Without having the need to go outside of the hotel during the night, you can enjoy your drinks and the quality music until the very first sunlight appears.
              Pool Bar is designed for you to enjoy your drinks at the pool under the sun which is the most blissful moments of the day. You can grab your drink and dance your soul with music from different genres which will make your day for sure! There is also another bar by the sea which you can both drink & enjoy while sunbathing.
            </p2>
            <h2>Welcome to Our Restaurant!</h2>
            <p2>
              Our hotel restaurant offers our guests an unforgettable dining experience. Everything's prepared just for you.
              We are open to reservation any time, call our call center 24/7 for a unique dining experience.
            </p2>
        </div>

        <div className="menu">
          <h3>Menu</h3>
          <ul>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Soft Drinks</li>
            <li>Cocktails</li>
            <li>Desserts</li>
            <li>Turkish Cuisine</li>
          </ul>
        </div>
      </div>
      <div className="restaurant-location">
        <h2>Location</h2>
        <p>ReservEase Restaurant is located on the 2nd floor of our hotel.</p>
      </div>
    </div>
  );
};

export default Restaurant;