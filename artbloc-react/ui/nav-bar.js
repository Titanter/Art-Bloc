import Image from "next/image";

import NavButton from "./nav-button";

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

      <NavButton text="HOME" address="/" colorProperty="bg-[#e78680]" />
      <NavButton
        text="ARTISTS"
        address="/artists"
        colorProperty="bg-[#ea8364]"
      />
      <NavButton text="EVENTS" address="/events" colorProperty="bg-[#799d75]" />
      <NavButton text="ABOUT" address="/about" colorProperty="bg-[#4e827d]" />
      <NavButton
        text="CONTACT"
        address="/contact"
        colorProperty="bg-[#ba6d91]"
      />
    </div>
  );
}

export default Header;
