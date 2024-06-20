import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetForm } from '../slices/formSlice';

const SuccessPage = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleClick = () => {
        toast.success("Redirecting to home page in 3 seconds...");
        dispatch(resetForm())
        const timeoutId = setTimeout(() => {
            navigate("/");
        }, 3000);

        
        return () => clearTimeout(timeoutId);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg text-center">
                <h1 className="text-3xl font-bold mb-4">Thank you for filling the form...</h1>
                <h2 className="text-xl mb-6">Click the button below to return to the Home Page.</h2>
                <button
                    onClick={handleClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Click Me!!
                </button>
            </div>
        </div>
    );
};

export default SuccessPage;
