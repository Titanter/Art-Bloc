import SectionBox from "../../ui/section-box";
import ArtistCard from "../../ui/artist-card";

function About() {
  const aboutMissionText = [
    "Mission ▪",
    "Art Bloc vise à offrir un espace  aux artistes émergents par l’intermédiaire d’expositions temporaires à Montréal.",
    `Notre mission est de réduire les barrières d'accès au monde de l’art pour les artistes émergents et de leur offrir une visibilité. En proposant un espace d'exposition accessible, le projet aspire à démocratiser l'art local. 
    
    Nos évènements encouragent  les échanges entre les artistes et le public pour créer un environnement dynamique, propice pour tisser des liens au sein de la scène culturelle locale.`,
  ];

  const aboutMissionTextAddOn = [
    " w-full h-30 text-9xl ",
    " w-3/4 h-20 text-3xl font-bold ",
    " w-3/4 h-80 text-3xl ",
  ];

  const aboutHistoryText = [
    "Notre histoire ▪",
    "Notre engagement à nourrir la créativité",
    `Art Bloc est né en octobre 2024 d'une observation simple mais percutante : plusieurs jeunes artistes abandonnent progressivement leur pratique créative sous le poids des responsabilités personnelles et professionnelles. Sa fondatrice, elle-même artiste et thérapeute, a remarqué cette tendance parmi ses amis et collègues et a voulu créer un espace où ces talents pourraient renouer avec leur identité artistique.

Là où les musiciens on les open mics, les artistes auront Art Bloc. Nous cherchons à servir de pierre angulaire au parcours de tous ceux qui veulent donner une voix à l’artiste en eux.`,
  ];

  const aboutHistoryTextAddOn = [
    " w-full h-26 text-8xl text-[#f5ebd9] ",
    " w-full h-20 text-4xl text-[#f5ebd9] font-bold ",
    " w-full h-120 text-4xl text-[#f5ebd9] ",
  ];

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

  return (
    <div>
      <SectionBox
        role="aboutMission"
        text={aboutMissionText}
        textAddOn={aboutMissionTextAddOn}
      />

      <SectionBox role="aboutStaticPic" bgImg="bg-[url(/chungus.png)]" />

      <SectionBox
        role="aboutHistory"
        text={aboutHistoryText}
        textAddOn={aboutHistoryTextAddOn}
        img="/ABHomeLogo.png"
        imgAddOn="2025 Event pic"
        bgImg="bg-[#4d7b7f]"
      />

      <div className="relative flex flex-col w-screen ">
        <div className="relative flex w-full h-26 text-8xl mt-20 ml-15">
          Rencontrez-nous ▪
        </div>
        <div className="relative flex w-full h-12 justify-center items-center text-4xl mt-10 ">
          Conseil exécutif
        </div>
        <div className="relative grid grid-cols-4 gap-y-15 justify-items-center w-full min-h-screen mt-7 mb-15">
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

          <div className="relative flex w-full col-span-4 h-12 justify-center items-center text-4xl mt-10 ">
            Satellites
          </div>

          <ArtistCard
            text={textNameTests[4]}
            textAddOn={textAddOnTests[1]}
            img="/ABHomeLogo.png"
            imgAddOn={textNameTests[4][0]}
            divAddOn="col-span-2"
            link="/"
          />
          <ArtistCard
            text={textNameTests[5]}
            textAddOn={textAddOnTests[1]}
            img="/ABHomeLogo.png"
            imgAddOn={textNameTests[5][0]}
            divAddOn="col-span-2"
            link="/"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
