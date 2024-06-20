import React from 'react';
import { useSelector } from 'react-redux';
import { setCurrStep } from '../../slices/formSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const FinalPreviewData = () => {
    // Fetching data from Redux state
    const { currData } = useSelector((state) => state.formSlice);

    const dispatch = useDispatch();
    const handleEditClick = () => {
        // Dispatch the setCurrStep action to update the current step
        dispatch(setCurrStep(1));
    };

    const navigate = useNavigate();

    const handleSubmitData = () =>{
        toast.success("Data SUBMITTED SUCCESS")
        navigate('/dataSubmitSuccess')    
    }   

    return (
        <div className="max-w-md mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Final Preview Data</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="bg-blue-900 text-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Name:</h2>
                        <p className="text-base">{currData.name}</p>
                    </div>
                    {/* Email */}
                    <div className="bg-blue-900 text-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Email:</h2>
                        <p className="text-base">{currData.email}</p>
                    </div>
                    {/* Phone */}
                    <div className="bg-blue-900 text-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Phone:</h2>
                        <p className="text-base">{currData.phone}</p>
                    </div>
                    {/* Address Line 1 */}
                    <div className="bg-blue-900 text-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Address Line 1:</h2>
                        <p className="text-base">{currData.address1}</p>
                    </div>
                    {/* Address Line 2 */}
                    <div className="bg-blue-900 text-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Address Line 2:</h2>
                        <p className="text-base">{currData.address2}</p>
                    </div>
                    {/* City */}
                    <div className="bg-blue-900 text-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">City:</h2>
                        <p className="text-base">{currData.city}</p>
                    </div>
                    {/* State */}
                    <div className="bg-blue-900 text-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">State:</h2>
                        <p className="text-base">{currData.state}</p>
                    </div>
                    {/* Zip Code */}
                    <div className="bg-blue-900 text-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Zip Code:</h2>
                        <p className="text-base">{currData.zipCode}</p>
                    </div>
                </div>

                <div className='flex flex-row justify-between mt-6'>
                    <button onClick={handleEditClick} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300">
                        Edit
                    </button>

                    <button onClick={handleSubmitData} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300">
                        SUBMIT DATA
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FinalPreviewData;
