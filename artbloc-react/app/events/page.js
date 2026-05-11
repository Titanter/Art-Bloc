import EventCard from "../../ui/event-card";

function Events() {
  const eventType = ["future", "past"];
  const eventText = [
    ["Frontières Poreuses", "Novembre 2026", "Montréal"],
    ["Fragments de nous", "15 Novembre 2025", "Bâtiment 7"],
  ];

  const eventTextAddOn = [
    [
      " w-full h-12 text-3xl text-[#f5ebd9] ",
      " w-full h-10 text-xl text-[#f5ebd9] ",
    ],
    [
      " w-full h-12 text-3xl text-[#f5ebd9] ",
      " w-full h-10 text-xl text-[#f5ebd9] ",
    ],
  ];

  const eventImg = ["/AB2025Poster.png", "/AB2025Poster.png"];

  const eventImgAddOn = ["art bloc 2025 poster", "art bloc 2025 poster"];

  const eventLink = [
    [
      "/",
      "https://www.eventbrite.ca/e/pop-up-exhibition-fragments-of-us-tickets-1467377809529?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl",
    ],
    ["/", ""],
  ];

  const eventBg = [" bg-[#586744] ", " bg-[#586744] "];

  return (
    <div className="relative flex flex-col w-screen min-h-screen ml-15">
      <div className="relative flex w-full h-26 text-8xl mt-40 ">
        Nos événements ▪
      </div>
      <div className="relative flex w-175 h-18 text-4xl mt-10 ">À venir</div>

      <EventCard
        type={eventType[0]}
        text={eventText[0]}
        textAddOn={eventTextAddOn[0]}
        img={eventImg[0]}
        imgAddOn={eventImgAddOn[0]}
        link={eventLink[0]}
        bgColor={eventBg[0]}
      />

      <div className="relative flex w-175 h-18 text-4xl mt-7 ">
        Événements passés
      </div>
    </div>
  );
}

export default Events;
