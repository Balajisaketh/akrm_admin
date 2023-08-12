import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bookings from './Bookings';
import { Route, Routes } from 'react-router-dom';
import Payments from './Payments';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<></>} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/payments" element={<Payments/>} />
       </Routes>
     
    </div>
  );
}

export default App;
