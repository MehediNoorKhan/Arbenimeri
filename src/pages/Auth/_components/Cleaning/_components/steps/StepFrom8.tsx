import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const options = [
  "Cleaning the Basement",
  "Cleaning Attic",
  "Clean the Garage",
];

type OptionState = Record<string, boolean>;

export const StepFrom8 = () => {
  const [selectedOptions, setSelectedOptions] = useState<OptionState>(() =>
    options.reduce((acc, option) => {
      acc[option] = false;
      return acc;
    }, {} as OptionState)
  );

  const handleCheckboxChange = (option: string, checked: boolean) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: checked,
    }));
  };

  const selectedValues = Object.keys(selectedOptions).filter(
    (key) => selectedOptions[key]
  );

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Title */}
      <h3 className="text-[24px] font-medium text-[#34495e]">
        Other Info:
      </h3>

      {/* Checkbox Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 p-3 rounded-md cursor-pointer transition"
          >
            <Checkbox
              checked={selectedOptions[option]}
              onCheckedChange={(checked) =>
                handleCheckboxChange(option, checked === true)
              }
              className="bg-white"
            />
            <span className="text-[#333333] text-[16px]">
              {option}
            </span>
          </label>
        ))}
      </div>

      {/* Optional: Debug / Preview */}
      {/* <pre className="text-sm text-gray-600">
        {JSON.stringify(selectedValues, null, 2)}
      </pre> */}
    </div>
  );
};
