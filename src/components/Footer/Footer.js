import React from 'react';

function Footer() {
    return (
        <footer className="text-center" style={{ backgroundColor: '#FF6347' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-1">
                        <span style={{ color: '#FFD700' }}>&copy; 2023 CLEB</span>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ height: '12px', backgroundColor: '#FF4500', width: '30%' }}></div>
                <div style={{ height: '12px', backgroundColor: '#20B2AA', width: '30%' }}></div>
                <div style={{ height: '12px', backgroundColor: '#FFD700', width: '40%' }}></div>
            </div>
        </footer>
    );
}

export default Footer;
