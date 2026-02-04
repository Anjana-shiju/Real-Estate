import React from 'react';
import { Home, MapPin, Search, User, Menu, ChevronDown, BedDouble, Building2, Wallet } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top shadow-sm" style={{ minHeight: '90px' }}>
      <div className="container-fluid px-md-5">
        
        
        <div className="d-flex align-items-center py-2">
          <div className="d-flex flex-column justify-content-center">
            <h2 className="m-0 fw-bolder lh-1" style={{ 
              color: '#00a6a6', 
              letterSpacing: '1px', 
              fontSize: '32px',
              position: 'relative',
              display: 'inline-block'
            }}>
              POKAK
              
              <span style={{ 
                fontSize: '12px', 
                position: 'absolute', 
                top: '-2px', 
                right: '-0px',
                fontWeight: 'bold'
              }}>
                ®
              </span>
            </h2>
            <span className="fw-bold text-secondary text-uppercase" style={{ fontSize: '8px', letterSpacing: '1.5px', marginTop: '4px' }}>
              Technologies Pvt Ltd
            </span>
          </div>
        </div>

        {/* 2. Center Links */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav d-flex flex-row align-items-center gap-5">
            <li className="nav-item">
              <div className="d-flex align-items-center gap-2 fw-bold text-dark" style={{ cursor: 'pointer', fontSize: '16px' }}>
                <Home size={20} className="text-dark" /> Home
              </div>
            </li>
            <li className="nav-item">
              <div className="d-flex align-items-center gap-2 text-secondary fw-medium" style={{ cursor: 'pointer', fontSize: '16px' }}>
                <Building2 size={20} /> Rent
              </div>
            </li>
            <li className="nav-item">
              <div className="d-flex align-items-center gap-2 text-secondary fw-medium" style={{ cursor: 'pointer', fontSize: '16px' }}>
                <Wallet size={20} /> Buy
              </div>
            </li>
            <li className="nav-item">
              <div className="d-flex align-items-center gap-2 text-secondary fw-medium" style={{ cursor: 'pointer', fontSize: '16px' }}>
                <BedDouble size={20} /> Paying Guest
              </div>
            </li>
          </ul>
        </div>

        {/* 3. Right Side */}
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-2 text-dark fw-bold border-end pe-4" style={{ fontSize: '15px' }}>
            <MapPin size={20} />
            <span>Kochi</span>
            <ChevronDown size={16} />
          </div>

          <div className="position-relative d-none d-md-block">
            <Search size={18} className="position-absolute text-secondary" style={{ left: '15px', top: '10px' }} />
            <input 
              type="text" 
              placeholder="Search" 
              className="form-control rounded-pill ps-5"
              style={{ fontSize: '14px', width: '220px', border: '1.5px solid #00a6a6', height: '40px' }}
            />
          </div>

          <div className="d-flex align-items-center p-1 rounded-3" style={{ border: '1.5px solid #00a6a6' }}>
            <button className="btn border-0 p-1 px-2" style={{ color: '#00a6a6' }}>
              <Menu size={22} strokeWidth={2.5} />
            </button>
            <button className="btn p-1 px-2 text-white rounded-2" style={{ backgroundColor: '#00a6a6' }}>
              <User size={20} fill="white" />
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;