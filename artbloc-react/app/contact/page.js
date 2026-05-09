import Form from "next/form";

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
//continue working on form
  return (
    <div>
      <div className="relative flex flex-col w-screen ml-15">
        <div className="relative flex w-full h-26 text-8xl mt-40 ">
          Contactez-nous ▪
        </div>
        <div className="relative flex w-175 h-18 text-3xl mt-7 ">
          Une question? Écrivez-nous! Il nous fera un plaisir de vous répondre.
        </div>
        <div className="relative flex flex-row w-screen mt-5 min-h-screen">
          <div className="relative flex flex-col w-full ml-2">meme1</div>

          <Form action="" className="relative grid grid-cols-2 w-full ml-2">
            <input name="test" className="relative flex w-20 "/>

            <button type="submit">Submit</button>
          </Form>
        </div>
      </div>

      <SectionBox
        role="contactInvolvement"
        text={contactInvolvementText}
        textAddOn={contactInvolvementTextAddOn}
        link={contactInvolvementLink}
        bgImg={contactInvolvementBg}
      />
    </div>
  );
}

export default Contact;
