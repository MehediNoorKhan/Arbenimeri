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
    defaultValues: {
      areas: [],
    },
  });

  const { handleSubmit, control, watch } = methods;

  const onSubmit: SubmitHandler<ChooseAreasFormValues> = (values) => {
    console.log("Selected areas:", values);
    // Submit form data here
  };

  const selectedAreas = watch("areas");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl p-8 bg-white shadow-md rounded-md">
        {/* Title */}
        <h2 className="xl:text-[42px] font-semibold mb-2">Become a Partner</h2>
        {/* Subtitle */}
        <h3 className="xl:text-[24px] font-medium mb-[20px]">
          <span className="text-[#399385] font-medium">Choose Your</span>{" "}
          <span className="text-[#000000]">Areas</span>
        </h3>

        <FormProvider {...methods}>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                        <FormLabel className="text-[14px] text-[#677079]">
                          {area}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                type="button"
                className="bg-[#399385] text-white px-6 py-2 rounded-full cursor-pointer"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
              <Button
                type="submit"
                className="bg-[#399385] text-white px-6 py-2 rounded-full cursor-pointer"
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
