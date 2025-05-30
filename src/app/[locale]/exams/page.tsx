import { Suspense } from "react";
import ExamsList from "./_components/exams-list";

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <>
      <h1 className="text-4xl font-bold">Exams</h1>

      <Suspense fallback="Loading exams...">
        <ExamsList searchParams={searchParams} />
      </Suspense>
    </>
  );
}
