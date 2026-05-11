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
    `relative flex ${textAddOn[0]}`,
    `relative flex ${textAddOn[1]}`,
  ];

  let component;

//fix card css

  if (type == "future") {
    boxDiv = `relative flex flex-col w-1/2 h-2/3 object-[75%_25%] justify-end items-start ${bgColor}`;

    component = (
      <div className="relative flex flex-row items-center w-full h-120 ">
        <Image
          src={img}
          width={60}
          height={90}
          alt={imgAddOn}
          className="relative flex object-[25%_75%] z-2 "
        />
        <div className={boxDiv}>
          <div className={textDiv[0]}>{text[0]}</div>
          <div className={textDiv[1]}>{text[1]}</div>
          <div className={textDiv[1]}>{text[2]}</div>
          <div className="relative flex flex-row ">
            <LinkButton
              text="Découvrir"
              textAddOn=" text-3xl "
              buttonAddOn=" relative flex justify-center items-center w-1/4 h-1/10 bg-[#e7988c] "
              address={link[0]}
              newTab={false}
            />
            <LinkButton
              text="Billets"
              textAddOn=" text-3xl "
              buttonAddOn=" relative flex justify-center items-center w-1/4 h-1/10 bg-[#e7988c] "
              address={link[1]}
              newTab={true}
            />
          </div>
        </div>
      </div>
    );
  } else if (type == "past") {
    component = (
      <div className="relative flex flex-row items-center w-full h-120 ">
        <div className={boxDiv}>
          <div className={textDiv[0]}>{text[0]}</div>
          <div className={textDiv[1]}>{text[1]}</div>
          <div className={textDiv[1]}>{text[2]}</div>
          <div className="relative flex flex-row ">
            <LinkButton
              text="Découvrir"
              textAddOn=" text-3xl "
              buttonAddOn=" relative flex justify-center items-center w-1/4 h-1/10 bg-[#e7988c] "
              address={link[0]}
              newTab={false}
            />
            <LinkButton
              text="Billets"
              textAddOn=" text-3xl "
              buttonAddOn=" relative flex justify-center items-center w-1/4 h-1/10 bg-[#e7988c] "
              address={link[1]}
              newTab={true}
            />
          </div>
        </div>
        <Image
          src={img}
          width={60}
          height={90}
          alt={imgAddOn}
          className="relative flex object-[25%_75%] z-2 "
        />
      </div>
    );
  }

  return component;
}

export default EventCard;
