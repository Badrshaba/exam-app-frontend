import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Dot from "./Dot";
import Image from "next/image";
export default function DialogComponent() {
  return (
    <Dialog>
      <DialogTrigger className="bg-Main text-white px-2 py-1 rounded">Start Quiz</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className=" flex items-center justify-between">
            <p className=" text-xs text-blue-500 -mb-2">Question 1 of 20</p>
            <p className=" text-green-600 flex items-center gap-1">
              <Image src="/assets/images/clock.png" height={0} width={20} alt="clock" />
              14:58
            </p>
          </div>
          <Dot NumberOfDots={20} DoneDots={15} />
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <DialogFooter className="!flex !justify-between">
          <button className="px-4 py-2 border-blue-500 text-Main border rounded-full bg-white w-2/4">
            Back
          </button>
          <button className="px-4 py-2  rounded-full bg-gray-300 text-gray-600 w-2/4 ">Next</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
