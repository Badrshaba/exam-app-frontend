import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  // Translation
  const t = useTranslations();
  return (
    <main className="h-screen flex items-center justify-between bg-gray-100 text-center">
      <section className=" bg-[#F0F4FC] h-full p-5 w-[60rem] max-[720px]:w-[40rem] max-[650px]:hidden shadow-2xl rtl:rounded-l-[60px] ltr:rounded-r-[60px] gap-6 flex flex-col items-center justify-center">
        <h1 className=" font-bold text-4xl text-center max-[720px]:text-3xl ">
          {t.rich("welcome-to-elevate", {
            span: (value) => <span className="text-[#122D9C] max-[720px]:text-4xl ">{value} </span>,
          })}
        </h1>
        <h3>{t("quidem-autem-voluptatibus-qui-quaerat-aspernatur-architecto-natus")}</h3>
        <Image src={"/assets/images/bro.png"} alt="Logo" width={320} height={0} />
      </section>
      <section className="h-full w-full flex flex-col  ">
        <div className=" w-10/12 flex justify-end items-center pt-8 gap-5">
          <h3>{t("english")}</h3>
          <Link href="/auth/login" className=" font-bold text-[#4461F2]">
            {" "}
            {t("signin")}{" "}
          </Link>
          <Link href="/auth/register" className=" border text-[#4461F2] rounded-full px-5 py-1">
            {" "}
            {t("register")}{" "}
          </Link>
        </div>
        {children}
      </section>
    </main>
  );
}
