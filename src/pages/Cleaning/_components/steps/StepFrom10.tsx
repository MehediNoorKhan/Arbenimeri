
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export const StepFrom10 = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Title */}
      <h3 className="text-[24px] font-medium text-[#34495e] mb-4">
        Contact Details
      </h3>

      {/* Salutation Select */}
      <div className="w-full sm:w-1/3">
        <label className="block text-[#677079] text-sm sm:text-base mb-2">
          Salutation
        </label>
        <Select>
          <SelectTrigger className="w-full border p-2 sm:p-3 rounded-md text-sm sm:text-base bg-white">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="max-h-48 sm:max-h-56 overflow-y-auto">
            <SelectGroup>
              <SelectLabel className="text-sm sm:text-base">Title</SelectLabel>
              <SelectItem value="mr">Mr</SelectItem>
              <SelectItem value="mrs">Mrs</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Name Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Input
          placeholder="Enter First Name"
          className="w-full bg-white placeholder:text-[#333333] text-[16px] p-3 rounded-md"
        />
        <Input
          placeholder="Enter Surname"
          className="w-full bg-white placeholder:text-[#333333] text-[16px] p-3 rounded-md"
        />
      </div>

      {/* Contact Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Input
          type="email"
          placeholder="Enter Email Address"
          className="w-full bg-white placeholder:text-[#333333] text-[16px] p-3 rounded-md"
        />
        <Input
          type="tel"
          placeholder="Enter Telephone Number"
          className="w-full bg-white placeholder:text-[#333333] text-[16px] p-3 rounded-md"
        />
      </div>
    </div>
  );
};
