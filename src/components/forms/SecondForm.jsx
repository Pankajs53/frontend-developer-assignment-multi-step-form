import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrStep, setCurrData } from '../../slices/formSlice';

const SecondForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
    const { currData } = useSelector((state) => state.formSlice); 

    // Load form data from localStorage 
    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem('formData'));
        console.log(storedFormData.currData)
        if (storedFormData && storedFormData.currData) {

            //   console.log("Here",storedFormData.currData.address1)  
            setValue('address1', storedFormData.currData.address1 || '');
            setValue('address2', storedFormData.currData.address2 || '');
            setValue('city', storedFormData.currData.city || '');
            setValue('state', storedFormData.currData.state || '');
            setValue('zipCode', storedFormData.currData.zipCode || '');
        }
    }, []); 

    const onSubmit = (data) => {
        // Update Redux state with current form data
        dispatch(setCurrData(data)); 
        // Move to the next step
        dispatch(setCurrStep(3)); 
    };

    return (
        <div className="max-w-lg mx-auto mt-10 bg-blue-900 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Step 2: Address Information</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Address Line 1 Field */}
                <div>
                    <label htmlFor="address1" className="block mb-1">Address Line 1</label>
                    <input
                        type="text"
                        id="address1"
                        {...register('address1', {
                            required: 'Address Line 1 is required',
                        })}
                        defaultValue={currData.address1 || ''}
                        className={`border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ${errors.address1 ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.address1 && (
                        <p className="text-red-500 text-sm mt-1">{errors.address1.message}</p>
                    )}
                </div>

                {/* Address Line 2 Field */}
                <div>
                    <label htmlFor="address2" className="block mb-1">Address Line 2</label>
                    <input
                        type="text"
                        id="address2"
                        {...register('address2')}
                        defaultValue={currData.address2 || ''}
                        className="border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* City Field */}
                <div>
                    <label htmlFor="city" className="block mb-1">City</label>
                    <input
                        type="text"
                        id="city"
                        {...register('city', {
                            required: 'City is required',
                        })}
                        defaultValue={currData.city || ''}
                        className={`border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ${errors.city ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.city && (
                        <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                    )}
                </div>

                {/* State Field */}
                <div>
                    <label htmlFor="state" className="block mb-1">State</label>
                    <input
                        type="text"
                        id="state"
                        {...register('state', {
                            required: 'State is required',
                        })}
                        defaultValue={currData.state || ''}
                        className={`border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ${errors.state ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.state && (
                        <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                    )}
                </div>

                {/* Zip Code Field */}
                <div>
                    <label htmlFor="zipCode" className="block mb-1">Zip Code</label>
                    <input
                        type="text"
                        id="zipCode"
                        {...register('zipCode', {
                            required: 'Zip Code is required',
                            pattern: {
                                value: /^\d{8}(-\d{4})?$/,
                                message: 'Invalid zip code format',
                            },
                        })}
                        defaultValue={currData.zipCode || ''}
                        className={`border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ${errors.zipCode ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.zipCode && (
                        <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="text-center">

                </div>

                <div className='flex flex-row justify-between mt-6'>
                    <button
                        onClick={()=>dispatch(setCurrStep(1))}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
                    >
                        Previous
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SecondForm;
