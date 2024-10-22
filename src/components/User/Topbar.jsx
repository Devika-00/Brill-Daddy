import React from 'react';

const TopBar = () => {
  return (
    <nav className="bg-white p-4 "> {/* Changed background color to white */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-black text-2xl font-bold ml-16 mt-2"> {/* Changed text color to black */}
          <a href="/">
            <img src="logo.png" alt="Logo" className="h-10 w-auto inline-block" /> {/* Add your logo image here */}
          </a>
        </div>

        {/* Mobile Menu */}
        
      </div>
    </nav>
  );
};

export default TopBar;
