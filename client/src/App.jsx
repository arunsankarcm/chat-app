import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homepage';
import Signup from './signup';
import Login from './login';
import { AuthProvider } from './authcontext';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute'; // Import the PrivateRoute component

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/layout" element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;
