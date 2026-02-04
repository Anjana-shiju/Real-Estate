import React from 'react';


import roomImg1 from "../COMPONENTS/Images/pro1.jfif"; 
import roomImg2 from "../COMPONENTS/Images/pro2.jpg";
import roomImg3 from "../COMPONENTS/Images/pro3.png";
import roomImg4 from "../COMPONENTS/Images/pro4.jpg";

const PropertySection = () => {
  const properties = [
    { id: 1, img: roomImg1, loc: "Kakkand, Kochi" },
    { id: 2, img: roomImg2, loc: "Kakkand, Kochi" },
    { id: 3, img: roomImg3, loc: "Kakkand, Kochi" },
    { id: 4, img: roomImg4, loc: "Kakkand, Kochi" },
  ];

  return (
    <div className="bg-white py-5">
      <div className="container px-4">
        
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold m-0" style={{ fontSize: '22px', color: '#333' }}>
            Find Your Ideal Pay Guest 
          </h4>
          <button 
            className="btn btn-sm px-3 rounded-2 fw-bold text-white" 
            style={{ backgroundColor: '#00a6a6', fontSize: '13px' }}
          >
            View all
          </button>
        </div>

       
        <div className="row g-4">
          {properties.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100" style={{ border: '1px solid #efefef' }}>
                
               
                <div className="position-relative p-2">
                  <img src={item.img} className="rounded-4 w-100" alt="room" style={{ height: '180px', objectFit: 'cover' }} />
                  
                  <div className="position-absolute top-0 end-0 m-3 d-flex gap-2">
                    <div className="bg-white p-1 rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', cursor: 'pointer' }}>
                      <i className="bi bi-share" style={{ color: '#00a6a6', fontSize: '14px' }}></i>
                    </div>
                    <div className="bg-white p-1 rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', cursor: 'pointer' }}>
                      <i className="bi bi-heart" style={{ color: '#00a6a6', fontSize: '14px' }}></i>
                    </div>
                  </div>
                </div>

               
                <div className="card-body pt-0 px-3 pb-3">
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <h5 className="fw-bold m-0" style={{ fontSize: '18px' }}>
                      ₹4,000 <span className="text-secondary fw-normal" style={{ fontSize: '12px' }}>/ Single Share</span>
                    </h5>
                    <span className="badge rounded-1 px-2 py-1" style={{ fontSize: '10px', backgroundColor: '#4d9eff' }}>For Men</span>
                  </div>
                  <p className="text-secondary mb-3 mt-1" style={{ fontSize: '14px' }}>{item.loc}</p>

               
                  <div className="d-flex justify-content-between align-items-center border-top pt-2">
                    <div className="d-flex align-items-center gap-2">
                      <div className="d-flex align-items-center gap-1 text-secondary" style={{ fontSize: '11px' }}>
                        <i className="bi bi-wifi"></i> Free Wifi
                      </div>
                      <div className="d-flex align-items-center gap-1 text-secondary" style={{ fontSize: '11px' }}>
                        <i className="bi bi-egg-fried"></i> Food Included
                      </div>
                    </div>
                  
                    <div className="d-flex align-items-center">
                      <i className="bi bi-star-fill text-warning" style={{ fontSize: '12px' }}></i>
                      <span className="fw-bold ms-1" style={{ fontSize: '13px' }}>4.8</span>
                      <span className="text-secondary ms-1" style={{ fontSize: '11px' }}>(73)</span>
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