import Image from "next/image";

const BaseThumbRecord = () => {
  return (
    <article className="h-16 flex items-center">
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
