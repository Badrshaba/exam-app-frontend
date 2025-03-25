"use client";

import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import useLogin from "../_hooks/use-login";

export default function LoginForm() {
  // Translation
  const t = useTranslations();

  // State
  const [showPassword, setShowPassword] = useState(false);

  // Functions
  const { isPending, error, login } = useLogin();

  // Form & Validation
  const Schema = z.object({
    email: z
      .string({ required_error: t("email-required") })
      .min(1, t("email-required"))
      .email(t("please-enter-a-valid-email-address")),
    password: z.string({ required_error: t("password-required") }).min(1, t("password-required")),
  });

  type Inputs = z.infer<typeof Schema>;

  const form = useForm<Inputs>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(Schema),
  });

  // Functions
  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    login({ ...values });
  };
  return (
    <>
      <Form {...form}>
        {/* Form fields */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full mt-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" sr-only">{t("email-lable")}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={t("email-placeholder")} className=" input-form" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" sr-only">{t("password")}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder={t("password")}
                      className=" input-form"
                    />
                    {showPassword ? (
                      <EyeOff
                        className="absolute ltr:right-3 rtl:left-3 top-3 cursor-pointer"
                        onClick={() => setShowPassword(false)}
                        color={"#949BA5"}
                      />
                    ) : (
                      <Eye
                        className="absolute ltr:right-3 rtl:left-3 top-3 cursor-pointer"
                        onClick={() => setShowPassword(true)}
                        color={"#949BA5"}
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className=" text-sm text-Main pb-2 -mt-2 text-right">{t("recover-password")}</p>
          {/* Submit button */}
          {error && <div className="text-sm text-error text-center">{error.message}</div>}
          <button
            type="submit"
            className="w-full h-[45px]  text-white font-medium bg-Main rounded-full text-center"
            disabled={isPending}
          >
            {t("sign-in")}
          </button>
        </form>
      </Form>
    </>
  );
}
