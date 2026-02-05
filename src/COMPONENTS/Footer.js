import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Twitter-inu pakaram 'X'
import logo from "../COMPONENTS/Images/pokka.png"; 

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: '#00a6a6', color: 'white' }}
      className="pt-5 pb-4 mt-5"
    >
      <div className="container pt-4">
        {/* 'align-items-stretch' upayogichu ellathinteyum height same aakki */}
        <div className="row g-4 text-center text-md-start align-items-stretch">

          {/* Logo & Social Section - Quick Links height match aakkanulla logic */}
          <div className="col-12 col-md-4 d-flex flex-column justify-content-between">
            <div className="mb-2">
              {/* Logo valippam Quick Links block-inu anuyojyamaya reethiyil set aakki */}
              <img 
                src={logo} 
                alt="POKAK TECHNOLOGIES" 
                style={{ 
                  width: '100%', 
                  maxWidth: '380px', // Exact visual balance
                  height: 'auto',
                  filter: 'brightness(0) invert(1)' 
                }} 
                className="img-fluid"
              />
            </div>

            {/* Social Media Icons - Exactly below logo area */}
            
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-2">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 opacity-75 small mb-0">
              {['Home', 'Rental', 'Paying Guest', 'Buying', 'Offers', 'Bookings'].map(
                (item, i) => (
                  <li key={i} style={{ cursor: 'pointer', lineHeight: '1.6' }}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="col-12 col-md-3">
            <h6 className="fw-bold mb-3">Customer Care</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 opacity-75 small">
              {[
                'Help Center', 'FAQ', 'Contact Support',
                'Cancellation & Refund', 'Terms & Conditions', 'Privacy & Policies'
              ].map((item, i) => (
                <li key={i} style={{ cursor: 'pointer', lineHeight: '1.6' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-12 col-md-3">
            <h6 className="fw-bold mb-3">Stay Connected</h6>
            <p className="small opacity-75 mb-3">Subscribe To Our News Letter</p>
            <div className="d-flex flex-column gap-3">
              <input
                type="email"
                className="form-control bg-transparent text-white py-2 shadow-none text-center text-md-start"
                placeholder="Enter Your Email"
                style={{ border: '1px solid rgba(255,255,255,0.4)', fontSize: '14px' }}
              />
              <button className="btn bg-white w-100 fw-bold py-2" style={{ color: '#00a6a6' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 pt-4 border-top border-white border-opacity-25 small gap-3">
          <p className="mb-0 opacity-100">© 2026 Pokak Technologies Pvt Ltd</p>
          <div className="opacity-100">
            Language: <span className="fw-semibold">EN ▼</span>
          </div>
        </div>
      </div>

      <style>{`
        .hover-opacity:hover { opacity: 0.7 !important; transition: 0.3s; }
      `}</style>
    </footer>
  );
};

export default Footer;