

interface StepLayoutProps {
  title: string;
  onBack: () => void;
  onNext: () => void;
  children: React.ReactNode;
  isLastStep?: boolean;
  showBack?: boolean; // New prop
}

export const StepLayout: React.FC<StepLayoutProps> = ({
  title,
  onBack,
  onNext,
  children,
  isLastStep = false,
  showBack = true, // default true
}) => {
  return (
    <div className="w-full max-w-[1100px] bg-[#EBF4F3] border rounded-xl p-4 sm:p-6 md:p-8 flex flex-col gap-4 shadow-xl">
      {/* Title */}
      <h2 className="text-center font-medium text-[#399385] 
                     text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[60px]">
        {title}
      </h2>

      {/* Children Content */}
      <div className="px-2">{children}</div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
        {showBack && (
          <button
            className="bg-[#399385] text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full transition-all hover:brightness-110 cursor-pointer"
            onClick={onBack}
          >
            Back
          </button>
        )}
        <button
          className="bg-[#399385] text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full transition-all hover:brightness-110 cursor-pointer"
          onClick={onNext}
        >
          {isLastStep ? "Submit" : "Further"}
        </button>
      </div>
    </div>
  );
};
