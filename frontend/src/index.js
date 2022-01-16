import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard'
import Navigation from "./components/navbar";
import FlashcardView from "./views/flashcardview";

ReactDOM.render(
  <Router>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/flashcard" element={<FlashcardView />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

