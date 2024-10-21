import React from 'react';
import Sidebar from './components/Admin/Sidebar'; 
import Navbar from './components/Admin/Navbar'; 
import Dashboard from './pages/Admin/Dashboard';
import User from './pages/Admin/User';
import Product from './pages/Admin/Products'; 
import MainRouter from './Router/Router';

const App = () => {
  return (
    

       
        <MainRouter />
  );
};

export default App;
