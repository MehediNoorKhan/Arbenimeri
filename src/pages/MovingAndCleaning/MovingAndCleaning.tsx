

import { useState} from "react";
import { StepLayout } from "./_components/StepLayout";
import { MovingStep, type MovingStepType } from "../../types/MovingStep";
import { StepFrom1 } from "./_components/steps/StepFrom1";
import { StepFrom2 } from "./_components/steps/StepFrom2";
import AnimatedTitle from "./AnimatedTitle";

const MovingAndCleaning = () => {
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
    <div className="min-h-screen bg-[#EBF4F3] flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28 xl:space-y-32 2xl:space-y-36 px-4">
      
      {/* Animated Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-[64px] font-bold text-center flex flex-wrap justify-center gap-[2px]">
        <AnimatedTitle />
      </h1>

  {/* Processing Steps Card */}
  <div className="w-full max-w-[1100px] bg-white border rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 shadow-xl">

    {/* Our Services Label */}
    <div className="flex justify-start sm:justify-center items-center gap-1 sm:gap-2 w-full sm:w-1/2 md:w-1/3">
      <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
        <g clipPath="url(#clip0_51_5143)">
          <path d="M12 5.98442C7.01299 6.54546 6.57662 7.01299 6.01558 12C5.45455 7.01299 4.98701 6.54546 0 5.98442C4.98701 5.42338 5.45455 4.98701 6.01558 0C6.57662 4.98701 7.01299 5.42338 12 5.98442Z" fill="#399385"/>
        </g>
        <defs>
          <clipPath id="clip0_51_5143">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="uppercase text-[#399385] font-semibold text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg">
        MOVING
      </span>
    </div>

    {/* Processing Steps Heading */}
    <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] font-medium text-[#399385]">
      Processing <span className="text-[#34495e]">Steps</span>
    </h2>

    {/* Circles Row */}
    <div className="flex flex-wrap justify-between w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-full">
      {["1", "2", "3", "4"].map((num, index) => {
        const isActive =
          (currentStep === MovingStep.FROM && index === 0) ||
          (currentStep === MovingStep.AFTER && index === 1);
        return (
          <div key={num} className="flex flex-col items-center flex-1 min-w-[60px]">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                isActive
                  ? "bg-[#399385] text-white border-[#399385]"
                  : "border-[#399385] text-[#399385]"
              }`}
            >
              {num}
            </div>
            <span className="mt-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-center text-[#399385]">
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
