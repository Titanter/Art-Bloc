import Link from "next/link";

function InvolvementCard({
  text = "",
  textAddOn = "",
  address = "/",
  bg = "",
}) {
  let bgDiv = `relative flex flex-col items-center w-100 h-full ${bg}`;

  let textDiv = [
    `relative flex pt-8 ${textAddOn[0]}`,
    `relative flex items-center ${textAddOn[1]}`,
  ];

  let component = (
    <div className={bgDiv}>
      <div className={textDiv[0]}>{text[0]}</div>
      <div className={textDiv[1]}>{text[1]}</div>

      <Link href={address} className="">
        <div>Arrow</div>
      </Link>
    </div>
  );

  return component;
}

export default InvolvementCard;
