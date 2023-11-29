import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Archive from './components/Archive/Archive';
import OctoberMeetingPics from './components/Pics/OctoberMeetingPics';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainContent />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/october-meeting-pics" element={<OctoberMeetingPics />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
