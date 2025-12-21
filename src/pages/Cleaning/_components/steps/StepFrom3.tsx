

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type OrderType = "specific" | "flexible" | null;

export const StepFrom3 = () => {
  const [orderType, setOrderType] = React.useState<OrderType>(null);

  const [specificDate, setSpecificDate] = React.useState<Date | undefined>();
  const [fromDate, setFromDate] = React.useState<Date | undefined>();
  const [untilDate, setUntilDate] = React.useState<Date | undefined>();

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8">
      {/* Title */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-medium text-[#399385]">
        Contact Information
      </h2>

      {/* Order Date */}
      <div className="flex flex-col gap-4">
        <h3 className="text-[24px] font-medium text-[#34495e]">
          Order Date
        </h3>

        <RadioGroup
          value={orderType ?? ""}
          onValueChange={(val) => setOrderType(val as OrderType)}
          className="flex flex-col md:flex-row  gap-4 "
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="specific" id="specific" className="bg-white" />
            <Label htmlFor="specific" className="text-sm  text-[#333333] sm:text-base">
              Specific Day
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="flexible" id="flexible" className="bg-white" />
            <Label htmlFor="flexible" className="text-sm text-[#333333] sm:text-base">
              I am flexible
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* ================= Specific Day ================= */}
      {orderType === "specific" && (
        <div className="flex flex-col gap-3">
          <h4 className="text-center text-sm sm:text-base font-medium text-[#34495e]">
            Your Move Date
          </h4>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal h-11 sm:h-12",
                  !specificDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-[#399385]" />
                {specificDate ? format(specificDate, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={specificDate}
                onSelect={setSpecificDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      )}

      {/* ================= Flexible ================= */}
      {orderType === "flexible" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* From */}
          <div className="flex flex-col gap-2">
            <Label className="text-sm text-[#333333] sm:text-base">From</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-11 sm:h-12",
                    !fromDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-[#399385]" />
                  {fromDate ? format(fromDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={fromDate}
                  onSelect={setFromDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Until */}
          <div className="flex flex-col gap-2">
            <Label className="text-sm text-[#333333] sm:text-base">Until</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-11 sm:h-12",
                    !untilDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-[#399385]" />
                  {untilDate ? format(untilDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={untilDate}
                  onSelect={setUntilDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      )}
    </div>
  );
};
