import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './NavBar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
      </Routes>
      <Home />
    </>
  );
};

export default App;
