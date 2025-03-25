import { useTranslations } from "next-intl";
import RegisterForm from "../_components/register-form";

export default function page() {
  // Translation
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations();
  return (
    <main className="h-screen flex flex-col items-center justify-center mx-auto w-[20rem] text-center">
      <h2 className="text-2xl font-bold text-custom-blue-900 text-start w-full"> {t("sign-up")}</h2>
      <RegisterForm />
    </main>
  );
}
