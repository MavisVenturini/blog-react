import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navBar/Navbar';
import Login from './paginas/login/Login';
import './App.css';
import Home from './paginas/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
