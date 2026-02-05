import React from 'react';
import rent1 from "../COMPONENTS/Images/rop1.jpg";
import rent2 from "../COMPONENTS/Images/rop2.jfif";
import rent3 from "../COMPONENTS/Images/rop3";
import rent4 from "../COMPONENTS/Images/rop4.jfif";

const RentProperties = () => {
  const rentData = [
    { id: 1, img: rent1, price: "10,000", title: "3BHK House" },
    { id: 2, img: rent2, price: "10,000", title: "3BHK House" },
    { id: 3, img: rent3, price: "10,000", title: "3BHK House" },
    { id: 4, img: rent4, price: "10,000", title: "3BHK House" },
  ];

  return (
    /* Background color changed to bg-light (#f8f9fa) */
    <div className="py-5" style={{ backgroundColor: '#f0f2f5' }}> 
      <div className="container px-4">
        
        {/* Header Section - Fixed for Mobile */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold m-0" style={{ fontSize: '20px', color: '#333', maxWidth: '70%' }}>
            Best Properties For Rent
          </h4>
          <button 
            className="btn btn-sm px-3 rounded-2 fw-bold text-white" 
            style={{ backgroundColor: '#00a6a6', fontSize: '13px' }}
          >
            View all
          </button>
        </div>

        <div className="row g-4">
          {rentData.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100" style={{ border: '1px solid #efefef' }}>
                
                {/* Image & Teal Overlay Buttons */}
                <div className="position-relative p-2">
                  <img src={item.img} className="rounded-4 w-100" alt="property" style={{ height: '180px', objectFit: 'cover' }} />
                  
                  <div className="position-absolute top-0 end-0 m-3 d-flex gap-2">
                    {/* Share Icon Teal */}
                    <div className="bg-white p-1 rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', cursor: 'pointer' }}>
                      <i className="bi bi-share" style={{ color: '#00a6a6', fontSize: '14px' }}></i>
                    </div>
                    {/* Heart Icon Teal */}
                    <div className="bg-white p-1 rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', cursor: 'pointer' }}>
                      <i className="bi bi-heart-fill" style={{ color: '#00a6a6', fontSize: '14px' }}></i>
                    </div>
                  </div>
                </div>

                <div className="card-body pt-0 px-3 pb-3">
                  <h5 className="fw-bold mt-2 mb-0" style={{ fontSize: '18px' }}>
                    ₹{item.price}<span className="text-secondary fw-normal" style={{ fontSize: '12px' }}>/Month</span>
                  </h5>
                  <p className="fw-bold mb-1" style={{ fontSize: '14px', color: '#333' }}>{item.title}</p>
                  
                  {/* Location & Rating Same Line */}
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="text-secondary mb-0" style={{ fontSize: '13px' }}>Kakkand, Kochi</p>
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

export default RentProperties;