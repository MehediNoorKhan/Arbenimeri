"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const StepFrom9 = () => {
  const [cleaning, setCleaning] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Title */}
      <h3 className="text-[24px] font-medium text-[#34495e]">
        Do you want cleaning?
      </h3>

      {/* Radio Group */}
      <RadioGroup
        value={cleaning ?? ""}
        onValueChange={setCleaning}
        className="flex flex-col sm:flex-row gap-4"
      >
        {/* No */}
        <Label
          htmlFor="cleaning-no"
          className="flex items-center gap-3 rounded-md px-4 py-3 cursor-pointer w-full sm:w-auto"
        >
          <RadioGroupItem
            value="no"
            id="cleaning-no"
            className="border-[#399385] text-[#399385] bg-white"
          />
          <span className="text-[#333333] text-sm sm:text-base">No</span>
        </Label>

        {/* Yes */}
        <Label
          htmlFor="cleaning-yes"
          className="flex items-center gap-3 rounded-md px-4 py-3 cursor-pointer w-full sm:w-auto"
        >
          <RadioGroupItem
            value="yes"
            id="cleaning-yes"
            className="border-[#399385] text-[#399385] bg-white"
          />
          <span className="text-[#333333] text-sm sm:text-base">Yes</span>
        </Label>
      </RadioGroup>
    </div>
  );
};
