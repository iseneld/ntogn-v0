import Image from "next/image";

const BaseThumbRecord = () => {
  return (
    <article className="min-w-sm h-16 p-2 border border-zinc-900 flex gap-2 items-center md:w-1/2">
      <Image
        src="/images/TP_TOME_s.jpg"
        width={50}
        height={50}
        alt="Tome test pressing"
      />
      <h1>Record</h1>
    </article>
  );
};

export default BaseThumbRecord;
