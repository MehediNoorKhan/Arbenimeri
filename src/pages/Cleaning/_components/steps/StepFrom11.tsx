import { useState } from "react";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const StepFrom11 = () => {
  const [size, setSize] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Floor and Room inputs */}
      <div className="flex flex-col sm:flex-row gap-4">
  <Input
    placeholder="Floor"
    className="w-full sm:w-1/2 bg-white border rounded-md placeholder:text-[#333333] text-[16px] py-3"
  />
</div>


      {/* Size selection title */}
      <h3 className="text-[24px] font-medium text-[#34495e]">
        Apartment/House Size:
      </h3>

      {/* Radio group for size */}
      <RadioGroup
        value={size ?? ""}
        onValueChange={setSize}
        className="flex flex-col sm:flex-row flex-wrap gap-4"
      >
        {[
          "0-40m²",
          "41-80m²",
          "81-120m²",
          "121-160m²"
        ].map((option) => (
          <Label
            key={option}
            htmlFor={`size-${option}`}
            className="flex items-center gap-3  rounded-md px-4 py-3 cursor-pointer w-full sm:w-auto"
          >
            <RadioGroupItem
              id={`size-${option}`}
              value={option}
              className="border-[#399385] text-[#399385] bg-white"
            />
            <span className="text-[#333333] text-sm sm:text-base">{option}</span>
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
};
