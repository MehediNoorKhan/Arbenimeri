import { Textarea } from "@/components/ui/textarea";

export const StepFrom13 = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Textarea */}
      <Textarea
        placeholder="Remarks"
        className="
          bg-white 
          text-[#333333] 
          text-[16px] 
          placeholder:text-[#333333]
          resize-none
          min-h-[320px]  md:min-h-[420px]
        "
      />
    </div>
  );
};
