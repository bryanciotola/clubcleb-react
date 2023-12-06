import React from 'react';
import { Link } from 'react-router-dom';
import cookthisbook from '../../images/cookthisbook.png';
import november from '../../images/november.jpg';
import '../Archive/Archive.css';

function Archive() {
    const meetings = [
        {
            title: 'November Meeting',
            imageUrl: november,
            picsLink: '/november-meeting-pics', // Update this
            buyLink: 'https://www.casserolequeens.com/'
        },
        {
            title: 'October Meeting',
            imageUrl: cookthisbook,
            picsLink: '/october-meeting-pics', // Update this
            buyLink: 'https://mollybaz.com/cook-this-book/'
        }
        // ...other meetings
    ];

    return (
        <div className="archive-container px-3">
            <h1 className="text-center my-3">Archive</h1>
            {meetings.map((meeting, index) => (
                <div key={index} className="meeting-summary-wrapper my-3">
                    <div className="border-color-1">
                        <div className="border-color-2">
                            <div className="border-color-3">
                                <div className="border-color-4">
                                    <div className="border-color-5">
                                        <div className="meeting-summary">
                                            <h4 className="text-center">{meeting.title}</h4>
                                            <img src={meeting.imageUrl} alt={meeting.title} />
                                            <div className="content mt-4">
                                                <Link to={meeting.picsLink} className="btn1-style">View Pics</Link>
                                                <a href={meeting.buyLink} className="btn2-style">Buy Book</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Archive;
