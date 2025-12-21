import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const StepFrom4 = () => {
  return (
    <div className="w-full px-2 sm:px-4">
      {/* Title */}
      <h3 className="text-[#34495e] font-medium text-[24px]  mb-4">
        I would like inquiries for the following work:
      </h3>

      {/* Radio Group */}
      <RadioGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="not-flexible" id="not-flexible" className="bg-white"/>
          <Label
            htmlFor="not-flexible"
            className="text-sm sm:text-base text-[#333333]"
          >
            Not flexible
          </Label>
        </div>

        <div className="flex items-center gap-3">
          <RadioGroupItem value="plus-minus-1" id="plus-minus-1" className="bg-white"/>
          <Label
            htmlFor="plus-minus-1"
            className="text-sm sm:text-base text-[#333333]"
          >
            +/- 1 Day
          </Label>
        </div>

        <div className="flex items-center gap-3">
          <RadioGroupItem value="plus-minus-2" id="plus-minus-2" className="bg-white" />
          <Label
            htmlFor="plus-minus-2"
            className="text-sm sm:text-base text-[#333333]"
          >
            +/- 2 Days
          </Label>
        </div>

        <div className="flex items-center gap-3">
          <RadioGroupItem value="plus-minus-3" id="plus-minus-3" className="bg-white"/>
          <Label
            htmlFor="plus-minus-3"
            className="text-sm sm:text-base text-[#333333]"
          >
            +/- 3 Days
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};
