import SectionImage from "../../ui/section-image";
import SectionBox from "../../ui/section-box";

import ArtistCard from "../../ui/artist-card";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <SectionBox />

      <SectionImage />

      <SectionBox />

      <SectionBox />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
    </div>
  );
}

export default About;
