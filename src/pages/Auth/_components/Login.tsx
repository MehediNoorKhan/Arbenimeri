import React, { useState } from "react";
import { useForm, FormProvider} from "react-hook-form";
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
import { Eye, EyeOff } from "lucide-react"; // Make sure lucide-react is installed

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, control, formState: { errors } } = methods;

  const onSubmit: SubmitHandler<LoginFormValues> = (values) => {
    console.log("Login submitted:", values);
    // Call your login API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-[365px] p-[30px] bg-[#EBF4F3] shadow-md rounded-md">
        <h2 className="2xl:text-[42px] font-bold mb-[20px]">Log In</h2>

        <FormProvider {...methods}>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] text-[#677079]">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your email"
                      className="placeholder:text-[#677079] placeholder:text-[14px] p-[16px] bg-white"
                    />
                  </FormControl>
                  <FormMessage>{errors.email?.message}</FormMessage>
                </FormItem>
              )}
            />

            {/* Password Field with Eye Icon */}
            <FormField
  control={control}
  name="password"
  render={({ field }) => (
    <FormItem className="relative">
      <FormLabel className="text-[14px] text-[#677079]">Password</FormLabel>
      <FormControl>
        <div className="relative">
          <Input
            {...field}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="placeholder:text-[#677079] placeholder:text-[14px] p-[16px] bg-white pr-12 w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[50%] -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} className="cursor-pointer" /> : <Eye size={20} className="cursor-pointer" />}
          </button>
        </div>
      </FormControl>
      <FormMessage>{errors.password?.message}</FormMessage>
    </FormItem>
  )}
/>


            {/* Forgot Password (Left Aligned) */}
            <div className="text-left text-[14px]">
              <button
                type="button"
                className="text-[#000000] text-[14px] font-medium hover:underline cursor-pointer"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <Button type="submit" className="w-full p-[16px] rounded-4xl cursor-pointer">
              LOGIN
            </Button>
          </form>
        </FormProvider>

        {/* Signup Link */}
        <p className="mt-4 text-center text-[14px] text-[#84909C]">
          Don't have an account?{" "}
          <button
            className="text-[#399385] hover:underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
