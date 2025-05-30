/* eslint-disable @next/next/no-img-element */
import DialogComponent from "@/components/common/dialog";
import { getExams } from "@/lib/api/exam.api";
import { getTranslations } from "next-intl/server";
import QuestionsDialog from "../../exams/_components/questions-dialog";

export default async function Page({ params }: { params: { subjectId: string } }) {
  // Translation
  const t = await getTranslations();
  const { subjectId } = params;
  const exams = await getExams(subjectId);

  return (
    <main>
      <h3 className=" text-xl capitalize my-2">
        {subjectId} {t("quiz")}{" "}
      </h3>
      <section className=" flex flex-col gap-2">
        {exams.exams.map((exam) => (
          <div
            key={exam._id}
            className=" flex items-center justify-between p-2 my-2 shadow-md rounded-md bg-white"
          >
            <div className=" flex items-center gap-2">
              <div className=" flex flex-col">
                <h3 className=" text-lg font-semibold">{exam.title}</h3>
                <p className=" text-sm text-gray-500">{exam.numberOfQuestions} Question</p>
              </div>
            </div>
            <div>
              <h3>{exam.duration} minutes</h3>
              <QuestionsDialog searchParams={exam} />
            </div>
          </div>
        ))}
      </section>

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
