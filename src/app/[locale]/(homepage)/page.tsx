import { Link } from "@/i18n/routing";
import { CircleCheckBig, Clock, Flag } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  // Translation
  const t = useTranslations();
  return (
    <>
      <section className=" w-full shadow-lg rounded-lg p-2 py-5 mt-2 flex max-[1000px]:flex-col bg-white ">
        <div className=" relative w-48 h-48">
          <Image
            src={"/assets/images/avtar.jpeg"}
            alt="Logo"
            fill
            className=" object-cover rounded-lg"
          />
        </div>
        <div className=" px-10 py-5 w-[80%] max-[1000px]:w-full space-y-5 ">
          <h3 className=" text-2xl font-bold text-Main max-[1000px]:text-center">Badr Shaban</h3>
          <p className=" text-sm text-gray-500 font-normal max-[1000px]:text-center">
            Frontend Developer
          </p>
          <div className=" w-full h-3 bg-gray-200 my-2 rounded-full ">
            <div className=" w-[80%] h-full bg-Main rounded-full "></div>
          </div>
          <div className=" w-full flex  items-center justify-between mt-5">
            <div className=" flex items-center max-[810px]:flex-col gap-2">
              <div className=" shadow-md rounded-md p-2 flex items-center justify-center">
                <Flag color="#4461F2" />
              </div>
              <div className=" flex flex-col items-center text-gray-600 ">
                <p className=" text-xl font-bold ">27</p>
                <p className=" text-xs font-normal ">{t("quiz-passed")}</p>
              </div>
            </div>
            <div className=" flex items-center max-[810px]:flex-col gap-2">
              <div className=" shadow-md rounded-md p-2 flex items-center justify-center">
                <Clock color="#4461F2" />
              </div>
              <div className=" flex flex-col items-center text-gray-600 ">
                <p className=" text-xl font-bold">13 {t("min")} </p>
                <p className=" text-xs font-normal">{t("fastest-time")}</p>
              </div>
            </div>
            <div className=" flex items-center max-[810px]:flex-col gap-2">
              <div className=" shadow-md rounded-md p-2 flex items-center justify-center">
                <CircleCheckBig color="#4461F2" />
              </div>
              <div className=" flex flex-col items-center text-gray-600 ">
                <p className=" text-xl font-bold ">200</p>
                <p className=" text-xs font-normal ">{t("correct-answers")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full shadow-lg rounded-lg p-2 my-5 flex flex-col bg-white ">
        <div className=" w-full flex items-center justify-between text-blue-500 text-xl py-2 ">
          <p>{t("quizes")}</p>
          <p>{t("view-all")}</p>
        </div>
        <div className=" flex items-center justify-center gap-5 flex-wrap">
          <Link href="/front-end" className=" relative w-[300px] h-[250px] rounded-lg">
            <Image
              src={"/assets/images/quiz_1.jpeg"}
              alt="Quiz_1"
              fill
              className="object-cover rounded-lg"
            />
            <div className=" absolute bottom-5 left-2 p-2 bg-[#1935CA66] bg-opacity-90 rounded-lg ">
              <h3 className=" text-base font-bold text-white ">Front-end Web Development</h3>
              <p className=" text-sm text-white font-normal  ">
                Voluptatem aut ut dignissimos blanditiis
              </p>
            </div>
          </Link>
          <Link href="/back-end" className=" relative w-[300px] h-[250px] rounded-lg">
            <Image
              src={"/assets/images/quiz_1.jpeg"}
              alt="Quiz_1"
              fill
              className="object-cover rounded-lg"
            />
            <div className=" absolute bottom-5 left-2 p-2 bg-[#1935CA66] bg-opacity-90 rounded-lg ">
              <h3 className=" text-base font-bold text-white ">Front-end Web Development</h3>
              <p className=" text-sm text-white font-normal  ">
                Voluptatem aut ut dignissimos blanditiis
              </p>
            </div>
          </Link>
          <div className=" relative w-[300px] h-[250px] rounded-lg">
            <Image
              src={"/assets/images/quiz_1.jpeg"}
              alt="Quiz_1"
              fill
              className="object-cover rounded-lg"
            />
            <div className=" absolute bottom-5 left-2 p-2 bg-[#1935CA66] bg-opacity-90 rounded-lg ">
              <h3 className=" text-base font-bold text-white ">Front-end Web Development</h3>
              <p className=" text-sm text-white font-normal  ">
                Voluptatem aut ut dignissimos blanditiis
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
