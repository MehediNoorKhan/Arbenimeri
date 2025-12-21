import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const StepFrom1 = () => {
  return (
    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 px-2 sm:px-0">
      {/* Label */}
      <label className="block text-[#677079] text-sm sm:text-base mb-2">
        Select Area
      </label>

      {/* Select Dropdown */}
      <Select>
        <SelectTrigger className="w-full bg-white border p-2 sm:p-3 rounded-md text-sm sm:text-base">
          <SelectValue placeholder="Select an area" />
        </SelectTrigger>

        <SelectContent className="bg-white max-h-48 sm:max-h-56 overflow-y-auto">
          <SelectGroup>
            <SelectLabel className="text-sm sm:text-base">
              Switzerland
            </SelectLabel>

            <SelectItem value="Appenzell Innerrhoden">
              Appenzell Innerrhoden
            </SelectItem>
            <SelectItem value="Basel Stadt">Basel Stadt</SelectItem>
            <SelectItem value="Freiburg">Freiburg</SelectItem>
            <SelectItem value="Graubunden">Graubunden</SelectItem>
            <SelectItem value="Neuchatel">Neuchatel</SelectItem>
            <SelectItem value="Schaffhausen">Schaffhausen</SelectItem>
            <SelectItem value="St. Gallen">St. Gallen</SelectItem>
            <SelectItem value="Uri">Uri</SelectItem>
            <SelectItem value="Zug">Zug</SelectItem>
            <SelectItem value="Appenzell Ausserrhoden">
              Appenzell Ausserrhoden
            </SelectItem>
            <SelectItem value="Basel Land">Basel Land</SelectItem>
            <SelectItem value="Genf">Genf</SelectItem>
            <SelectItem value="Jura">Jura</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
