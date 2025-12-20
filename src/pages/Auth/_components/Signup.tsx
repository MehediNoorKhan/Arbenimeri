

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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface SignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  companyName: string;
  street: string;
  houseNumber: string;
  zipCode: string;
  location: string;
  insurancePolicy: FileList | null;
}

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const methods = useForm<SignupFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      companyName: "",
      street: "",
      houseNumber: "",
      zipCode: "",
      location: "",
      insurancePolicy: null,
    },
  });

  const { handleSubmit, control } = methods;

  const onSubmit: SubmitHandler<SignupFormValues> = (values) => {
    console.log("Signup values:", values);
    navigate("/profileinfo");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-[872px] p-6 sm:p-8 md:p-10 lg:p-12 bg-[#EBF4F3] shadow-md rounded-md">
        {/* Title */}
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[42px] font-semibold mb-2">
          Become a Partner
        </h2>

        {/* Subtitle */}
        <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold mb-5">
          <span className="text-[#399385] font-medium">General</span>{" "}
          <span className="text-[#000000]">Information</span>
        </h3>

        <FormProvider {...methods}>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* First Name & Last Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <FormField
                control={control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#677079]">First Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter First Name"
                        className="placeholder-[#677079] bg-white p-3 sm:p-4 text-[14px] sm:text-[15px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#677079]">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Last Name"
                        className="placeholder-[#677079] bg-white p-3 sm:p-4 text-[14px] sm:text-[15px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Email & Telephone */}
            <div className="flex flex-col sm:flex-row gap-4">
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#677079]">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Email Address"
                        className="placeholder-[#677079] bg-white p-3 sm:p-4 text-[14px] sm:text-[15px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="telephone"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#677079]">Telephone Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Telephone Number"
                        className="placeholder-[#677079] bg-white p-3 sm:p-4 text-[14px] sm:text-[15px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Company Name (Full width) */}
            <FormField
              control={control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] text-[#677079]">Company Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Company Name"
                      className="placeholder-[#677079] bg-white p-3 sm:p-4 text-[14px] sm:text-[15px]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Street & House Number */}
            <div className="flex flex-col sm:flex-row gap-4">
              <FormField
                control={control}
                name="street"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#677079]">Street</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Street"
                        className="placeholder-[#677079] bg-white p-3 sm:p-4 text-[14px] sm:text-[15px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="houseNumber"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#677079]">House Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter House Number"
                        className="placeholder-[#677079] bg-white p-3 sm:p-4 text-[14px] sm:text-[15px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Zip Code & Location */}
            <div className="flex flex-col sm:flex-row gap-4">
              <FormField
                control={control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#677079]">Zip Code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Zip Code"
                        className="placeholder-[#677079] bg-white p-3 sm:p-4 text-[14px] sm:text-[15px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="location"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#677079]">Location</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter Location"
                        className="placeholder-[#677079] bg-white p-3 sm:p-4 text-[14px] sm:text-[15px]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Insurance Policy File Upload */}
            <FormField
              control={control}
              name="insurancePolicy"
              render={({ field: { onChange, onBlur, name, ref } }) => (
                <FormItem>
                  <FormLabel className="text-[14px] text-[#677079]">Insurance Policy</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf"
                        id="insurancePolicy"
                        className="hidden"
                        onChange={(e) => onChange(e.target.files)}
                        onBlur={onBlur}
                        name={name}
                        ref={ref}
                      />
                      <label
                        htmlFor="insurancePolicy"
                        className="flex justify-center items-center gap-2 h-[60px] sm:h-[70px] w-full bg-white border rounded-md cursor-pointer hover:bg-gray-100 p-2 sm:p-3"
                      >
                        <Upload className="text-[#399385]" size={24} />
                        <span className="text-[#677079] text-[14px] sm:text-[15px] text-center">
                          Upload File (PDF)
                        </span>
                      </label>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Buttons Center */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Button
                type="button"
                className="bg-[#399385] text-white px-8 py-3 sm:px-12 sm:py-4 rounded-full cursor-pointer"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
              <Button
                type="submit"
                className="bg-[#399385] text-white px-8 py-3 sm:px-12 sm:py-4 rounded-full cursor-pointer"
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

export default Signup;
