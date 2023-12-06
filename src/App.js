import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Archive from './components/Archive/Archive';
import OctoberMeetingPics from './components/Pics/OctoberMeetingPics';
import NovemberMeetingPics from './components/Pics/NovemberMeetingPics';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App"> {/* Ensure the entire app is wrapped in the 'App' class */}
        <Header />

        {/* Main content area */}
        <div className="content"> {/* This div will grow to fill available space */}
          <Routes>
            <Route exact path="/" element={<MainContent />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/october-meeting-pics" element={<OctoberMeetingPics />} />
            <Route path="/november-meeting-pics" element={<NovemberMeetingPics />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
