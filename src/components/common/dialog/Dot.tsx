export default function Dot({
  NumberOfDots,
  DoneDots,
}: {
  NumberOfDots: number;
  DoneDots: number;
}) {
  return (
    <div className=" flex items-center justify-between gap-2">
      {Array(NumberOfDots)
        .fill(0)
        .map((_, index) =>
          index < DoneDots ? (
            <p key={index} className=" text-4xl font-bold text-Main">
              .
            </p>
          ) : (
            <p key={index} className=" text-4xl font-bold text-gray-300">
              .
            </p>
          ),
        )}
    </div>
  );
}
