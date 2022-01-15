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