

import React, { useState } from "react";
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
import { Eye, EyeOff } from "lucide-react";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
  });

  const { handleSubmit, control, formState: { errors } } = methods;

  const onSubmit: SubmitHandler<LoginFormValues> = (values) => {
    console.log("Login submitted:", values);
    // Call your login API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-[365px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] 2xl:max-w-[600px] p-6 sm:p-8 md:p-10 lg:p-12 bg-[#EBF4F3] shadow-md rounded-md">
        {/* Title */}
        <h2 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[42px] font-bold mb-5 text-center">
          Log In
        </h2>

        <FormProvider {...methods}>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[14px] sm:text-[15px] text-[#677079]">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your email"
                      className="placeholder:text-[#677079] placeholder:text-[14px] sm:placeholder:text-[15px] p-[12px] sm:p-[16px] bg-white"
                    />
                  </FormControl>
                  <FormMessage>{errors.email?.message}</FormMessage>
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="text-[14px] sm:text-[15px] text-[#677079]">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="placeholder:text-[#677079] placeholder:text-[14px] sm:placeholder:text-[15px] p-[12px] sm:p-[16px] pr-12 w-full bg-white"
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

            {/* Forgot Password */}
            <div className="text-left text-[14px] sm:text-[15px]">
              <button
                type="button"
                className="text-[#000000] font-medium hover:underline cursor-pointer"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full p-[12px] sm:p-[16px] rounded-4xl cursor-pointer text-[14px] sm:text-[15px]"
            >
              LOGIN
            </Button>
          </form>
        </FormProvider>

        {/* Signup Link */}
        <p className="mt-4 text-center text-[14px] sm:text-[15px] text-[#84909C]">
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
