
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const StepFrom12 = () => {
  return (
    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 px-2 sm:px-0">
      {/* Label */}
      <label className="block text-[#677079] text-sm sm:text-base mb-2">
        Select Cleaning Type
      </label>

      {/* Select Dropdown */}
      <Select>
        <SelectTrigger className="w-full bg-white border p-2 sm:p-3 rounded-md text-sm sm:text-base">
          <SelectValue placeholder="Moving Cleaning" />
        </SelectTrigger>

        <SelectContent className="bg-white max-h-48 sm:max-h-56 overflow-y-auto">
          <SelectGroup>
            <SelectLabel className="text-sm sm:text-base">
              Cleaning Type
            </SelectLabel>

            <SelectItem value=" Window Cleaning">
              Moving Cleaning
            </SelectItem>
            <SelectItem value=" Window Cleaning">
              Window Cleaning
            </SelectItem>
            <SelectItem value="Floor Cleaning">Floor Cleaning</SelectItem>
            <SelectItem value="Construction Cleaning">Construction Cleaning</SelectItem>
            <SelectItem value="0ffice Cleaning">0ffice Cleaning</SelectItem>
            <SelectItem value="Maintenance Cleaning">Maintenance Cleaning</SelectItem>
            
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
