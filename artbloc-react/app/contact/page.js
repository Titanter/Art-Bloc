import SectionBox from "../../ui/section-box";

//auatomated email send using a bot email? look into it

function Contact() {
  const contactInvolvementText = [
    [
      "Joindre en tant qu’artiste",
      "Les artistes sont au coeur de notre projet. Incrivez-vous pour discuter des possibilités de participer à un de nos prochains évènements.",
    ],
    [
      "Inscrivez-vous à notre infolettre",
      "Rejoignez notre communauté et restez à jour de toutes les nouvelles de Art Bloc!",
    ],
    [
      "Contribuer à notre mission",
      "Vos contributions nous aident à pérenniser notre organisme et à toucher un public plus large grâce à l'art. Chaque don compte pour bâtir une communauté artistique inclusive.",
    ],
  ];
  const contactInvolvementTextAddOn = [
    " w-full h-28 text-3xl ",
    " w-7/8 h-40 text-lg",
  ];
  //need actual links
  const contactInvolvementLink = [
    "/contact",
    "mailto:artbloc@outlook.com",
    "/contact",
  ];

  const contactInvolvementBg = ["bg-[#cb7484]", "bg-[#d57278]", "bg-[#e8998d]"];

  return (
    <div>
      <SectionBox />

      <SectionBox
        role="contactInvolvement"
        text={contactInvolvementText}
        textAddOn={contactInvolvementTextAddOn}
        link={contactInvolvementLink}
        bgImg={contactInvolvementBg}
      />
    </div>
  );
  //NEXT: implement contactInvolvement SectionBox
}

export default Contact;
