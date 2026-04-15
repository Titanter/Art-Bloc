import Link from "next/link";

function Header() {
  return (
    <div className="absolute flex flex-row bg-gray-700 w-2/5 h-2/3 right-0 m-4">
      <div className="relative flex flex-row bg-white w-1/17 h-2/3 m-2 justify-center">
        <div className="mt-2">AB</div>
      </div>

      <Link
        href="/"
        className="relative flex flex-row bg-[#e78680] w-1/5 h-2/3 m-2 justify-center"
      >
        <div className="mt-2">HOME</div>
      </Link>

      <Link
        href="/artists"
        className="relative flex flex-row bg-[#ea8364] w-1/5 h-2/3 m-2 justify-center"
      >
        <div className="mt-2">ARTISTS</div>
      </Link>

      <Link
        href="/events"
        className="relative flex flex-row bg-[#799d75] w-1/5 h-2/3 m-2 justify-center"
      >
        <div className="mt-2">EVENTS</div>
      </Link>

      <Link
        href="/about"
        className="relative flex flex-row bg-[#4e827d] w-1/5 h-2/3 m-2 justify-center"
      >
        <div className="mt-2">ABOUT</div>
      </Link>

      <Link
        href="/contact"
        className="relative flex flex-row bg-[#ba6d91] w-1/5 h-2/3 m-2 justify-center"
      >
        <div className="mt-2">CONTACT</div>
      </Link>
    </div>
  );
}

export default Header;
