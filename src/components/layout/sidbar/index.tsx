import { Link } from "@/i18n/routing";
import { CircleArrowLeft, History, LayoutDashboard } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Sidbar() {
  // Translation
  const t = useTranslations();
  return (
    <aside className="flex flex-col  gap-10 p-5 w-[250px] ">
      <Image src={"/assets/images/logo1.png"} alt="Logo" width={120} height={0} />
      <Link
        href="/"
        className="flex items-center gap-2 hover:bg-Main p-2 rounded-lg hover:!text-white "
      >
        {" "}
        <span className="">
          {" "}
          <LayoutDashboard />
        </span>{" "}
        {t("dashboard")}{" "}
      </Link>
      <Link
        href="/"
        className="flex items-center gap-2 hover:bg-Main p-2 rounded-lg hover:!text-white "
      >
        {" "}
        <span>
          <History />
        </span>{" "}
        {t("quiz-history")}{" "}
      </Link>
      <Link
        href="/"
        className="flex items-center gap-2 hover:bg-Main p-2 rounded-lg hover:!text-white "
      >
        {" "}
        <span>
          {" "}
          <CircleArrowLeft />
        </span>{" "}
        {t("log-out")}{" "}
      </Link>
    </aside>
  );
}
