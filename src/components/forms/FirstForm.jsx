import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrStep, setCurrData } from '../../slices/formSlice';

const FirstForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { currData } = useSelector((state) => state.formSlice);

  // Load form data from localStorage on component mount
  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    // console.log("Logging",storedFormData)
    if (storedFormData&& storedFormData.currData) {
      setValue('name', storedFormData?.currData?.name || '');
      setValue('email', storedFormData?.currData?.email || '');
      setValue('phone', storedFormData?.currData?.phone || '');
    }
  }, [setValue]); 

  const onSubmit = (data) => {
    dispatch(setCurrData(data)); 
    // Move to the next step
    dispatch(setCurrStep(2)); 
    
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-blue-900 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Step 1: Personal Information</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name should be at least 2 characters',
              },
            })}
            defaultValue={currData.name || ''}
            className={`border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ${
              errors.name ? 'border-red-500' : ''
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            defaultValue={currData.email || ''}
            className={`border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block mb-1">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid phone number (should be 10 digits)',
              },
            })}
            defaultValue={currData.phone || ''}
            className={`border border-gray-600 bg-gray-800 text-black p-2 rounded w-full focus:outline-none focus:border-blue-500 ${
              errors.phone ? 'border-red-500' : ''
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
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

export default FirstForm;
