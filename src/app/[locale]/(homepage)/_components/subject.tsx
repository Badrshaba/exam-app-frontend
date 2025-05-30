import { Link } from "@/i18n/routing";
import { getSubjects } from "@/lib/api/subject.api";
import Image from "next/image";

export default async function Subject() {
  const subject = await getSubjects();
  return (
    <div className=" flex items-center justify-center gap-5 flex-wrap">
      {subject?.subjects.map((subject) => (
        <Link
          href={`/${subject._id}`}
          key={subject._id}
          className=" relative w-[300px] h-[250px] rounded-lg"
        >
          <Image src={subject.icon} alt="Quiz_1" fill className="object-cover rounded-lg" />
          <div className=" absolute bottom-5 left-2 p-2 bg-[#1935CA66] bg-opacity-90 rounded-lg ">
            <h3 className=" text-base font-bold text-white ">{subject.name}</h3>
            <p className=" text-sm text-white font-normal  ">
              Voluptatem aut ut dignissimos blanditiis
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
