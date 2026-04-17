import Image from "next/image";

function SectionBox({
  role = "",
  text = "",
  textAddOn = "",
  img = "",
  imgAddOn = "",
  bgImg = "",
}) {
  let textProp;
  let textAddOnProp;
  let imgProp;
  let imgAddOnProp;
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

    textDiv = `relative flex flex-col items-center justify-center w-screen h-screen ${textAddOnProp} border`;

    component = <div className={textDiv}>{textProp}</div>;
  } else if (role === "homeEventBubbles") {
    /*
    textProp = text;
    textAddOnProp = textAddOn;
    bgImgProp = bgImg;

    bgImgDiv = `relative flex flex-col items-center justify-center w-screen h-screen ${bgImgProp} bg-cover`;

    textDiv = `relative flex ${textAddOnProp}`;

    component = (
      <div className={bgImgDiv}>
        <div className={textDiv}>{textProp}</div>
      </div>
    );


    next step: splice array by ","
    */
  }

  return component;
}

export default SectionBox;
