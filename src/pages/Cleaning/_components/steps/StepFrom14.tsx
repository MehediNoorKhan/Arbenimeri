
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export const StepFrom14 = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-around gap-6">
      {/* Window */}
      <div className="flex flex-col gap-2">
        <Label className="text-[16px] text-[#677079]">Window</Label>
        <Select defaultValue="-">
          <SelectTrigger className="bg-white text-[#677079] text-[16px]">
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="-">-</SelectItem>
            <SelectItem value="1st">1st</SelectItem>
            <SelectItem value="2nd">2nd</SelectItem>
            <SelectItem value="3rd">3rd</SelectItem>
            <SelectItem value="4th">4th</SelectItem>
            <SelectItem value="5-7">5–7</SelectItem>
            <SelectItem value="8-10">8–10</SelectItem>
            <SelectItem value="11-15">11–15</SelectItem>
            <SelectItem value="16-20">16–20</SelectItem>
            <SelectItem value="21-30">21–30</SelectItem>
            <SelectItem value="31-50">31–50</SelectItem>
            <SelectItem value="more-50">More than 50</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Floor Type */}
      <div className="flex flex-col gap-2">
        <Label className="text-[16px] text-[#677079]">Floor Type</Label>
        <Select defaultValue="-">
          <SelectTrigger className="bg-white text-[#677079] text-[16px]">
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="-">-</SelectItem>
            <SelectItem value="parquet">Parquet</SelectItem>
            <SelectItem value="laminate">Laminate</SelectItem>
            <SelectItem value="linoleum">Linoleum</SelectItem>
            <SelectItem value="carpet">Carpet</SelectItem>
            <SelectItem value="plattli">Plattli</SelectItem>
            <SelectItem value="various">Various</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Window Size */}
      <div className="flex flex-col gap-2">
        <Label className="text-[16px] text-[#677079]">Window Size</Label>
        <Select defaultValue="-">
          <SelectTrigger className="bg-white text-[#677079] text-[16px]">
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="-">-</SelectItem>
            <SelectItem value="120x60">
              Height 120cm Width 60cm
            </SelectItem>
            <SelectItem value="120x100">
              Height 120cm Width 100cm
            </SelectItem>
            <SelectItem value="200x60">
              Height 200cm Width 60cm
            </SelectItem>
            <SelectItem value="200x100">
              Height 200cm Width 100cm
            </SelectItem>
            <SelectItem value="200x180">
              Height 200cm Width 180cm
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
