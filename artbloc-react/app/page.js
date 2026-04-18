import SectionBox from "../ui/section-box";


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
        textAddOn="text-7xl text-center"
      />

      <SectionBox
        role="homeEventBubbles"
        text="Édition 2026 ▪,Novembre 2026,Montreal,GRATUIT,Billets,Musique,Sculpture,Peinture,Art digital,Dessin,Installations,Nourriture,Voir tous nos événements >"
        textAddOn="w-180 h-26 text-8xl text-[#f5ebd9],w-80 h-28 text-4xl text-[#f5ebd9] items-end justify-start,w-54 h-20 bg-[#f5ebd9],text-3xl,w-95 h-10 text-3xl text-[#f5ebd9]"
        link="https://www.eventbrite.ca/e/pop-up-exhibition-fragments-of-us-tickets-1467377809529?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl,/events"
        bgImg="bg-[#586744]"
      />
      

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
