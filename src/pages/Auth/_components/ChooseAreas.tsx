

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface ChooseAreasFormValues {
  areas: string[];
}

const areasOptions = [
  "Appenzell Innerrhoden", "Basel Stadt", "Freiburg", "Graubunden", "Neuchatel",
  "Schaffhausen", "St. Gallen", "Uri", "Zug", "Appenzell Ausserrhoden",
  "Basel Land", "Genf", "Jura", "Nidwalden", "Schwyz", "Tessin", "Waadt",
  "Zurich", "Aargau", "Bern", "Glarus", "Luzern", "Obwalden", "Solothurn",
  "Thurgau", "Wallis"
];

const ChooseAreas: React.FC = () => {
  const navigate = useNavigate();

  const methods = useForm<ChooseAreasFormValues>({
    defaultValues: { areas: [] },
  });

  const { handleSubmit, control, watch } = methods;

  const onSubmit: SubmitHandler<ChooseAreasFormValues> = (values) => {
    console.log("Selected areas:", values);
    // Submit form data here
  };

  const selectedAreas = watch("areas");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-[360px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[950px] 2xl:max-w-[1100px] p-6 sm:p-8 md:p-10 lg:p-12 bg-[#EBF4F3] shadow-md rounded-md">
        {/* Title */}
        <h2 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[42px] font-semibold mb-3 text-center">
          Become a Partner
        </h2>

        {/* Subtitle */}
        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-medium mb-6 text-center">
          <span className="text-[#399385] font-medium">Choose Your</span>{" "}
          <span className="text-[#000000]">Areas</span>
        </h3>

        <FormProvider {...methods}>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Areas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {areasOptions.map((area) => (
                <FormField
                  key={area}
                  control={control}
                  name="areas"
                  render={({ field }) => {
                    const isChecked = selectedAreas.includes(area);
                    return (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={isChecked}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                field.onChange([...selectedAreas, area]);
                              } else {
                                field.onChange(selectedAreas.filter((val) => val !== area));
                              }
                            }}
                            className="bg-white"
                          />
                        </FormControl>
                        <FormLabel className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] text-[#677079]">
                          {area}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Button
                type="button"
                className="bg-[#399385] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full cursor-pointer w-full sm:w-auto text-[14px] sm:text-[15px] md:text-[16px]"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
              <Button
                type="submit"
                className="bg-[#399385] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full cursor-pointer w-full sm:w-auto text-[14px] sm:text-[15px] md:text-[16px]"
              >
                Submit
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ChooseAreas;
