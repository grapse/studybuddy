import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard'
import Navigation from "./components/navbar";
import FlashcardView from "./views/FlashcardView";
import Test from './components/test'
import Calendar from './components/calendar'
import Timer from './components/timer'
import Login from './views/LoginView.jsx';

ReactDOM.render(
  <Router>
    <Navigation path={window.location.pathname}/>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Login />} />
      <Route path="/flashcards" element={<FlashcardView />} />
      <Route path="/about" element={<Test />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

