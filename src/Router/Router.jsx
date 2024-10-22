import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "../pages/Admin/User";
import Product from "../pages/Admin/Products";
import Dashboard from "../pages/Admin/Dashboard";
import Orders from "../pages/Admin/Orders";
import Voucher from "../pages/Admin/Vocher";
import Login from "../pages/Admin/Login";
import Register from "../pages/User/Register";
import UserLogin from "../pages/User/Login";
import HomePage from "../pages/User/HomePage";


const MainRouter = () => {
  return (
    <Router>
      <Routes>
        {/*Admin Routes */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/products" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/vouchers" element={<Voucher />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
