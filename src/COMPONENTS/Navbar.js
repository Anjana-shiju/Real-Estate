import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, Menu, User, Home, Building2, Wallet, BedDouble, X } from 'lucide-react';
import logoImg from "../COMPONENTS/Images/logooo.png"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top shadow-sm" style={{ minHeight: '80px' }}>
      <div className="container-fluid px-2 px-md-4">
        
        {/* Main Wrapper: flex-nowrap to keep Kochi and Search in one line */}
        <div className="d-flex align-items-center justify-content-between w-100 flex-nowrap gap-1">
          
          {/* 1. Logo Section */}
          <div className="d-flex align-items-center flex-shrink-0">
            <a className="navbar-brand me-1 me-lg-4" href="/">
              <img 
                src={logoImg} 
                alt="POKAK" 
                style={{ height: '50px', width: 'auto', objectFit: 'contain' }} // Size reduced slightly for mobile space
              />
            </a>

            {/* Desktop Nav Links */}
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
        </div>

          {/* 2. Right Side Group: Kochi, Search, Profile */}
          <div className="d-flex align-items-center flex-nowrap flex-grow-1 justify-content-end gap-1 gap-md-2" style={{ minWidth: '0' }}>
            
            {/* Kochi Location - Text Always Visible Now */}
            <div className="d-flex align-items-center gap-1 text-dark fw-bold border-end pe-1 pe-md-2" style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>
              <MapPin size={18} className="text-dark" />
              <span>Kochi</span> {/* Removed d-none class to keep it visible */}
              <ChevronDown size={12} />
            </div>

            {/* Search Bar - Flexibly shrinks to accommodate Kochi text */}
            <div className="position-relative flex-grow-1" style={{ maxWidth: '250px', minWidth: '60px' }}>
              <Search size={14} className="position-absolute text-secondary" style={{ left: '8px', top: '50%', transform: 'translateY(-50%)', opacity: 0.7 }} />
              <input 
                type="text" 
                placeholder="Search" 
                className="form-control"
                style={{ fontSize: '12px', height: '34px', border: '1.2px solid #00a6a6', borderRadius: '10px', paddingLeft: '28px', width: '100%' }} 
              />
            </div>

            {/* Profile/Toggle Button */}
            <div 
              className="d-flex align-items-center shadow-sm flex-shrink-0" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ 
                border: '1.5px solid #00a6a6', borderRadius: '10px', height: '36px', 
                backgroundColor: '#fff', overflow: 'hidden', cursor: 'pointer'
              }}
            >
              <div className="px-2 d-flex align-items-center justify-content-center" style={{ color: '#00a6a6' }}>
                {isMenuOpen ? <X size={18} /> : <Menu size={18} strokeWidth={2.5} />}
              </div>
              <div 
                className="d-flex align-items-center justify-content-center h-100" 
                style={{ backgroundColor: '#00a6a6', width: '36px', borderLeft: '1.5px solid #00a6a6' }}
              >
                <User size={16} fill="white" color="white" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Mobile Toggle Menu */}
      {isMenuOpen && (
        <div className="position-absolute bg-white w-100 border-bottom shadow-lg d-lg-none" style={{ top: '80px', left: 0, zIndex: 1000 }}>
          <ul className="list-unstyled p-3 mb-0 fw-medium">
            <li className="py-2 border-bottom d-flex align-items-center gap-3"><Home size={20}/> Home</li>
            <li className="py-2 border-bottom d-flex align-items-center gap-3"><Building2 size={20}/> Rent</li>
            <li className="py-2 border-bottom d-flex align-items-center gap-3"><Wallet size={20}/> Buy</li>
            <li className="py-2 d-flex align-items-center gap-3"><BedDouble size={20}/> Paying Guest</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;