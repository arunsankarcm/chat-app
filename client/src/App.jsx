import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homepage';
import Signup from './signup';
import Login from './login';
import { AuthProvider } from './authcontext';

const App = () =>{
  return(
  <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  </AuthProvider>
  )
}

export default App; 