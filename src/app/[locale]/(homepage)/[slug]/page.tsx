/* eslint-disable @next/next/no-img-element */
import DialogComponent from "@/components/common/dialog";
import { useTranslations } from "next-intl";

export default function page({ params }: { params: { slug: string } }) {
  // Translation
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations();
  const { slug } = params;
  return (
    <main>
      <h3 className=" text-xl capitalize my-2">
        {slug} {t("quiz")}{" "}
      </h3>
      <section className=" flex flex-col gap-2">
        <div className=" flex items-center justify-between p-2 my-2 shadow-md rounded-md bg-white">
          <div className=" flex items-center gap-2">
            <img src="/assets/images/html.svg" alt="html" />{" "}
            <div className=" flex flex-col">
              <h3 className=" text-lg font-semibold">HTML</h3>
              <p className=" text-sm text-gray-500">20 Question</p>
            </div>
          </div>
          <div>
            <h3>15 minutes</h3>
            <DialogComponent />
          </div>
        </div>
        <div className=" flex items-center justify-between p-2 my-2 shadow-md rounded-md bg-white">
          <div className=" flex items-center gap-2">
            <img src="/assets/images/html.svg" alt="html" />{" "}
            <div className=" flex flex-col">
              <h3 className=" text-lg font-semibold">HTML</h3>
              <p className=" text-sm text-gray-500">20 Question</p>
            </div>
          </div>
          <div>
            <h3>15 minutes</h3>
            <DialogComponent />
          </div>
        </div>
        <div className=" flex items-center justify-between p-2 my-2 shadow-md rounded-md bg-white">
          <div className=" flex items-center gap-2">
            <img src="/assets/images/html.svg" alt="html" />{" "}
            <div className=" flex flex-col">
              <h3 className=" text-lg font-semibold">HTML</h3>
              <p className=" text-sm text-gray-500">20 Question</p>
            </div>
          </div>
          <div>
            <h3>15 minutes</h3>
            <DialogComponent />
          </div>
        </div>
        <div className=" flex items-center justify-between p-2 my-2 shadow-md rounded-md bg-white">
          <div className=" flex items-center gap-2">
            <img src="/assets/images/html.svg" alt="html" />{" "}
            <div className=" flex flex-col">
              <h3 className=" text-lg font-semibold">HTML</h3>
              <p className=" text-sm text-gray-500">20 Question</p>
            </div>
          </div>
          <div>
            <h3>15 minutes</h3>
            <DialogComponent />
          </div>
        </div>
      </section>
    </main>
  );
}
