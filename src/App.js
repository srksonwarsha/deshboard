import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Numbers from './pages/Numbers.jsx';
import Teams from './pages/Teams.jsx';
import Staff from './pages/Staff.jsx';
import Contacts from './pages/Contacts.jsx';
import CallHistory from './pages/Callhistory.jsx';
import Insights from './pages/Insights';

const App = () => {

  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/numbers" element={<Numbers />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/callHistory" element={<CallHistory />} />
          <Route path="/insights" element={<Insights />} />
          </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;