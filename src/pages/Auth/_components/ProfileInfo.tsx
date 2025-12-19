import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface ProfileInfoFormValues {
  password: string;
  confirmPassword: string;
  inquiries: string[];
}

const inquiryOptions = [
  "Moving & Cleaning",
  "Moving",
  "Cleaning",
  "Painting",
  "Gardening",
  "Piano",
];

const ProfileInfo: React.FC = () => {
  const navigate = useNavigate();

  const methods = useForm<ProfileInfoFormValues>({
    defaultValues: {
      password: "",
      confirmPassword: "",
      inquiries: [],
    },
  });

  const { handleSubmit, control, watch } = methods;

  const onSubmit: SubmitHandler<ProfileInfoFormValues> = (values) => {
    console.log("Profile Info submitted:", values);
    navigate("/chooseareas");
  };

  const selectedInquiries = watch("inquiries");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-3xl p-8 bg-[#EBF4F3] shadow-md rounded-md">
        {/* Title */}
        <h2 className="xl:text-[42px] font-semibold mb-2">Become a Partner</h2>
        {/* Subtitle */}
        <h3 className="xl:text-[24px] font-medium mb-[20px]">
          <span className="text-[#399385] font-medium">Profile</span>{" "}
          <span className="text-[#000000]">Information</span>
        </h3>

        <FormProvider {...methods}>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Password */}
           <div className="flex gap-4">
  {/* Password */}
  <FormField
    control={control}
    name="password"
    render={({ field }) => (
      <FormItem className="flex-1">
        <FormLabel className="text-[14px] text-[#677079]">Password</FormLabel>
        <FormControl>
          <Input
            {...field}
            type="password"
            placeholder="Enter Password"
            className="placeholder-[#677079] text-[14px] bg-white"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />

  {/* Confirm Password */}
  <FormField
    control={control}
    name="confirmPassword"
    render={({ field }) => (
      <FormItem className="flex-1">
        <FormLabel className="text-[14px] text-[#677079]">Confirm Password</FormLabel>
        <FormControl>
          <Input
            {...field}
            type="password"
            placeholder="Confirm Password"
            className="placeholder-[#677079] text-[14px] bg-white"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</div>


            {/* Inquiries */}
            <div className="mt-4">
              <p className="text-[#000000] text-[16px] font-normal mb-2">
                I would like inquiries for the following
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {inquiryOptions.map((option) => (
                  <FormField
                    key={option}
                    control={control}
                    name="inquiries"
                    render={({ field }) => {
                      const isChecked = selectedInquiries.includes(option);
                      return (
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox className="bg-white"
                              checked={isChecked}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...selectedInquiries, option]);
                                } else {
                                  field.onChange(selectedInquiries.filter((val) => val !== option));
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-[14px] text-[#677079]">
                            {option}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
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
                Next
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ProfileInfo;
