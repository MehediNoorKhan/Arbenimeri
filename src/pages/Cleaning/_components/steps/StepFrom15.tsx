import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const options = ["1st", "2nd", "3rd", "4th", "5th", "6th"];

export const StepFrom15 = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-around gap-6">
      {/* Shower / Toilet */}
      <div className="flex flex-col gap-2">
        <Label className="text-[16px] text-[#677079]">
          Shower/Toilet
        </Label>
        <Select defaultValue="-">
          <SelectTrigger className="bg-white text-[#677079] text-[16px]">
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="-">-</SelectItem>
            {options.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Bath / WC */}
      <div className="flex flex-col gap-2">
        <Label className="text-[16px] text-[#677079]">
          Bath/WC
        </Label>
        <Select defaultValue="-">
          <SelectTrigger className="bg-white text-[#677079] text-[16px]">
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="-">-</SelectItem>
            {options.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* WC */}
      <div className="flex flex-col gap-2">
        <Label className="text-[16px] text-[#677079]">
          WC
        </Label>
        <Select defaultValue="-">
          <SelectTrigger className="bg-white text-[#677079] text-[16px]">
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="-">-</SelectItem>
            {options.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
