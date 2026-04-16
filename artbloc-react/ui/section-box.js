/*

most important ui element.
takes string as role, switch case functionality based off role?

*/

function SectionBox({
  role = "",
  text = "",
  textCSS = "",
  img = "",
  imgCSS = "",
  bgImg = "",
}) {
  let textProp;
  let textCSSProp;
  let imgProp;
  let imgCSSProp;
  let bgImgProp;

  let component = <div><h2>SectionBox</h2></div>;

  if (role === "homeStaticPic") {
    bgImgProp = `relative flex w-screen h-screen ${bgImg}`;
    component = <div className={bgImgProp}></div>;
  }

  return component;
}

export default SectionBox;
