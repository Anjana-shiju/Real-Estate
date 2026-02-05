import React from 'react';
import roomImg1 from "../COMPONENTS/Images/pro1.jfif"; 
import roomImg2 from "../COMPONENTS/Images/pro2.jpg";
import roomImg3 from "../COMPONENTS/Images/pro3.png";
import roomImg4 from "../COMPONENTS/Images/pro4.jpg";

const PropertySection = () => {
  const properties = [
    { id: 1, img: roomImg1, loc: "Kakkand, Kochi", price: "4,000", rating: "4.8", reviews: "73" },
    { id: 2, img: roomImg2, loc: "Kakkand, Kochi", price: "4,000", rating: "4.8", reviews: "73" },
    { id: 3, img: roomImg3, loc: "Kakkand, Kochi", price: "4,000", rating: "4.8", reviews: "73" },
    { id: 4, img: roomImg4, loc: "Kakkand, Kochi", price: "4,000", rating: "4.8", reviews: "73" },
  ];

  return (
    <div className="bg-white py-5">
      <div className="container px-4">
        
        {/* Header - View All Button with Teal Border */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold m-0" style={{ fontSize: '20px', color: '#333' }}>
            Your Ideal Pay Guest Stay
          </h4>
          <button 
            className="btn btn-sm px-3 rounded-2 fw-bold" 
            style={{ 
              backgroundColor: 'transparent', 
              border: '1.5px solid #00a6a6', 
              color: '#00a6a6', 
              fontSize: '13px' 
            }}
          >
            View all
          </button>
        </div>

        <div className="row g-4">
          {properties.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100" style={{ border: '1px solid #efefef' }}>
                
                {/* Image & Teal Overlay Buttons */}
                <div className="position-relative p-2">
                  <img src={item.img} className="rounded-4 w-100" alt="room" style={{ height: '180px', objectFit: 'cover' }} />
                  
                  <div className="position-absolute top-0 end-0 m-3 d-flex gap-2">
                    <div className="bg-white p-1 rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', cursor: 'pointer' }}>
                      <i className="bi bi-share" style={{ color: '#00a6a6', fontSize: '15px' }}></i>
                    </div>
                    <div className="bg-white p-1 rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', cursor: 'pointer' }}>
                      <i className="bi bi-heart-fill" style={{ color: '#00a6a6', fontSize: '15px' }}></i>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body pt-0 px-3 pb-3">
                  {/* Price & Badge */}
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <h5 className="fw-bold m-0" style={{ fontSize: '18px' }}>
                      ₹{item.price} <span className="text-secondary fw-normal" style={{ fontSize: '12px' }}>/ Single Share</span>
                    </h5>
                    <span className="badge rounded-1 px-2 py-1" style={{ fontSize: '10px', backgroundColor: '#4d9eff' }}>For Men</span>
                  </div>

                  {/* Location & Rating - Same Line */}
                  <div className="d-flex justify-content-between align-items-center mt-1 mb-2">
                    <p className="text-secondary m-0" style={{ fontSize: '14px' }}>{item.loc}</p>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-star-fill text-warning" style={{ fontSize: '12px' }}></i>
                      <span className="fw-bold ms-1" style={{ fontSize: '13px' }}>{item.rating}</span>
                      <span className="text-secondary ms-1" style={{ fontSize: '11px' }}>({item.reviews})</span>
                    </div>
                  </div>

                  {/* Facilities - No Line, Larger Icons */}
                  <div className="d-flex align-items-center gap-3 pt-1">
                    <div className="d-flex align-items-center gap-2 text-secondary" style={{ fontSize: '14px', fontWeight: '400' }}>
                      <i className="bi bi-wifi" style={{ fontSize: '18px' }}></i> Free Wifi
                    </div>
                    <div className="d-flex align-items-center gap-2 text-secondary" style={{ fontSize: '14px', fontWeight: '400' }}>
                      <img 
                        src="https://img.icons8.com/material-outlined/24/737373/restaurant.png" 
                        alt="food" 
                        style={{ width: '18px', height: '18px' }} 
                      /> 
                      Food Included
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertySection;