

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const StepFrom5 = () => {
  return (
    <div className="w-full px-2 sm:px-4">
      {/* Title */}
      <h3 className="text-[#34495e] font-medium text-[24px] mb-6">
        House Type:
      </h3>

      {/* Radio Group */}
      <RadioGroup className="flex flex-col md:flex-row gap-4">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="apartment" id="apartment" className="bg-white" />
          <Label
            htmlFor="apartment"
            className="text-sm sm:text-base text-[#333333]"
          >
            Apartment Building
          </Label>
        </div>

        <div className="flex items-center gap-3">
          <RadioGroupItem value="single-family" id="single-family" className="bg-white"/>
          <Label
            htmlFor="single-family"
            className="text-sm sm:text-base text-[#333333]"
          >
            Single Family House
          </Label>
        </div>

        <div className="flex items-center gap-3">
          <RadioGroupItem value="company-house" id="company-house" className="bg-white" />
          <Label
            htmlFor="company-house"
            className="text-sm sm:text-base text-[#333333]"
          >
            Company / House
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};
