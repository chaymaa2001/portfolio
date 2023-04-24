
import React from 'react';
import  { Footer } from './Components/footer'
import  { Header } from './Components/header'
import  { Acc } from './Components/Acceuil'
import  { Project } from './Components/Project'
import  { Certificates } from './Components/Certicates'
import  { Ex } from './Components/Experiences'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import { Contact } from './Components/Cnt';
import { Training } from './Components/Training';

function App() {
  return (
    <Router>
    <Header/>
    
    <div className="main-wrapper">
      <Routes>
      <Route path="/" element={<Acc />} /> 
      <Route path="/p" element={<Project />} /> 
      <Route path="/c" element={<Certificates />} /> 
      <Route path="/e" element={<Ex />} /> 
      <Route path="/t" element={<Training />} /> 
      <Route path="/co" element={<Contact />} /> 
      
      </Routes>
    </div>
    <Footer/>
  </Router>
  );
}

export default App;
