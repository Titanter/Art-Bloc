
import CardCarousel from "../ui/card-carousel";
import ArtistCard from "../ui/artist-card";
import ArtistBubble from "../ui/artist-bubble";

function PastEvent(){
  return (
      <div>
        <h1>Past Event page</h1>
  
        <CardCarousel />
  
        <ArtistCard />

        <ArtistBubble />
  
      </div>
    );
};

export default PastEvent;