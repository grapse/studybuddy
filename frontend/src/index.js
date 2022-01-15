<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './views/dashboard';
import Navigation from './components/navtest';

ReactDOM.render(
     <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>,
  document.getElementById('root')
);
/** 
 * <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />}>
          <Route path="" element={<Posts />} />
          <Route path=":postSlug" element={<Post />} />
        </Route> 
*/
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard'
import Test from './components/test'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/about" element={<Test />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
>>>>>>> 1a3060e398c05abb496068b4266bc40f162735da
