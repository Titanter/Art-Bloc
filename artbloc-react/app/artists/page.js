import ArtistCard from "../../ui/artist-card";

function Artists() {
  const textNameTests = [
    ["Louis-Vincent Poellhuber", "Communications"],
    ["Jennie Ming", "Art Coordinator"],
    ["Nancy Zhu", "Art Coordinator"],
    ["Helen Vuong", "Event Coordinator"],
    ["Yu Xuan Zhao", "Curation/Design"],
    ["Tian-Su Zhong", "Event Management"],
  ];

  const textAddOnTests = [
    ["bg-[#d57278]", "bg-[#d98187]"],
    ["bg-[#548b8c]", "bg-[#5c9899]"],
  ];

  //tune grid and card css
  return (
    <div className="relative flex flex-col w-screen ">
      <div className="relative flex w-full h-26 text-8xl mt-30 ml-10">
        Nos artistes ▪
      </div>
      <div className="relative grid grid-cols-4 justify-center gap-4 w-full min-h-screen mt-15">
        <ArtistCard
          text={textNameTests[0]}
          textAddOn={textAddOnTests[0]}
          img="/ABHomeLogo.png"
          imgAddOn={textNameTests[0][0]}
          link="/"
        />
        <ArtistCard
          text={textNameTests[1]}
          textAddOn={textAddOnTests[0]}
          img="/ABHomeLogo.png"
          imgAddOn={textNameTests[1][0]}
          link="/"
        />
        <ArtistCard
          text={textNameTests[2]}
          textAddOn={textAddOnTests[0]}
          img="/ABHomeLogo.png"
          imgAddOn={textNameTests[2][0]}
          link="/"
        />
        <ArtistCard
          text={textNameTests[3]}
          textAddOn={textAddOnTests[0]}
          img="/ABHomeLogo.png"
          imgAddOn={textNameTests[3][0]}
          link="/"
        />
        <ArtistCard
          text={textNameTests[4]}
          textAddOn={textAddOnTests[1]}
          img="/ABHomeLogo.png"
          imgAddOn={textNameTests[4][0]}
          link="/"
        />
        <ArtistCard
          text={textNameTests[5]}
          textAddOn={textAddOnTests[1]}
          img="/ABHomeLogo.png"
          imgAddOn={textNameTests[5][0]}
          link="/"
        />
      </div>
    </div>
  );
}

export default Artists;
