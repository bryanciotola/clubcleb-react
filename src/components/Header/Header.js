import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

function Header() {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ height: '20px', backgroundColor: '#20B2AA', width: '20%' }}></div>
                <div style={{ height: '20px', backgroundColor: '#FFD700', width: '40%' }}></div>
                <div style={{ height: '20px', backgroundColor: '#4682B4', width: '40%' }}></div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light py-0">
                <div className="container" style={{ backgroundColor: '#FF6347' }}>
                    
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" style={{ height: '60px' }} /> {/* Adjusted height */}
                    </a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/archive" className="nav-link">Archive</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Header;
