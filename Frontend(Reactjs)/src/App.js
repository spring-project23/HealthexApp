import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OtherComponent from './OtherComponent';
import Medications from './Medications';
import ElderlyCompanionApp from './ElderlyCompanionApp';
import EmergencyContacts from './EmergencyContacts';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OtherComponent />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/ElderlyCompanionApp" element={<ElderlyCompanionApp />} />
        <Route path="/EmergencyContacts" element={<EmergencyContacts />} />
      </Routes>
    </Router>
  );
};

export default App;





















