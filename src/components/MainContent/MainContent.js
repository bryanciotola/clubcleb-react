import React from 'react';
import '../MainContent/MainContent.css';
import clebcrew from '../../images/clebcrew.png';


function MainContent() {
    return (
        <div className="container-fluid my-0" style={{ backgroundColor: '#FF6347' }}>
            <div className="row justify-content-center my-0">
                <div className="col-md-6 text-center">
                    {/* Image */}
                    <div style={{ padding: '15px', backgroundColor: '#FF4500' }}>
                        <div style={{ padding: '10px', backgroundColor: '#20B2AA' }}>
                            <div style={{ padding: '10px', backgroundColor: '#FFD700' }}>
                                <div style={{ padding: '10px', backgroundColor: '#4682B4' }}>
                                    <div style={{ padding: '10px', backgroundColor: '#FFA07A' }}>
                                        {/* Centered Image */}
                                        <img src={clebcrew} className="img-fluid mb-4" alt="Centered" style={{ maxWidth: '100%' }} />
                                        {/* Replace with your image path */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="my-4">
                        <button type="button" className="btn btn-lg rounded-pill my-2 btn1-style">Current</button>
                        <button type="button" className="btn btn-lg rounded-pill my-2  btn2-style">Archive</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
