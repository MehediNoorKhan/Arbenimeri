import { useState, useEffect } from "react";
import { StepLayout } from "./_components/StepLayout";
import { MovingStep, type MovingStepType } from "../../types/MovingStep";
import { StepFrom1 } from "./_components/steps/StepFrom1";
import { StepFrom2 } from "./_components/steps/StepFrom2";
import AnimatedTitle from "./AnimatedTitle";
// import other steps as needed

const MovingAndCleaning = () => {
  const fullText = "Hits it down the ground";
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  // Animate letters from opacity 0 -> 100 and slight upward motion
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleIndexes((prev) => [...prev, index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80); // adjust speed per letter
    return () => clearInterval(interval);
  }, []);

  // Wizard state
  const [currentStep, setCurrentStep] = useState<MovingStepType>(MovingStep.FROM);
  const [currentSubIndex, setCurrentSubIndex] = useState(0);

  const steps: Record<MovingStepType, React.ReactNode[]> = {
    [MovingStep.FROM]: [<StepFrom1 key="from1" />, <StepFrom2 key="from2" />],
    [MovingStep.AFTER]: [],
    [MovingStep.CLEANING]: [],
    [MovingStep.CONTACT]: [],
  };

  const currentSubComponent = steps[currentStep][currentSubIndex];

  const handleNext = () => {
    if (currentSubIndex < steps[currentStep].length - 1) {
      setCurrentSubIndex(currentSubIndex + 1);
    } else {
      switch (currentStep) {
        case MovingStep.FROM:
          setCurrentStep(MovingStep.AFTER);
          setCurrentSubIndex(0);
          break;
        case MovingStep.AFTER:
          setCurrentStep(MovingStep.CLEANING);
          setCurrentSubIndex(0);
          break;
        case MovingStep.CLEANING:
          setCurrentStep(MovingStep.CONTACT);
          setCurrentSubIndex(0);
          break;
        case MovingStep.CONTACT:
          break;
      }
    }
  };

  const handleBack = () => {
    if (currentSubIndex > 0) setCurrentSubIndex(currentSubIndex - 1);
  };

  return (
    <div className="min-h-screen bg-[#EBF4F3] flex flex-col items-center py-16 space-y-[120px]">
      {/* Animated Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center flex flex-wrap justify-center gap-[2px]">
       <AnimatedTitle/>
      </h1>

{/* Processing Steps Card */}
<div className="w-full max-w-3xl bg-white border rounded-xl p-6 flex flex-col items-center gap-6 mt-4 shadow-xl">
  
  {/* Our Services Label inside the card */}
  <div className="flex justify-center items-center gap-1">
    <svg
      width="16"
      height="16"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_51_5143)">
        <path
          d="M12 5.98442C7.01299 6.54546 6.57662 7.01299 6.01558 12C5.45455 7.01299 4.98701 6.54546 0 5.98442C4.98701 5.42338 5.45455 4.98701 6.01558 0C6.57662 4.98701 7.01299 5.42338 12 5.98442Z"
          fill="#399385"
        />
      </g>
      <defs>
        <clipPath id="clip0_51_5143">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <span className="uppercase text-[#399385]  font-semibold">
      MOVING
    </span>
  </div>

  {/* Processing Steps Heading */}
  <h2 className="text-center xl:text-[48px] font-medium text-[#399385] ">Processing <span className="text-[#34495e]">Steps</span></h2>

  {/* Circles Row */}
  <div className="flex justify-between w-full max-w-md mb-2">
    {["1", "2", "3", "4"].map((num, index) => {
      const isActive =
        (currentStep === MovingStep.FROM && index === 0) ||
        (currentStep === MovingStep.AFTER && index === 1);
      return (
        <div key={num} className="flex flex-col items-center">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${
              isActive
                ? "bg-[#399385] text-white border-[#399385]"
                : "border-[#399385] text-[#399385]"
            }`}
          >
            {num}
          </div>
          {/* Label slightly below each circle */}
          <span className="mt-2 text-sm font-medium text-center text-[#399385]">
            {["From", "After", "Cleaning", "Contact"][index]}
          </span>
        </div>
      );
    })}
  </div>
</div>



      {/* Dynamic Step Card */}
      <StepLayout
        title={currentStep.charAt(0).toUpperCase() + currentStep.slice(1)}
        onBack={handleBack}
        onNext={handleNext}
      >
        {currentSubComponent}
      </StepLayout>
    </div>
  );
};

export default MovingAndCleaning;
