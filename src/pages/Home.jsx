import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/forms');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg transition transform hover:scale-105">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to the Home Page...</h1>
        <p className="text-lg mb-6 text-gray-600">Click on the button below to start filling out the form</p>
        <button
          onClick={handleOnClick}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        >
          Click Me!
        </button>
      </div>
    </div>
  );
};

export default Home;
