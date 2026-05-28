import Image from "next/image";

import LinkButton from "./link-button";

function EventCard({
  type = "",
  text = [],
  textAddOn = [],
  img = "",
  imgAddOn = "",
  link = [],
  bgColor = "",
}) {
  let boxDiv;

  let textDiv = [
    `relative flex mt-8 ${textAddOn[0]}`,
    `relative flex ${textAddOn[1]}`,
    `relative flex mt-8 ml-5 ${textAddOn[0]}`,
    `relative flex ml-5 ${textAddOn[1]}`,
  ];

  let component;

  if (type == "future") {
    boxDiv = `relative flex flex-col w-175 h-100 place-items-end ${bgColor} border`;

    component = (
      <div className="relative flex flex-row w-full h-120 justify-center mt-10">
        <Image
          src={img}
          width={380}
          height={100}
          alt={imgAddOn}
          className="absolute flex bottom-5 left-103 -rotate-10 z-2 "
        />
        <div className={boxDiv}>
          <div className={textDiv[0]}>{text[0]}</div>
          <div className={textDiv[1]}>{text[1]}</div>
          <div className={textDiv[1]}>{text[2]}</div>
          <div className="relative flex flex-row w-115 h-10 justify-center gap-7 mt-25">
            <LinkButton
              text="Découvrir"
              textAddOn=" text-2xl "
              buttonAddOn=" relative flex justify-center items-center w-45 h-15 bg-[#e7988c] border"
              address={link[0]}
              newTab={false}
            />
            <LinkButton
              text="Billets"
              textAddOn=" text-2xl "
              buttonAddOn=" relative flex justify-center items-center w-45 h-15 bg-[#e7988c] border"
              address={link[1]}
              newTab={true}
            />
          </div>
        </div>
      </div>
    );
  } else if (type == "past") {
    boxDiv = `relative flex flex-col w-175 h-100 place-items-start ${bgColor} border`;

    component = (
      <div className="relative flex flex-row w-full h-120 justify-center mt-10">
        <div className={boxDiv}>
          <div className={textDiv[2]}>{text[0]}</div>
          <div className={textDiv[3]}>{text[1]}</div>
          <div className={textDiv[3]}>{text[2]}</div>
          <div className="relative flex flex-row w-115 h-10 justify-center gap-7 mt-25">
            <LinkButton
              text="Découvrir"
              textAddOn=" text-2xl "
              buttonAddOn=" relative flex justify-center items-center w-45 h-15 bg-[#e7988c] border"
              address={link[0]}
              newTab={false}
            />
          </div>
        </div>
        <Image
          src={img}
          width={380}
          height={100}
          alt={imgAddOn}
          className="absolute flex bottom-5 right-113 rotate-10 z-2 "
        />
      </div>
    );
  }

  return component;
}

export default EventCard;
