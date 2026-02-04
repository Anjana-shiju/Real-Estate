import React from 'react';
import houseImg from "../COMPONENTS/Images/ban"; 
import personImg from "../COMPONENTS/Images/person11.png"; 

const PromoBanners = () => {
  const outerShadow = {
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)',
    border: 'none'
  };

  return (
    /* Footer-umayi nalla gap kittan 'margin-bottom' 120px aakki */
    <div className="container px-4" style={{ marginBottom: '400px', marginTop: '80px' }}> 
      <div className="row g-4">
        
        {/* Left Banner */}
        <div className="col-md-6">
          <div 
            className="rounded-4 overflow-hidden position-relative text-white p-4 d-flex flex-column justify-content-center" 
            style={{ 
              ...outerShadow,
              height: '260px', 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${houseImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h2 className="fw-bold mb-1" style={{ fontSize: '32px' }}>Affordable PG</h2>
            <h4 className="fw-light mb-3">Extra 10% off</h4>
            <button className="btn rounded-3 fw-bold mt-2" style={{ backgroundColor: '#00a6a6', color: 'white', width: 'fit-content', padding: '10px 25px', border: 'none' }}>
              View Details
            </button>
          </div>
        </div>

        {/* Right Banner with Inner Shaded Box */}
        <div className="col-12 col-md-6">
  <div
    className="rounded-4 d-flex align-items-center px-3 px-md-5"
    style={{
      minHeight: '260px',
      background: 'linear-gradient(90deg, #f2f2f2 0%, #bbbbbb 60%)',
      boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
      gap: '12px',
    }}
  >
    {/* IMAGE – LEFT */}
    <div
  className="d-flex align-items-end justify-content-center"
  style={{
    width: '45%',
    height: '280px',   // 👈 banner height
    overflow: 'hidden',
  }}
>
  <img
  src={personImg}
  alt="offer"
  style={{
    width: '100%',
    height: '100%',        // 👈 full height edukum
    // objectFit: 'cover',    // 👈 valuth aayi fill
    objectPosition: 'bottom',
    display: 'block',
  }}
/>

      
    </div>

    {/* TEXT – RIGHT */}
    <div style={{ width: '55%' }}>
      <h2 className="fw-bold mb-1 fs-5 fs-md-3" style={{ color: '#00a6a6' }}>
        Save $200
      </h2>

      <p className="text-secondary mb-2 small">
        On Booking Via Credit Card
      </p>

      <button
        className="btn fw-bold text-white px-3 px-md-4 py-2 rounded-3"
        style={{ backgroundColor: '#00a6a6', border: 'none' }}
      >
        View More
      </button>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default PromoBanners;