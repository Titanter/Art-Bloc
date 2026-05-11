import Image from "next/image";
import Link from "next/link";

function InvolvementCard({
  text = "",
  textAddOn = "",
  address = "/",
  bg = "",
}) {
  let bgDiv = `relative flex flex-col items-center w-100 h-full border-2 border-[#f5ebd9] ${bg}`;
  let linkDiv = `relative flex w-1/2 h-20 z-2 justify-center border-2 border-[#f5ebd9] ${bg}`;

  let textDiv = [
    `relative flex text-center justify-center mt-8 ${textAddOn[0]}`,
    `relative flex text-center mt-20 mb-15 ${textAddOn[1]}`,
  ];

  let component = (
    <div className={bgDiv}>
      <div className={textDiv[0]}>{text[0]}</div>
      <div className={textDiv[1]}>{text[1]}</div>

      <Link href={address} className={linkDiv}>
        <Image
          src="/arrowRight.png"
          width={100}
          height={50}
          alt="right arrow"
          className={bg}
        />
      </Link>
    </div>
  );

  return component;
}

export default InvolvementCard;
