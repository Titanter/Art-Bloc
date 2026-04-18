import Image from "next/image";

import LinkButton from "./link-button";

function Header() {
  return (
    <div className="absolute flex bg-white w-2/5 h-2/3 right-0 m-4">
      <div className="relative flex-none size-13 mt-1 ml-1.5">
        <Image
          src="/ABNavLogo.png"
          width={100}
          height={100}
          alt="Nav bar logo"
        />
      </div>

      <LinkButton
        text="HOME"
        textAddOn="m-2"
        buttonAddOn="relative flex bg-[#e78680] w-1/5 h-2/3 m-2 z-2 justify-center"
        address="/"
      />
      <LinkButton
        text="ARTISTS"
        textAddOn="m-2"
        buttonAddOn="relative flex bg-[#ea8364] w-1/5 h-2/3 m-2 z-2 justify-center"
        address="/artists"
      />
      <LinkButton
        text="EVENTS"
        textAddOn="m-2"
        buttonAddOn="relative flex bg-[#799d75] w-1/5 h-2/3 m-2 z-2 justify-center"
        address="/events"
      />
      <LinkButton
        text="ABOUT"
        textAddOn="m-2"
        buttonAddOn="relative flex bg-[#4e827d] w-1/5 h-2/3 m-2 z-2 justify-center"
        address="/about"
      />
      <LinkButton
        text="CONTACT"
        textAddOn="m-2"
        buttonAddOn="relative flex bg-[#ba6d91] w-1/5 h-2/3 m-2 z-2 justify-center"
        address="/contact"
      />
    </div>
  );
}

export default Header;
