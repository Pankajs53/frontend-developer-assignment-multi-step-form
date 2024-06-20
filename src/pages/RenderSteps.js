import React from 'react'
import { useSelector } from 'react-redux';
import FirstForm from '../components/forms/FirstForm';
import SecondForm from '../components/forms/SecondForm';
import FinalPreviewData from '../components/forms/FinalPreviewData';
import { FaCheck } from 'react-icons/fa';

const RenderSteps = () => {

  const {currStep} = useSelector((state)=>state.formSlice)

  const steps = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];


  return (
    <>
      <div className="relative mb-2 flex w-full justify-center">
        {steps.map((item,index) => (
          <React.Fragment key={item.id}>
            <div
              className="flex flex-col items-center "
            >
              <button
                className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                  currStep === item.id
                    ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                    : "border-richblack-700 bg-richblack-800 text-richblack-300"
                } ${currStep > item.id && "bg-yellow-50 text-yellow-50"}} `}
              >
                {currStep > item.id ? (
                  <FaCheck className="font-bold text-richblack-900" />
                ) : (
                  item.id
                )}
              </button>
              
            </div>
            {item.id !== steps.length && (
              <>
                <div
                  className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${
                  currStep > item.id  ? "border-yellow-50" : "border-richblack-500"
                } `}
                ></div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
        

      {currStep === 1 && <FirstForm />}  
      {currStep === 2 && <SecondForm />}
      {currStep === 3 && <FinalPreviewData />}
    </>
  );
};

export default RenderSteps