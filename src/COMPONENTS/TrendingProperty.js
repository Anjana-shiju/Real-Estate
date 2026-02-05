import React from 'react';
import prop1 from "../COMPONENTS/Images/trop1.jpg";
import prop2 from "../COMPONENTS/Images/trop2";
import prop3 from "../COMPONENTS/Images/trop3";
import prop4 from "../COMPONENTS/Images/trop4";
import prop5 from "../COMPONENTS/Images/trop5";
import prop6 from "../COMPONENTS/Images/trop6.jpg";
import prop7 from "../COMPONENTS/Images/trop7";
import prop8 from "../COMPONENTS/Images/trop8.jpg";

const TrendingProperties = () => {
  const trendingData = [
    { id: 1, img: prop1, price: "50 Lac", title: "3BHK House" },
    { id: 2, img: prop2, price: "50 Lac", title: "3BHK House" },
    { id: 3, img: prop3, price: "50 Lac", title: "3BHK House" },
    { id: 4, img: prop4, price: "50 Lac", title: "3BHK House" },
    { id: 5, img: prop5, price: "50 Lac", title: "3BHK House" },
    { id: 6, img: prop6, price: "50 Lac", title: "3BHK House" },
    { id: 7, img: prop7, price: "50 Lac", title: "3BHK House" },
    { id: 8, img: prop8, price: "50 Lac", title: "3BHK House" },
  ];

  return (
    <div className="py-5" style={{ backgroundColor: '#e0f7f7' }}> 
      <div className="container px-4">
        
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold m-0" style={{ fontSize: '18px', color: '#333' }}>
            Trending Properties Near You
          </h4>
          <button 
            className="btn btn-sm px-3 rounded-2 fw-bold text-white" 
            style={{ backgroundColor: '#00a6a6', fontSize: '13px' }}
          >
            View all
          </button>
        </div>
        
        <div className="row g-4">
          {trendingData.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                
                <div className="position-relative p-2">
                  <img src={item.img} className="rounded-4 w-100" alt="property" style={{ height: '160px', objectFit: 'cover' }} />
                  
                  {/* Share & Heart Icons - White Circle with Teal Icons */}
                  <div className="position-absolute top-0 end-0 m-3 d-flex gap-2">
                    {/* Share Icon */}
                    <div 
                      className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center" 
                      style={{ width: '32px', height: '32px', cursor: 'pointer' }}
                    >
                      <i className="bi bi-share" style={{ color: '#00a6a6', fontSize: '14px' }}></i>
                    </div>
                    
                    {/* Heart Icon (Filled Teal Heart) */}
                    <div 
                      className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center" 
                      style={{ width: '32px', height: '32px', cursor: 'pointer' }}
                    >
                      <i className="bi bi-heart-fill" style={{ color: '#00a6a6', fontSize: '16px' }}></i>
                    </div>
                  </div>
                </div>

                <div className="card-body pt-0 px-3 pb-3">
                  <h5 className="fw-bold mt-2 mb-1" style={{ fontSize: '17px' }}>₹{item.price}</h5>
                  <p className="fw-bold mb-0" style={{ fontSize: '14px', color: '#444' }}>{item.title}</p>
                  <div className="d-flex justify-content-between align-items-center mt-1">
                    <p className="text-secondary mb-0" style={{ fontSize: '13px' }}>Kakkand, Kochi</p>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-star-fill text-warning" style={{ fontSize: '12px' }}></i>
                      <span className="fw-bold ms-1" style={{ fontSize: '12px' }}>4.8</span>
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

export default TrendingProperties;