import SectionBox from "../ui/section-box";

import UpcomingEventBubbles from "../ui/upcoming-event-bubbles";
import CardCarousel from "../ui/card-carousel";
import ArtistCard from "../ui/artist-card";
import InvolvementCard from "../ui/involvement-card";

function Home() {
  return (
    <div>
      <SectionBox
        role="homeStaticPic"
        text="Expositions éphémères à but non lucratif où l'art et la communauté se rencontrent"
        textAddOn="w-140 h-22 text-3xl text-white"
        img="/ABHomeLogo.png"
        imgAddOn="Nav bar logo"
        bgImg="bg-[url(/ABBannerTemp.jpg)]"
      />

      <SectionBox
        role="homeABDesc"
        text="Art Bloc est une description bien claire, orientée vers la communauté, le bloc, etc."
        textAddOn="w-140 h-22 text-5xl"
      />

      <SectionBox
        role="homeEventBubbles"
        text="Edition 2026, Novembre 2026, Montreal, GRATUIT, Musique, Sculpture, Peinture, Art digital, Dessin, Installations, Nourriture"
        textAddOn="w-140 h-22 text-3xl text-white, w-140 h-22 text-3xl text-white, w-140 h-22 text-3xl text-white"
        bgImg="bg-[#586744]"
      />
      <UpcomingEventBubbles />

      <SectionBox />
      <CardCarousel />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />

      <SectionBox />
      <InvolvementCard />
      <InvolvementCard />
      <InvolvementCard />
    </div>
  );
}

export default Home;
