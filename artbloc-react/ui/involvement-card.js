import Link from "next/link";

function InvolvementCard({
  text = "",
  textAddOn = "",
  address = "/",
  bg = "",
}) {
  let bgDiv = `relative flex flex-col items-center w-100 h-full ${bg}`;

  let textDiv = [
    `relative flex text-center justify-center mt-8 ${textAddOn[0]}`,
    `relative flex text-center mt-20 mb-15 ${textAddOn[1]}`,
  ];

  let component = (
    <div className={bgDiv}>
      <div className={textDiv[0]}>{text[0]}</div>
      <div className={textDiv[1]}>{text[1]}</div>

      <Link href={address} className="relative flex bg-white w-1/2 h-20 z-2 justify-center">
        <div>Arrow</div>
      </Link>
    </div>
  );

  return component;
}

export default InvolvementCard;
