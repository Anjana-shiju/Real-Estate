import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: '#00a6a6', color: 'white' }}
      className="pt-5 pb-4 mt-5"
    >
      <div className="container pt-4">
        <div className="row g-4">

          {/* Logo Section */}
          <div className="col-12 col-md-4">
            <div className="mb-4">
              <h1
                className="fw-bolder mb-0"
                style={{
                  letterSpacing: '3px',
                  fontSize: '45px',
                  fontFamily: 'sans-serif',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                POKAK
                <span
                  style={{
                    fontSize: '15px',
                    position: 'absolute',
                    top: '5px',
                    right: '-15px',
                  }}
                >
                  ®
                </span>
              </h1>

              <p
                className="small mb-0 opacity-75 mt-1"
                style={{ letterSpacing: '2px', fontSize: '11px' }}
              >
                TECHNOLOGIES PVT LTD
              </p>
            </div>

            {/* Social Icons */}
            <div className="d-flex gap-4 fs-5 mt-4 mb-5">
              {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <Icon
                    key={i}
                    style={{ cursor: 'pointer' }}
                    className="opacity-75 hover-opacity"
                  />
                )
              )}
            </div>
          </div>



          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 opacity-75 small">
              {['Home', 'Rental', 'Paying Guest', 'Buying', 'Offers', 'Bookings'].map(
                (item, i) => (
                  <li key={i} style={{ cursor: 'pointer' }}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Customer Care</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 opacity-75 small">
              {[
                'Help Center',
                'FAQ',
                'Contact Support',
                'Cancellation & Refund Policies',
                'Terms & Conditions',
                'Privacy & Policies',
              ].map((item, i) => (
                <li key={i} style={{ cursor: 'pointer' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>



          {/* Newsletter */}
          <div className="col-12 col-md-3">
            <h6 className="fw-bold mb-3">Stay Connected</h6>
            <p className="small opacity-75 mb-3">
              Subscribe To Our News Letter
            </p>

            <div className="d-flex flex-column gap-3">
              <input
                type="email"
                className="form-control bg-transparent text-white py-2 shadow-none"
                placeholder="Enter Your Email"
                style={{
                  border: '1px solid rgba(255,255,255,0.4)',
                  fontSize: '14px',
                }}
              />

              <button
                className="btn bg-white w-100 fw-bold py-2"
                style={{ color: '#00a6a6' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 pt-4 border-top border-white border-opacity-25 small gap-2">
          <p className="mb-0 opacity-75 text-center text-md-start">
            © 2025 Pokak Technologies Pvt Ltd
          </p>

          <div className="opacity-75 text-center text-md-end">
            Language: <span className="fw-semibold">EN ▼</span>
          </div>
        </div>
      </div>

      {/* Hover effect */}
      <style>{`
        .hover-opacity:hover {
          opacity: 1 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
