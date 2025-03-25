"use client";

import { FormControl, Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function Header() {
  // Translation
  const t = useTranslations();

  // Form & Validation
  const Schema = z.object({
    search: z.string().min(1),
  });

  type Inputs = z.infer<typeof Schema>;

  const form = useForm<Inputs>({
    defaultValues: { search: "" },
    resolver: zodResolver(Schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    console.log(values);
  };

  return (
    <header className="flex justify-center items-center gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4 items-center w-full">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className=" sr-only">{t("search-lable")}</FormLabel>
                <FormControl>
                  <div className="relative ">
                    <Input
                      {...field}
                      placeholder={t("search-placeholder")}
                      className=" focus:!outline-blue-500 border focus:!ring-0 focus:!ring-offset-0 rounded-xl  h-[3rem]   shadow-lg pl-10 "
                    />
                    <Search
                      color="#1935CA"
                      size={22}
                      className="absolute left-3 top-3 h-6 w-4 text-muted-foreground  "
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          {/* Submit button */}
          <button
            type="submit"
            className="w-[8rem] h-[3rem] mt-2 text-white font-medium bg-Main rounded-[20px] text-center"
          >
            {t("start-quiz")}
          </button>
        </form>
      </Form>
      <div className="w-10 h-10 relative ">
        <Image
          src="/assets/images/avtar.jpeg"
          alt="avtar"
          fill
          className=" object-cover rounded-full"
        />
      </div>
    </header>
  );
}
