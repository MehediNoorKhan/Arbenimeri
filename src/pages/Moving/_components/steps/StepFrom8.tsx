
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const options = [
  "Basement",
  "Piano",
  "Attic",
  "Garage",
  "Wing",
  "Storage",
  "Disassembly/Assembly",
];

export const StepFrom8 = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (option: string, checked: boolean) => {
    if (checked) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Title */}
      <h3 className="text-[24px] font-medium text-[#34495e]">Other Info:</h3>

      {/* Checkbox Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 p-2 cursor-pointer  rounded-md"
          >
            <Checkbox
              checked={selectedOptions.includes(option)}
              onCheckedChange={(checked) =>
                handleCheckboxChange(option, checked === true)
              }
              className="bg-white"
            />
            <span className="text-[#333333] text-[16px]">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
