import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "../pages/User";
import Product from "../pages/Products";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Voucher from "../pages/Vocher";


const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/products" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/vouchers" element={<Voucher />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
