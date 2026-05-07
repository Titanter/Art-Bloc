import SectionBox from "../../ui/section-box";

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
  return (
    <div>
      <SectionBox
        role="aboutMission"
        text={aboutMissionText}
        textAddOn={aboutMissionTextAddOn}
      />

      <SectionBox role="aboutStaticPic" bgImg="bg-[url(/ABBannerTemp.jpg)]" />

      <SectionBox
        role="aboutHistory"
        text={aboutHistoryText}
        textAddOn={aboutHistoryTextAddOn}
        img="/ABHomeLogo.png"
        imgAddOn="2025 Event pic"
        bgImg="bg-[#4d7b7f]"
      />

      <SectionBox />
    </div>
  );
  //remove last SectionBox and manually add section for displaying execs
}

export default About;
