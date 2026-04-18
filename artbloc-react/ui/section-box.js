import Image from "next/image";
import Link from "next/link";

import UpcomingEventBubbles from "./upcoming-event-bubbles";
import LinkButton from "./link-button";

function SectionBox({
  role = "",
  text = "",
  textAddOn = "",
  img = "",
  imgAddOn = "",
  link = "",
  bgImg = "",
}) {
  let textProp;
  let textAddOnProp;
  let imgProp;
  let imgAddOnProp;
  let linkProp;
  let bgImgProp;

  let textDiv;
  let imgDiv;
  let bgImgDiv;
  let component = (
    <div>
      <h2>SectionBox</h2>
    </div>
  );

  if (role === "homeStaticPic") {
    textProp = text;
    textAddOnProp = textAddOn;
    imgProp = img;
    imgAddOnProp = imgAddOn;
    bgImgProp = bgImg;

    bgImgDiv = `relative flex flex-col items-center justify-center w-screen h-screen ${bgImgProp} bg-cover`;

    imgDiv = `relative flex`;

    textDiv = `relative flex ${textAddOnProp}`;

    component = (
      <div className={bgImgDiv}>
        <div className={imgDiv}>
          <Image src={imgProp} width={450} height={450} alt={imgAddOnProp} />
        </div>
        <div className={textDiv}>{textProp}</div>
      </div>
    );
  } else if (role === "homeABDesc") {
    textProp = text;
    textAddOnProp = textAddOn;

    textDiv = `relative flex flex-col items-center justify-center w-screen h-screen ${textAddOnProp}`;

    component = <div className={textDiv}>{textProp}</div>;
  } else if (role === "homeEventBubbles") {
    let UEBText;

    textProp = text.split(",");
    textAddOnProp = textAddOn.split(",");
    linkProp = link.split(",");
    bgImgProp = bgImg;

    bgImgDiv = `relative flex w-screen h-screen ${bgImgProp}`;

    textDiv = [
      `relative flex ${textAddOnProp[0]}`,
      `relative flex ${textAddOnProp[1]}`,
      `relative flex ${textAddOnProp[2]}`,
      `${textAddOnProp[3]}`,
      `relative ${textAddOnProp[4]}`,
    ];

    UEBText = textProp.slice(5, 12);

    component = (
      <div className={bgImgDiv}>
        <div className="relative flex flex-col w-200 h-full pl-12 pt-20">
          <div className={textDiv[0]}>{textProp[0]}</div>
          <div className={textDiv[1]}>{textProp[1]}</div>
          <div className={textDiv[1]}>{textProp[2]}</div>
          <div className={textDiv[1]}>{textProp[3]}</div>

          <LinkButton
            text={textProp[4]}
            textAddOn={textDiv[3]}
            buttonAddOn={textDiv[2]}
            address={linkProp[0]}
          />
        </div>

        <UpcomingEventBubbles text={UEBText} />

        <Link href={linkProp[1]} className={textDiv[4]}>
          {textProp[12]}
        </Link>
      </div>
    );
  }

  return component;
}

export default SectionBox;
