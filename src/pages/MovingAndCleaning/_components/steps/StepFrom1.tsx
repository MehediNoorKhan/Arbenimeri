import * as React from "react";
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
    <div className="w-1/2">
      <label className="block text-[#677079] text-sm mb-2">Select Area</label>
      <Select>
        <SelectTrigger className="w-full border p-2 rounded">
          <SelectValue placeholder="Select an area" />
        </SelectTrigger>
        <SelectContent className="max-h-48 overflow-y-auto">
          <SelectGroup>
            <SelectLabel>Switzerland</SelectLabel>
            <SelectItem value="Appenzell Innerrhoden">Appenzell Innerrhoden</SelectItem>
            <SelectItem value="Basel Stadt">Basel Stadt</SelectItem>
            <SelectItem value="Freiburg">Freiburg</SelectItem>
            <SelectItem value="Graubunden">Graubunden</SelectItem>
            <SelectItem value="Neuchatel">Neuchatel</SelectItem>
            <SelectItem value="Schaffhausen">Schaffhausen</SelectItem>
            <SelectItem value="St. Gallen">St. Gallen</SelectItem>
            <SelectItem value="Uri">Uri</SelectItem>
            <SelectItem value="Zug">Zug</SelectItem>
            <SelectItem value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</SelectItem>
            <SelectItem value="Basel Land">Basel Land</SelectItem>
            <SelectItem value="Genf">Genf</SelectItem>
            <SelectItem value="Jura">Jura</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
