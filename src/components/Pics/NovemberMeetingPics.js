import React from 'react';
import cq_awyeah from '../../images/november/cq_awyeah.jpg';
import cq_blitz from '../../images/november/cq_blitz.jpg';
import cq_candles from '../../images/november/cq_candles.jpg';
import cq_chefdrew from '../../images/november/cq_chefdrew.jpg';
import cq_corndog from '../../images/november/cq_corndog.jpg';
import cq_fernet from '../../images/november/cq_fernet.jpg';
import cq_ladies from '../../images/november/cq_ladies.jpg';
import cq_pie from '../../images/november/cq_pie.jpg';
import cq_pizza from '../../images/november/cq_pizza.jpg';
import cq_spookyspread from '../../images/november/cq_spookyspread.jpg';
import cq_spread from '../../images/november/cq_spread.jpg';
import cq_tabledrew from '../../images/november/cq_tabledrew.jpg';

import '../Pics/Pics.css'; // Path to your CSS file

function NovemberMeetingPics() {
    return (
        <div className="gallery-container">
            <h1>November Meeting Gallery</h1>
            <div className="image-gallery">
                <img src={cq_awyeah} alt="Description" />
                <img src={cq_blitz} alt="Description" />
                <img src={cq_candles} alt="Description" />
                <img src={cq_chefdrew} alt="Description" />
                <img src={cq_corndog} alt="Description" />
                <img src={cq_fernet} alt="Description" />
                <img src={cq_ladies} alt="Description" />
                <img src={cq_pie} alt="Description" />
                <img src={cq_pizza} alt="Description" />
                <img src={cq_spookyspread} alt="Description" />
                <img src={cq_spread} alt="Description" />
                <img src={cq_tabledrew} alt="Description" />
            </div>
        </div>
    );
}

export default NovemberMeetingPics;
