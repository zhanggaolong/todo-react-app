import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';

const RoutesEle = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesEle;
