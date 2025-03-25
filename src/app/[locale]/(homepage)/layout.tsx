import React from "react";
import { Locale, routing } from "@/i18n/routing";
import { LayoutProps } from "@/lib/types/route-props";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Sidbar from "@/components/layout/sidbar";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });
  return {
    title: t("metadata-title"),
    description: t("metadata-description"),
  };
}

// Generate static pages based on the locales to enable static rendering
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomeLayout({ params: { locale }, children }: LayoutProps) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="flex">
      {/* Sidebar content */}
      <aside>
        <Sidbar />
      </aside>
      <main className="px-5 w-3/4 max-[1300px]:w-full">
        {/* Header */}
        <Header />
        {/* Main content */}
        {children}
      </main>
    </main>
  );
}
