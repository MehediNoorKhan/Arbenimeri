import React from "react";

interface StepLayoutProps {
  title: string;
  onBack: () => void;
  onNext: () => void;
  children: React.ReactNode;
}

export const StepLayout: React.FC<StepLayoutProps> = ({
  title,
  onBack,
  onNext,
  children,
}) => {
  return (
    <div className="w-full max-w-3xl bg-white border rounded-xl p-6 flex flex-col gap-4">
      <h2 className="text-[52px] text-[#399385] font-medium text-center">{title}</h2>
      <div>{children}</div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="bg-[#399385] text-white xl:px-[24px] xl:py-[16px] rounded-full"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="bg-[#399385] text-white xl:px-[24px] xl:py-[16px]  rounded-full"
          onClick={onNext}
        >
          Further
        </button>
      </div>
    </div>
  );
};
