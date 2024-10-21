import React from 'react';
import Sidebar from './components/Sidebar'; 
import Navbar from './components/Navbar'; 
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Product from './pages/Products'; 
import MainRouter from './Router/Router';

const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

       
        <MainRouter />
      </div>
    </div>
  );
};

export default App;
