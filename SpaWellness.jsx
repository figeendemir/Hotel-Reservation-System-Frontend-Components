import { useState } from 'react';
import "./spaWellness.css"


const SpaWellness = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="spa-container">
      <header className="spa-header">
        <div className="header-content">
          <div className="header-text">
            <h1>ReservEase Spa & Wellness</h1>
            <p>A Heavenly Experience!</p>
          </div>
        </div>
      </header>
      <div className="spa-info">
          <p>
            Our luxurious and tranquil spa in the hotel offers you the combination of relaxation and well-being. With the soothing atmosphere, calming environment, bright decorations and organic equipments; the spa provides you with an unforgettable experience!
            Hamam (Turkish Bath) is waiting for you to enjoy the modern and traditional Turkish hospitality as well as the spa & wellness center. Modern equipment is combined with traditional methods just for you to enjoy and relax during your stay.
            To take your experience one more step further, our massage facility is ready for you to relax and calm. Enjoy the view during your mystic experience with the aromatic smell, relaxing sounds and peaceful environments.
            Our sophisticated wellness center includes a fitness center as well which is equipped with high technology gym equipments. Spend some quality time with yourself at the fitness center while enjoying the stunning views of the sea and sunlight. 
          </p>
        <div className="spa-images">
          <h2>Images from ReservEase Spa Center!</h2>
            <div className='galleryItem'>
              <img className='galleryImg'
                src="Images/spa.png"
                alt="ReservEase Hotel Hamam"
                onClick={() =>
                  handleImageClick(
                    "Images/spa.png"
                  )
                }
              />
            </div>
            <div className='galleryItem'>
              <img className='galleryImg'
                src="Images/spa2.png"
                alt="ReservEase Hotel Massage"
                onClick={() =>
                  handleImageClick(
                    "Images/spa2.png")
                }
              />
            </div>
            <div className='galleryItem'>
              <img className='galleryImg'
                src="Images/spa3.png"
                alt="ReservEase Hotel Spa"
                onClick={() =>
                  handleImageClick("Images/spa3.png")
                }
              />
            </div>
          {selectedImage && (
            <div className="overlay" onClick={() => setSelectedImage(null)}>
              <div className="modal">
                <img src={selectedImage} alt="Selected Image" />
              </div>
            </div>
          )}
        </div>
        <div className="spa-details">
          <h3>Welcome to Our Spa Center!</h3>
          <p>
            Our hotel spa center offers our guests a relaxing time with professional masseurs! Our guests can enjoy their time in Hotel Hamam, Spa, or in the Pool.
            Reservations should be done 2 days prior, so we can prepare everything just for you.
          </p>
        </div>
      </div>
      <div className="spa-location">
        <h2>Location</h2>
        <p>ReservEase's Spa Center is located on the 3rd floor of our hotel.</p>
      </div>
    </div>
  );
};

export default SpaWellness;