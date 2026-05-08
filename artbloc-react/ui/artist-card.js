import Image from "next/image";
import Link from "next/link";

function ArtistCard({
  text = "",
  textAddOn = "",
  img = "",
  imgAddOn = "",
  link = "/",
}) {
  let textDiv = [
    `relative flex w-full h-22 text-center justify-center text-lg ${textAddOn[0]}`,
    `relative flex w-full h-22 text-center justify-center text-base ${textAddOn[1]}`,
  ];

  let component = (
    <Link href={link}>
      <div className="relative flex flex-col items-center w-50 h-80 border-2">
        <Image
          src={img}
          width={50}
          height={50}
          alt={imgAddOn}
          className="relative flex"
        />
        <div className={textDiv[0]}>{text[0]}</div>
        <div className={textDiv[1]}>{text[1]}</div>
      </div>
    </Link>
  );

  return component;
}

export default ArtistCard;
