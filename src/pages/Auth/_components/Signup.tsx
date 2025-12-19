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
    // Handle submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-[872px] p-8 bg-[#EBF4F3] shadow-md rounded-md">
        {/* Title */}
        <h2 className="xl:text-[42px] font-semibold mb-2">Become a Partner</h2>
        {/* Subtitle */}
        <h3 className="text-[24px] font-semibold mb-[20px]">
          <span className="text-[#399385] font-medium">General</span>{" "}
          <span className="text-[#000000]">Information</span>
        </h3>

        <FormProvider {...methods}>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* First Name & Last Name */}
            <div className="flex gap-4">
              <FormField
                control={control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#677079]">First Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="First Name" className="placeholder-[#677079] bg-white p-[16px]" />
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
                      <Input {...field} placeholder="Last Name" className="placeholder-[#677079] bg-white p-[16px]" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Email & Telephone */}
            <div className="flex gap-4">
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#677079]">Email Address</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Email Address" className="placeholder-[#677079] bg-white p-[16px]" />
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
                      <Input {...field} placeholder="Telephone Number" className="placeholder-[#677079] bg-white p-[16px]" />
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
                    <Input {...field} placeholder="Company Name" className="placeholder-[#677079] bg-white p-[16px]" />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Street & House Number */}
            <div className="flex gap-4">
              <FormField
                control={control}
                name="street"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#677079]">Street</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Street" className="placeholder-[#677079] bg-white p-[16px]" />
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
                      <Input {...field} placeholder="House Number" className="placeholder-[#677079] bg-white p-[16px]" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Zip Code & Location */}
            <div className="flex gap-4">
              <FormField
                control={control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-[14px] text-[#677079]">Zip Code</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Zip Code" className="placeholder-[#677079] bg-white p-[16px]" />
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
                      <Input {...field} placeholder="Location" className="placeholder-[#677079] bg-white p-[16px]" />
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
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => onChange(e.target.files)}
          onBlur={onBlur}
          name={name}
          ref={ref}
          placeholder="Upload Folder"
          className="placeholder-[#677079] p-4 h-[70px] w-full border rounded-md bg-white"
        />
      </FormControl>
    </FormItem>
  )}
/>


            {/* Buttons Center */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                type="button"
                className="bg-[#399385] text-white px-[53px] py-[16px] rounded-full"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
              <Button
                type="submit"
                className="bg-[#399385] text-white px-[53px] py-[16px] rounded-full"
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
