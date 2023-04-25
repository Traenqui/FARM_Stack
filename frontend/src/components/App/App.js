import React, { useState, useContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';
import Topbar from '../Global/Topbar';
import Sidebar from '../Global/Sidebar';
import Team from '../Team/Team';
import Contacts from '../Contacts/Contacts';
import Invoices from '../Invoice/Invoice';
import Calendar from '../Calendar/Calendar';
import Tracker from '../Tracker/Tracker';


import { ThemeContext } from "../Global/Theme";

function App() {
  const [token, setToken] = useState();
  const { theme } = useContext(ThemeContext);


  if (token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <div className={`App ${theme} container`} id='root'>
        <div>
          <Sidebar />
          <div className='container'>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/tracker" element={<Tracker />} />
              <Route path="/invoice" element={<Invoices />} />
              <Route path="/preference" element={<Preferences />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;