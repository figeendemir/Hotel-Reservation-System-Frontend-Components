import React, { useState } from 'react';
import './activity.css';

const ActivityFacility = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    let timeoutId;
  
    const handleMouseEnter = (imageUrl) => {
      setSelectedImage(imageUrl);
      clearTimeout(timeoutId); 
    };
  
    const handleMouseLeave = () => {
      timeoutId = setTimeout(() => {
        setSelectedImage(null);
      }, 2000); 
    };

    const handleModalMouseLeave = () => {
      if (!selectedImage) {
        setSelectedImage(null);
      }
    };

  return (
    <div className="activity-container">
      <header className="activity-header">
        <div className="header-content">
          <div className="header-text">
            <h1>ReservEase Activities</h1>
            <p>ReservEase Offers the Best Activities!</p>
          </div>
        </div>
      </header>
      <div className="activities-details">
          <h2>Activities and Facilities!</h2>
          <p>
            Our hotel offers many activities to our beloved guests! You can enjoy your time fully during your stay with our activities made for you. 
          </p>
          <p>
            Reservations should be done 1 day prior, so you can enjoy your time fully.
          </p>
        </div>
      <div className="activity-info">
        <div className="activity-images">
          <h2>Images from ReservEase Activities!</h2>
          <div className="gallery">
            <img
              src="Images/BEACHPARTY.png"
              alt="ReservEase Private Beach"
              onMouseEnter={() =>
                handleMouseEnter(
                  "ReservEase Private Beach: ReservEase hosts those who want to have an unforgettable holiday with its private beach. You can enjoy the sun on the golden sands while enjoying the crystal clear, deep blue sea. Fun and relaxation come together at ReservEase beach. Take advantage of the activities on our beach to make your holiday unforgettable."
                )
              }
              onMouseLeave={handleMouseLeave}
            />
            <img
              src="Images/BEACHYOGA.png"
              alt="ReservEase Pool & Bar"
              onMouseEnter={() =>
                handleMouseEnter(
                  "ReservEase Pool & Bar: ReservEase provides its guests with the opportunity to cool off with its beautiful and spacious pools. You can enjoy swimming and sunbathing in our carefully designed pools. You can also have your drinks from our pool bar, accompanied by the pool view, and enjoy the magnificent view with your refreshing drink."
                )
              }
              onMouseLeave={handleMouseLeave}
            />
            <img
              src="Images/KIDSCLUB1.png"
              alt="ReservEase Kids Mini Club and Animation"
              onMouseEnter={() =>
                handleMouseEnter(
                  "ReservEase Kids Mini Club and Animation: ReservEase offers specially designed mini clubs and entertainment activities to make your children's holidays unforgettable. Accompanied by professional and experienced animators, we ensure that your children have a safe and enjoyable time."
                )
              }
              onMouseLeave={handleMouseLeave}
            />
            <img
              src="Images/gym.png"
              alt="ReservEase Kids Mini Club and Animation"
              onMouseEnter={() =>
                handleMouseEnter(
                  "ReservEase Kids Mini Club and Animation: ReservEase offers specially designed mini clubs and entertainment activities to make your children's holidays unforgettable. Accompanied by professional and experienced animators, we ensure that your children have a safe and enjoyable time."
                )
              }
              onMouseLeave={handleMouseLeave}
            />
          </div>
          {selectedImage && (
            <div className="overlay">
              <div className="modal">{selectedImage}</div>
            </div>
          )}
        </div>
      </div>
      <div className="facility-locations">
        <h2>Location</h2>
        <p>ReservEase's private beach can be found at the front along with the pool & bar. Kids club can be found on 3rd floor at our hotel.</p>
      </div>
    </div>
  );
};

export default ActivityFacility;