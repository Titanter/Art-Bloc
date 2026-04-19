import SectionBox from "../ui/section-box";

import CardCarousel from "../ui/card-carousel";
import ArtistCard from "../ui/artist-card";
import InvolvementCard from "../ui/involvement-card";

function Home() {
  const homeEventBubblesText = [
    "Édition 2026 ▪",
    "Novembre 2026",
    "Montreal",
    "GRATUIT",
    "Billets",
    "Musique",
    "Sculpture",
    "Peinture",
    "Art digital",
    "Dessin",
    "Installations",
    "Nourriture",
    "Voir tous nos événements >",
  ];
  const homeEventBubblesTextAddOn = [
    " w-180 h-26 text-8xl text-[#f5ebd9] ",
    " w-80 h-28 text-4xl text-[#f5ebd9] items-end justify-start ",
    " w-1/4 h-1/10 bg-[#f5ebd9] left-1/4 top-1/5 justify-center items-center ",
    " text-3xl ",
    " w-115 h-12 text-4xl text-[#f5ebd9] bottom-4 right-0 ",
  ];
  const homeEventBubblesLink = [
    "https://www.eventbrite.ca/e/pop-up-exhibition-fragments-of-us-tickets-1467377809529?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl",
    "/events",
  ];

  const homeArtistCarouselText = ["Nos artistes ▪", "Voir tous nos artistes >"];
  const homeArtistCarouselTextAddOn = [
    " w-180 h-26 text-8xl ",
    " w-100 h-12 text-4xl text-[#f5ebd9] bottom-4 right-0 ",
  ];

  return (
    <div>
      <SectionBox
        role="homeStaticPic"
        text="Expositions éphémères à but non lucratif où l'art et la communauté se rencontrent"
        textAddOn=" w-140 h-22 text-3xl text-white text-center"
        img="/ABHomeLogo.png"
        imgAddOn="Nav bar logo"
        bgImg="bg-[url(/ABBannerTemp.jpg)]"
      />

      <SectionBox
        role="homeABDesc"
        text="Art Bloc est une description bien claire, orientée vers la communauté, le bloc, etc."
        textAddOn=" text-7xl text-center "
      />

      <SectionBox
        role="homeEventBubbles"
        text={homeEventBubblesText}
        textAddOn={homeEventBubblesTextAddOn}
        link={homeEventBubblesLink}
        bgImg="bg-[#586744]"
      />

      <SectionBox
        role="homeArtistCarousel"
        text={homeArtistCarouselText}
        textAddOn={homeArtistCarouselTextAddOn}
        link="/artists"
        bgImg="bg-[#ef8678]"
      />

      <SectionBox />
      <InvolvementCard />
      <InvolvementCard />
      <InvolvementCard />
    </div>
  );
}

export default Home;
