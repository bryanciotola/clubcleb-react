import React from 'react';
import oct9 from '../../images/october/oct9.jpg';
import oct10 from '../../images/october/oct10.jpg';
import oct1 from '../../images/october/oct1.jpg'; // Replace with actual path
import oct2 from '../../images/october/oct2.jpg'; // Replace with actual path
import oct3 from '../../images/october/oct3.jpg'; // Replace with actual path
import oct4 from '../../images/october/oct4.jpg'; // Replace with actual path
import oct5 from '../../images/october/oct5.jpg'; // Replace with actual path
import oct6 from '../../images/october/oct6.jpg'; // Replace with actual path
import oct7 from '../../images/october/oct7.jpg'; // Replace with actual path
import oct8 from '../../images/october/oct8.jpg'; // Replace with actual path
import '../Pics/Pics.css'; // Path to your CSS file

function OctoberMeetingPics() {
    return (
        <div className="gallery-container">
            <h1>October Meeting Gallery</h1>
            <div className="image-gallery">
                <img src={oct1} alt="Description" />
                <img src={oct2} alt="Description" />
                <img src={oct3} alt="Description" />
                <img src={oct4} alt="Description" />
                <img src={oct5} alt="Description" />
                <img src={oct6} alt="Description" />
                <img src={oct7} alt="Description" />
                <img src={oct8} alt="Description" />
                <img src={oct9} alt="Description" />
                <img src={oct10} alt="Description" />
            </div>
        </div>
    );
}

export default OctoberMeetingPics;
