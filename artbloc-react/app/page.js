import SectionImage from "../ui/section-image";
import SectionBox from "../ui/section-box";

import UpcomingEventBubbles from "../ui/upcoming-event-bubbles";
import CardCarousel from "../ui/card-carousel";
import ArtistCard from "../ui/artist-card";
import InvolvementCard from "../ui/involvement-card";

function Home() {
  return (
    <div>
      <h1>Home page</h1>

      <SectionImage />

      <SectionBox />

      <SectionBox />
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
