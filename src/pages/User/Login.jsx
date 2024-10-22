import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/User/Topbar';
import UserNavbar from '../../components/User/UserNavbar';
import Footer from '../../components/User/Footer';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <UserNavbar />
      <div className="flex flex-col md:flex-row flex-1 justify-center items-center px-4">
        {/* Left Side: Login Form */}
        <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 w-full md:px-10 md:ml-20 mt-4 md:mt-10"> 
          <h2 className="text-3xl text-blue-900 font-bold mb-6">Login</h2>
          <form className="w-full max-w-md">
            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Phone or Email
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your phone number or email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="flex justify-between items-center mb-4 w-full">
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => alert('OTP sent!')} // Replace with OTP sending logic
              >
                Get OTP
              </button>
              <p 
                className="text-blue-600 hover:text-blue-700 cursor-pointer"
                onClick={() => alert('OTP resent!')} // Replace with actual resend logic
              >
                Resend OTP
              </p>
            </div>

            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                placeholder="Enter the OTP"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-6 w-full">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Login
              </button>
            </div>

            <p className="text-center">
              Create new account? 
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 font-bold ml-1"
                onClick={() => navigate('/register')} // Redirect to register page
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block h-3/4 mt-14 mr-3 w-px bg-gray-300" />

        {/* Right Side: Logo and Description */}
        <div className="hidden md:flex flex-col justify-center items-center bg-white text-blue-950 md:w-1/2 p-10">
          <div className="text-3xl font-bold mb-4">MyWebsite</div>
          <p className="text-lg text-center">
            Welcome back! Please log in to continue exploring our services. We are glad to have you back!
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
