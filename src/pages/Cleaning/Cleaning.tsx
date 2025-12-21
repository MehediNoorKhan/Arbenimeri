import { useState } from "react";
import { StepLayout } from "./_components/StepLayout";
import { CleaningStep, type CleaningStepType } from "../../types/CleaningStep";
import { StepFrom1 } from "./_components/steps/StepFrom1";
import { StepFrom2 } from "./_components/steps/StepFrom2";
import { StepFrom3 } from "./_components/steps/StepFrom3";
import { StepFrom4 } from "./_components/steps/StepFrom4";
import { StepFrom5 } from "./_components/steps/StepFrom5";
import { StepFrom6 } from "./_components/steps/StepFrom6";
import { StepFrom7 } from "./_components/steps/StepFrom7";
import { StepFrom8 } from "./_components/steps/StepFrom8";
import AnimatedTitle from "./AnimatedTitle";
import { StepFrom12 } from "./_components/steps/StepFrom12";
import { StepFrom13 } from "./_components/steps/StepFrom13";
import { StepFrom14 } from "./_components/steps/StepFrom14";
const Cleaning = () => {
  const [currentStep, setCurrentStep] = useState<CleaningStepType>(CleaningStep.CLEANING);
  const [currentSubIndex, setCurrentSubIndex] = useState(0);

  const steps: Record<CleaningStepType, React.ReactNode[]> = {
    [CleaningStep.CLEANING]: [<StepFrom12 key="from12" />,<StepFrom1 key="from1" />, <StepFrom2 key="from2" />, <StepFrom3 key="from3" />, <StepFrom4 key="from4" />, <StepFrom5 key="from5" />, <StepFrom6 key="from6" />, <StepFrom7 key="from7" />, <StepFrom8 key="from8" />, <StepFrom13 key="from13"/>],
    [CleaningStep.NUMBER]: [<StepFrom14 key="from14"/>,],
    [CleaningStep.CONTACT]: [],
  };

  const currentSubComponent = steps[currentStep][currentSubIndex];

  const isLastStep =
    currentStep === CleaningStep.CONTACT &&
    currentSubIndex === steps[CleaningStep.CONTACT].length - 1;

  // Show Back button only if not first sub-step
  const showBack = !(currentStep === CleaningStep.CLEANING && currentSubIndex === 0);

  const handleNext = () => {
    if (currentSubIndex < steps[currentStep].length - 1) {
      setCurrentSubIndex(currentSubIndex + 1);
    } else {
      switch (currentStep) {
        case CleaningStep.CLEANING:
          setCurrentStep(CleaningStep.NUMBER);
          setCurrentSubIndex(0);
          break;
        case CleaningStep.NUMBER:
          setCurrentStep(CleaningStep.CONTACT);
          setCurrentSubIndex(0);
          break;
        case CleaningStep.CONTACT:
          console.log("Submit form or handle final action");
          break;
      }
    }
  };

  const handleBack = () => {
    if (currentSubIndex > 0) {
      setCurrentSubIndex(currentSubIndex - 1);
      return;
    }
    switch (currentStep) {
      case CleaningStep.NUMBER:
        setCurrentStep(CleaningStep.CLEANING);
        setCurrentSubIndex(steps[CleaningStep.CLEANING].length - 1);
        break;
      case CleaningStep.CONTACT:
        setCurrentStep(CleaningStep.NUMBER);
        setCurrentSubIndex(steps[CleaningStep.NUMBER].length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28 xl:space-y-32 2xl:space-y-36 px-4">
      {/* Animated Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-[64px] font-bold text-center flex flex-wrap justify-center gap-[2px]">
        <AnimatedTitle />
      </h1>

  {/* Processing Steps Card */}
  <div className="w-full max-w-[1100px] bg-[#EBF4F3] border rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 shadow-xl">

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
        Cleaning
      </span>
    </div>

    {/* Processing Steps Heading */}
    <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] font-medium text-[#399385]">
      Processing <span className="text-[#34495e]">Steps</span>
    </h2>

    {/* Circles Row */}
    <div className="flex flex-wrap justify-between w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-full">
      {["1", "2", "3"].map((num, index) => {
        const isActive =
          (currentStep === CleaningStep.CLEANING && index === 0) ||
          (currentStep === CleaningStep.NUMBER && index === 1) || 
          (currentStep === CleaningStep.CONTACT && index === 2);
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
              {["Cleaning", "Number", "Contact"][index]}
            </span>
          </div>
        );
      })}
    </div>
  </div>

  <StepLayout
        title={currentStep.charAt(0).toUpperCase() + currentStep.slice(1)}
        onBack={handleBack}
        onNext={handleNext}
        isLastStep={isLastStep}
        showBack={showBack} // <-- showBack passed here
      >
        {currentSubComponent}
      </StepLayout>
    </div>
  );
};

export default Cleaning;
